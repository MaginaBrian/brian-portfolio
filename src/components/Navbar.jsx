import "./Navbar.css";

export default function Navbar({ active, scrollTo }) {
  return (
    <header className="header">
      <div className="nav-name">Brian Magina</div>
      <div className="nav-position">Currently Software Engineer at Agrinama</div>
      <div className="nav-location">Based in Nairobi, Kenya</div>

      <nav className="nav-links">
        <button
          className={active === "work" ? "active" : ""}
          onClick={() => scrollTo("work")}
        >
          Work
        </button>
        <span className="nav-separator">,</span>
        <button
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollTo("projects")}
        >
          Projects
        </button>
        <span className="nav-separator">,</span>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv-link"
        >
          CV
        </a>
        <span className="nav-separator">,</span>
        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}