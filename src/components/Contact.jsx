import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FadeSection from "./FadeSection";
import "./Contact.css";

/**
 * Contact — a minimal closing section with a headline and
 * direct contact links (email, phone, GitHub, LinkedIn).
 */
export default function Contact() {
  return (
    <section id="contact" className="section">
      <FadeSection>
        <div className="section-label">04 — Get in Touch</div>

        <div className="contact-inner">
          <h2 className="contact-heading">
            Let's build something<br />remarkable together.
          </h2>

          <div className="contact-details">
            <a href="mailto:brianojuk@gmail.com" className="contact-link">
              <FaEnvelope size={14} />
              brianojuk@gmail.com
            </a>
            <a href="tel:+254722300009" className="contact-link">
              +254 722 300 009
            </a>
            <a
              href="https://github.com/MaginaBrian"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub size={14} />
              github.com/MaginaBrian
            </a>
            <a
              href="https://linkedin.com/in/brian-magina"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </FadeSection>
    </section>
  );
}