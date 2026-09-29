import { useState } from "react";
import type { Project } from "./content";
export default function Diagram({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const [selected, setSelected] = useState(1);
  return (
    <div className={`diagram ${compact ? "compact" : ""}`}>
      <div className="diagram-top">
        <span>
          <i /> SYSTEM OVERVIEW
        </span>
        <span>
          FIG. 0
          {["segmenta", "healthcare", "photoshare", "smart-helmet"].indexOf(
            project.slug,
          ) + 1}
        </span>
      </div>
      <div className="diagram-grid">
        <div className="diagram-heading">
          {project.title}
          <span>{project.subtitle}</span>
        </div>
        <div className="node-path">
          {project.nodes.slice(0, 3).map((node, i) => (
            <div className="node-wrap" key={node.title}>
              <button
                aria-pressed={selected === i}
                className={`node ${selected === i ? "selected" : ""}`}
                onClick={() => setSelected(i)}
              >
                <span className="node-icon">
                  {i === 0 ? "▧" : i === 1 ? "⌘" : "▤"}
                </span>
                <strong>{node.title}</strong>
                <small>
                  {i === 0
                    ? "01 / INTERFACE"
                    : i === 1
                      ? "02 / LOGIC"
                      : "03 / OUTPUT"}
                </small>
              </button>
              {i < 2 && (
                <span className="connector" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <button
          className={`contract ${selected === 3 ? "active" : ""}`}
          aria-pressed={selected === 3}
          onClick={() => setSelected(3)}
        >
          <span>↳</span> {project.nodes[3].title} <span>↗</span>
        </button>
      </div>
      <div className="diagram-note" aria-live="polite">
        <span>0{selected + 1}</span>
        <p>{project.nodes[selected].detail}</p>
      </div>
      <div className="diagram-foot">
        CONCEPTUAL SCHEMATIC <span>SELECT A COMPONENT ↗</span>
      </div>
    </div>
  );
}
