import { lazy, Suspense, Component, type ReactNode } from "react";
import Home from "./Home";
import { profile, projects } from "./content";
const CaseStudy = lazy(() => import("./CaseStudy"));
class PageBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="wrap not-found">
        <h1>Something didn’t load.</h1>
        <p>Please reload to try again.</p>
        <a className="button" href="/">
          Return home ↗
        </a>
      </div>
    ) : (
      this.props.children
    );
  }
}
export default function App({ path = "/" }: { path?: string }) {
  const slug = path.split("/")[2] || "";
  const project = projects.find((p) => p.slug === slug);
  if (typeof document !== "undefined") {
    document.title =
      path === "/"
        ? "Behind the Build — Atharva Joshi"
        : project
          ? `${project.title} — Atharva Joshi`
          : "Page not found — Atharva Joshi";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        project?.summary ||
          "Atharva Joshi — backend systems, APIs, databases, and the thinking behind the build.",
      );
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="brand" href="/">
          atharva<span> / </span>joshi<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#experience">Experience</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a
          className="resume-link"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume <span>↗</span>
        </a>
      </header>
      <main id="main">
        <PageBoundary>
          <Suspense
            fallback={
              <p className="wrap loading" role="status">
                Opening the case study…
              </p>
            }
          >
            {path === "/" ? (
              <Home />
            ) : (
              <CaseStudy
                slug={path.startsWith("/work/") ? slug : "not-found"}
              />
            )}
          </Suspense>
        </PageBoundary>
      </main>
      <footer className="wrap">
        <a href="/">
          Behind the Build <span> / Atharva Joshi</span>
        </a>
        <span>Built with care. Explained with intent.</span>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
