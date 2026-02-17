import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

/**
 * Footer — copyright notice and social icon links.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© {new Date().getFullYear()} Brian Magina</p>

      <div className="footer-icons">
        <a
          href="https://github.com/MaginaBrian"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/brian-magina"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:brianojuk@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}