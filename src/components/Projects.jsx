import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FadeSection from "./FadeSection";
import { projectsData } from "../data/projects";
import "./Projects.css";

/**
 * Projects — lists all portfolio projects with date, description,
 * tech stack tags, and links to GitHub / live demo.
 */
export default function Projects() {
  return (
    <section id="projects" className="section">
      <FadeSection>
        <div className="section-label">02 — Selected Projects</div>

        <ul className="projects-list">
          {projectsData.map((project, index) => (
            <li className="project-item" key={index}>
              <span className="project-date">{project.date}</span>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-techs">
                  {project.tech.map((tag) => (
                    <span className="project-tech" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub repository"
                >
                  <FaGithub />
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </FadeSection>
    </section>
  );
}