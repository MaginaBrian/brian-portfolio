import "./Navbar.css";

/**
 * Navbar — sticky top header with name, role, location and nav links.
 * Receives `active` (current section id) and `scrollTo` (scroll handler) as props.
 */
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