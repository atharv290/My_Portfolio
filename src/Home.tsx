import Diagram from "./Diagram";
import { projects, profile, experience } from "./content";
const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">
    {items.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
);
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="blue-dot" /> SOFTWARE ENGINEERING / PUNE, INDIA
          </div>
          <h1>
            Every system
            <br />
            has a story.
            <br />
            <em>
              Here’s how
              <br className="mobile-break" /> I built mine.
            </em>
          </h1>
          <p className="hero-description">
            I’m Atharva, a Computer Engineering student.
            <br />
            Building backend systems, APIs, and software
            <br className="desktop-break" /> that connects ideas to the real
            world.
          </p>
          <div className="actions">
            <a className="button" href="#work">
              Explore my work <span>↘</span>
            </a>
            <a
              className="text-link"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View resume ↗
            </a>
          </div>
          <div className="hero-caption">
            <span>BEHIND THE BUILD</span>
            <span>A collection of engineering work & thinking.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="margin-label">FROM INTERFACE TO INFRASTRUCTURE</div>
          <Diagram project={projects[0]} compact />
          <div className="visual-caption">
            <span>01 — Inside SEGMENTA</span>
            <p>
              A closer look at the backend.
              <br />
              Explore the components above.
            </p>
          </div>
        </div>
      </section>
      <section className="work wrap" id="work">
        <div className="section-label">
          <span>01 / SELECTED WORK</span>
          <span>THE PROBLEM. THE CONTRIBUTION. THE SYSTEM.</span>
        </div>
        <div className="feature">
          <div className="feature-copy">
            <div className="eyebrow">
              FEATURED CASE STUDY <span className="line" />
            </div>
            <h2>
              SEGMENTA<span>LCD Design Automation</span>
            </h2>
            <p>{projects[0].summary}</p>
            <div className="ownership">
              <span>MY CONTRIBUTION</span>
              <p>
                15+ REST APIs. PostgreSQL schema design.
                <br />
                API contracts that connect the pieces.
              </p>
            </div>
            <Tags items={projects[0].technologies} />
            <a className="text-link" href="/work/segmenta">
              Go behind the build <span>↗</span>
            </a>
          </div>
          <a
            className="blueprint"
            href="/work/segmenta"
            aria-label="Read the SEGMENTA case study"
          >
            <div className="blueprint-top">
              SEGMENTA / CONCEPTUAL LCD SCHEMATIC <span>01</span>
            </div>
            <div className="lcd-frame">
              <div className="lcd-screen">
                <span className="lcd-digits">12:48</span>
                <div className="lcd-baseline">
                  <span>LCD DESIGN</span>
                  <span>● ● ●</span>
                </div>
              </div>
              <div className="pins">
                {Array.from({ length: 16 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
            <div className="drawing-line">
              <span>INTERFACE</span>
              <span>API LAYER</span>
              <span>DATA MODEL</span>
            </div>
            <div className="blueprint-bottom">
              A backend for engineering automation.<span>↗</span>
            </div>
          </a>
        </div>
        <div className="project-list">
          {projects.slice(1).map((project, i) => (
            <a
              href={`/work/${project.slug}`}
              className="project-row"
              key={project.slug}
            >
              <span className="project-number">0{i + 2}</span>
              <div>
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className="role">{project.role}</span>
              </div>
              <div className="project-tech">
                {project.technologies.slice(0, 3).join(" / ")}
              </div>
              <span className="row-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section className="experience wrap" id="experience">
        <div className="section-label">
          <span>02 / EXPERIENCE</span>
          <span>LEARNING BY BUILDING</span>
        </div>
        <div className="section-grid">
          <h2>
            From the classroom
            <br />
            <em>to the codebase.</em>
          </h2>
          <div>
            {experience.map((job) => (
              <article className="job" key={job.company}>
                <span className="eyebrow">{job.date}</span>
                <h3>{job.title}</h3>
                <div className="company">{job.company}</div>
                <p>{job.description}</p>
                {job.link && (
                  <a
                    className="text-link"
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website ↗
                  </a>
                )}
              </article>
            ))}
            <p className="source-note">
              Outcomes as reported in my resume; measurement setups are not
              published.
            </p>
          </div>
        </div>
      </section>
      <section className="about wrap" id="about">
        <div className="section-label">
          <span>03 / A LITTLE CONTEXT</span>
          <span>THE PERSON BEHIND THE BUILD</span>
        </div>
        <div className="section-grid">
          <div>
            <h2>
              Curious about the
              <br />
              <em>parts you don’t see.</em>
            </h2>
            <p className="about-text">
              My work spans backend services, databases, and data-driven
              applications—from API contracts for LCD design automation to
              connected safety systems.
            </p>
            <a
              className="text-link"
              href="https://codolio.com/profile/Atharva_Joshi/card"
              target="_blank"
              rel="noreferrer"
            >
              521+ DSA problems solved ↗
            </a>
          </div>
          <div className="education">
            <span className="eyebrow">EDUCATION</span>
            <article>
              <h3>B.Tech · Computer Engineering</h3>
              <p>AISSMS IOIT, Pune</p>
              <span>CGPA 8.03</span>
            </article>
            <article>
              <h3>Diploma · Computer Engineering</h3>
              <p>Government Polytechnic Jintur</p>
              <span>86% · Diploma Department Topper</span>
            </article>
            <div className="skills">
              <span className="eyebrow">MY TOOLKIT</span>
              <Tags
                items={[
                  "Python",
                  "JavaScript",
                  "SQL",
                  "Node.js",
                  "React",
                  "PostgreSQL",
                  "MySQL",
                  "Git",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="section-label">
            <span>04 / WHAT’S NEXT?</span>
            <span>PUNE, INDIA</span>
          </div>
          <div className="contact-main">
            <h2>
              Let’s build something
              <br />
              <em>worth understanding.</em>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label="Email Atharva"
            >
              ↗
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
