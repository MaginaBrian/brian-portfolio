import FadeSection from "./FadeSection";
import { experience, skills, education } from "../data/experience";
import "./Experience.css";

/**
 * Experience — three sub-sections:
 *   1. Work history timeline
 *   2. Skills & technologies grid
 *   3. Education list
 */
export default function Experience() {
  return (
    <section id="work" className="section">
      <FadeSection>
        <div className="section-label">03 — Experience &amp; Skills</div>

        {/* Work History */}
        <ul className="exp-list">
          {experience.map((job, index) => (
            <li className="exp-item" key={index}>
              <div className="exp-meta">
                <p className="exp-period">{job.period}</p>
                <p className="exp-company">{job.company}</p>
              </div>
              <div className="exp-content">
                <h3 className="exp-role">{job.role}</h3>
                <ul className="exp-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="skills-section">
          <p className="detail-title">Skills &amp; Technologies</p>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-block" key={group.category}>
                <p className="skill-category">{group.category}</p>
                <div className="skill-tags">
                  {group.items.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="education-section">
          <p className="detail-title">Education</p>
          <div className="education-list">
            {education.map((ed, index) => (
              <div className="education-item" key={index}>
                <strong className="edu-title">{ed.title}</strong>
                <span className="edu-meta">{ed.org} · {ed.period}</span>
                {ed.note && <span className="edu-note">{ed.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}