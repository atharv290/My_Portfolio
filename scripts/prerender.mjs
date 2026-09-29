import { createServer } from "vite";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { projects } = await server.ssrLoadModule("/src/content.ts");
  const { createElement } = await import("react");
  const template = await readFile("dist/index.html", "utf8");
  for (const path of ["/", ...projects.map((p) => `/work/${p.slug}`)]) {
    const html = await new Promise((resolve, reject) => {
      const sink = new PassThrough();
      let output = "";
      sink.on("data", (chunk) => (output += chunk));
      sink.on("end", () => resolve(output));
      const stream = renderToPipeableStream(createElement(App, { path }), {
        onAllReady() {
          stream.pipe(sink);
        },
        onError: reject,
      });
    });
    const project = projects.find((p) => path === `/work/${p.slug}`);
    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root" data-page="${path}">${html}</div>`,
    );
    if (project)
      page = page
        .replace(
          "<title>Behind the Build — Atharva Joshi</title>",
          `<title>${project.title} — Atharva Joshi</title>`,
        )
        .replace(
          "Atharva Joshi's engineering portfolio. Explore backend APIs, databases, and connected systems.",
          project.summary,
        );
    const folder = path === "/" ? "dist" : `dist${path}`;
    await mkdir(folder, { recursive: true });
    await writeFile(`${folder}/index.html`, page);
  }
  console.log("Prerendered homepage and 4 case studies.");
} finally {
  await server.close();
}
