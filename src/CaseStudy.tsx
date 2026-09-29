import Diagram from "./Diagram";
import { projects, profile } from "./content";
export default function CaseStudy({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <section className="wrap not-found">
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1>
          This page hasn’t
          <br />
          been built.
        </h1>
        <a className="button" href="/">
          Back to the portfolio ↗
        </a>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="case wrap">
      <a className="text-link" href="/#work">
        ← All work
      </a>
      <header className="case-heading">
        <span className="eyebrow">{project.category} / CASE STUDY</span>
        <h1>
          {project.title}
          <em>{project.subtitle}</em>
        </h1>
        <p>{project.summary}</p>
      </header>
      <div className="case-meta">
        <div>
          <span>TIMEFRAME</span>
          <p>{project.timeframe}</p>
        </div>
        <div>
          <span>MY ROLE</span>
          <p>{project.role}</p>
        </div>
        <div>
          <span>TECHNOLOGIES</span>
          <p>{project.technologies.join(" · ")}</p>
        </div>
      </div>
      {project.teamContext && (
        <p className="team">Team context: {project.teamContext}.</p>
      )}
      <nav className="case-nav" aria-label="Case study sections">
        <a href="#problem">01 Problem</a>
        <a href="#contribution">02 Contribution</a>
        <a href="#system">03 System</a>
        <a href="#results">04 Results</a>
      </nav>
      <section id="problem" className="case-section">
        <span className="eyebrow">01 / THE PROBLEM</span>
        <h2>What needed to work.</h2>
        <p>{project.problem}</p>
      </section>
      <section id="contribution" className="case-section">
        <span className="eyebrow">02 / MY CONTRIBUTION</span>
        <h2>The part I built.</h2>
        <ol className="contributions">
          {project.contributions.map((item, i) => (
            <li key={item}>
              <span>0{i + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="system" className="case-section">
        <span className="eyebrow">03 / THE SYSTEM</span>
        <h2>How the pieces connect.</h2>
        <p>
          A conceptual view of the components described in my resume. Select a
          component to inspect it.
        </p>
        <Diagram project={project} />
        <details className="static-details">
          <summary>Read the full system description</summary>
          {project.nodes.map((node) => (
            <p key={node.title}>
              <strong>{node.title}.</strong> {node.detail}
            </p>
          ))}
        </details>
      </section>
      <section id="results" className="case-section">
        <span className="eyebrow">04 / REPORTED RESULTS</span>
        <h2>What came out of the work.</h2>
        <div className="results">
          {project.results.map((result) => (
            <div key={result.label}>
              <strong>{result.value}</strong>
              <p>{result.label}</p>
            </div>
          ))}
        </div>
        <p className="source-note">
          Source: my resume. These figures are reported outcomes, not
          independently reproduced benchmarks.
          {project.slug === "photoshare"
            ? " Average response latency: approximately 400ms → 260ms."
            : ""}
        </p>
        {project.demo && (
          <a
            className="button"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            View project demo ↗
          </a>
        )}
      </section>
      <div className="case-end">
        <div>
          <span className="eyebrow">KEEP EXPLORING</span>
          <h3>
            <a href={`/work/${next.slug}`}>{next.title} ↗</a>
          </h3>
        </div>
        <a className="text-link" href={`mailto:${profile.email}`}>
          Talk about the work ↗
        </a>
      </div>
    </article>
  );
}
