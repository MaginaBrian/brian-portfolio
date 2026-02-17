import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #e8e8e8;
    --fg: #000;
    --muted: #555;
    --border: #000;
    --card-bg: #d8d8d8;
    --accent: #000;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: 'DM Mono', monospace;
  }

  /* ---- PORTFOLIO CONTAINER ---- */
  .portfolio-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(20px, 4vw, 60px);
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* ---- HEADER ---- */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(10px, 2vw, 30px);
    margin-bottom: clamp(40px, 8vw, 80px);
    width: 100%;
    flex-wrap: wrap;
  }
  .name { font-size: clamp(13px, 1.8vw, 17px); font-weight: 500; letter-spacing: 0.5px; white-space: nowrap; font-family: 'DM Mono', monospace; }
  .position { font-size: clamp(11px, 1.4vw, 13px); color: var(--muted); font-weight: 400; text-align: center; flex: 1; white-space: nowrap; font-family: 'DM Mono', monospace; letter-spacing: 0.3px; }
  .location { font-size: clamp(11px, 1.4vw, 13px); color: var(--muted); font-weight: 400; white-space: nowrap; font-family: 'DM Mono', monospace; }
  .nav-links { display: flex; align-items: center; gap: 0; white-space: nowrap; }
  .nav-links button {
    font-size: clamp(11px, 1.4vw, 13px);
    color: var(--fg);
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 400;
    font-family: 'DM Mono', monospace;
    transition: opacity 0.2s;
    padding: 0;
    letter-spacing: 0.3px;
  }
  .nav-links button:hover { opacity: 0.5; }
  .nav-separator { font-size: clamp(11px, 1.4vw, 13px); color: var(--muted); margin: 0 clamp(3px, 0.5vw, 8px); }

  /* ---- SECTION BASE ---- */
  .section { padding: clamp(60px, 10vw, 120px) 0; border-top: 1px solid var(--border); }
  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 60px;
  }

  /* ---- HOME SECTION ---- */
  .home-section { flex: 1; display: flex; flex-direction: column; position: relative; padding-bottom: clamp(40px, 8vw, 100px); }
  .creative-developer {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(38px, 7vw, 88px);
    font-weight: 400;
    font-style: italic;
    margin-bottom: clamp(30px, 6vw, 60px);
    line-height: 1.05;
    letter-spacing: -1px;
  }
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(30px, 5vw, 60px);
    margin-bottom: clamp(30px, 6vw, 60px);
    flex-wrap: wrap;
  }
  .hero-left { flex: 1; min-width: 220px; display: flex; align-items: center; }
  .hero-right { max-width: clamp(220px, 28vw, 360px); width: 100%; flex-shrink: 0; }
  .profile-photo { width: 100%; height: auto; object-fit: cover; display: block; filter: grayscale(20%); }

  .cta-section { display: flex; align-items: center; gap: clamp(15px, 3vw, 30px); }
  .arrow { font-family: 'DM Serif Display', serif; font-size: clamp(48px, 6vw, 72px); font-weight: 400; line-height: 1; flex-shrink: 0; }
  .support-text { font-size: clamp(11px, 1.5vw, 14px); max-width: 340px; text-transform: uppercase; letter-spacing: 2px; line-height: 1.7; font-weight: 400; color: var(--muted); }

  .large-name-section { position: absolute; bottom: 0; right: 0; text-align: right; overflow: hidden; }
  .large-name {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(38px, 9vw, 130px);
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 0.85;
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 1px var(--fg);
  }

  /* ---- ABOUT SECTION ---- */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
  .about-bio {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(18px, 2.5vw, 26px);
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.3px;
  }
  .about-details { display: flex; flex-direction: column; gap: 40px; }
  .detail-block {}
  .detail-title { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; font-weight: 500; }
  .detail-items { display: flex; flex-direction: column; gap: 6px; }
  .detail-item { font-size: 13px; line-height: 1.6; }
  .detail-item span { color: var(--muted); font-size: 11px; display: block; margin-top: 1px; }

  /* ---- SKILLS SECTION ---- */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 2px; margin-top: 40px; }
  .skill-block { background: var(--card-bg); padding: 24px 20px; border: 1px solid transparent; transition: border-color 0.2s; }
  .skill-block:hover { border-color: var(--fg); }
  .skill-category { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; font-weight: 500; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill-tag { font-size: 11px; padding: 3px 8px; background: var(--bg); border: 1px solid #bbb; letter-spacing: 0.5px; }

  /* ---- PROJECTS SECTION ---- */
  .projects-list { display: flex; flex-direction: column; gap: 2px; margin-top: 40px; }
  .project-item {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 30px;
    align-items: start;
    padding: 28px 0;
    border-top: 1px solid #ccc;
    cursor: default;
    transition: background 0.15s;
  }
  .project-item:last-child { border-bottom: 1px solid #ccc; }
  .project-item:hover { background: rgba(0,0,0,0.02); }
  .project-date { font-size: 11px; color: var(--muted); letter-spacing: 1px; padding-top: 4px; }
  .project-body {}
  .project-title { font-family: 'DM Serif Display', serif; font-size: clamp(17px, 2.5vw, 22px); font-weight: 400; letter-spacing: -0.2px; margin-bottom: 8px; }
  .project-desc { font-size: 12px; color: var(--muted); line-height: 1.7; max-width: 520px; margin-bottom: 14px; }
  .project-techs { display: flex; flex-wrap: wrap; gap: 6px; }
  .project-tech { font-size: 10px; padding: 3px 8px; border: 1px solid #aaa; letter-spacing: 1px; text-transform: uppercase; color: var(--muted); }
  .project-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; padding-top: 4px; }
  .project-link { color: var(--fg); font-size: 14px; text-decoration: none; transition: opacity 0.2s; }
  .project-link:hover { opacity: 0.5; }

  /* ---- EXPERIENCE SECTION ---- */
  .experience-list { display: flex; flex-direction: column; gap: 0; margin-top: 40px; }
  .exp-item { display: grid; grid-template-columns: 180px 1fr; gap: 40px; padding: 32px 0; border-top: 1px solid #ccc; }
  .exp-item:last-child { border-bottom: 1px solid #ccc; }
  .exp-meta {}
  .exp-period { font-size: 11px; color: var(--muted); letter-spacing: 1px; margin-bottom: 6px; }
  .exp-company { font-size: 13px; font-weight: 500; letter-spacing: 0.3px; }
  .exp-role-title { font-family: 'DM Serif Display', serif; font-size: clamp(17px, 2vw, 21px); font-weight: 400; margin-bottom: 12px; letter-spacing: -0.2px; }
  .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 7px; }
  .exp-bullets li { font-size: 12px; color: var(--muted); line-height: 1.7; padding-left: 16px; position: relative; }
  .exp-bullets li::before { content: '—'; position: absolute; left: 0; color: #999; }

  /* ---- CONTACT SECTION ---- */
  .contact-inner { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 40px; }
  .contact-heading { font-family: 'DM Serif Display', serif; font-size: clamp(32px, 6vw, 72px); font-weight: 400; font-style: italic; line-height: 1.05; letter-spacing: -1px; max-width: 600px; }
  .contact-details { display: flex; flex-direction: column; gap: 12px; text-align: right; }
  .contact-link { font-size: 13px; color: var(--fg); text-decoration: none; transition: opacity 0.2s; letter-spacing: 0.5px; display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
  .contact-link:hover { opacity: 0.5; }

  /* ---- FOOTER ---- */
  .social-links { display: flex; gap: clamp(15px, 2vw, 25px); justify-content: space-between; align-items: center; margin-top: 60px; padding-top: clamp(20px, 3vw, 30px); border-top: 1px solid var(--border); flex-wrap: wrap; }
  .footer-copy { font-size: 11px; color: var(--muted); letter-spacing: 1px; }
  .social-icons { display: flex; gap: 20px; }
  .social-icons a { color: var(--fg); font-size: clamp(16px, 2vw, 20px); text-decoration: none; transition: opacity 0.2s, transform 0.2s; display: flex; align-items: center; }
  .social-icons a:hover { opacity: 0.5; transform: translateY(-2px); }

  /* ---- ACTIVE NAV ---- */
  .nav-links button.active { text-decoration: underline; text-underline-offset: 4px; }

  /* ---- FADE IN ---- */
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 768px) {
    .header { flex-direction: column; align-items: flex-start; gap: 8px; }
    .position { text-align: left; flex: none; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .project-item { grid-template-columns: 1fr; gap: 12px; }
    .project-date { display: none; }
    .project-links { flex-direction: row; align-items: center; }
    .exp-item { grid-template-columns: 1fr; gap: 12px; }
    .large-name-section { position: relative; bottom: auto; right: auto; text-align: left; margin-top: 40px; }
    .large-name { white-space: normal; word-break: break-word; }
    .contact-inner { flex-direction: column; align-items: flex-start; }
    .contact-details { text-align: left; }
    .contact-link { justify-content: flex-start; }
  }

  @media (max-width: 480px) {
    .hero-section { flex-direction: column; }
    .hero-right { max-width: 100%; }
  }
`;

const projectsData = [
  {
    date: "NOV 2025",
    title: "MyDuka Backend API",
    github: "https://github.com/myduka-app/myduka-backend",
    external: "https://github.com/myduka-app/myduka-backend",
    tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
    desc: "RESTful API for MyDuka inventory system with JWT authentication and role-based access control for Merchants, Admins, and Clerks.",
  },
  {
    date: "AUG 2025",
    title: "Weather Dashboard",
    github: "https://github.com/MaginaBrian/weather-app",
    external: "",
    tech: ["React", "OpenWeather API", "CSS3"],
    desc: "Interactive weather forecast application with location search and 5-day forecasts using OpenWeather API.",
  },
  {
    date: "JUL 2025",
    title: "Task Manager",
    github: "https://github.com/MaginaBrian/task-manager",
    external: "",
    tech: ["React", "Flask", "SQLite", "JWT"],
    desc: "Full-stack task management application with user authentication, priority levels, and deadline tracking.",
  },
  {
    date: "JUN 2025",
    title: "Blog Platform",
    github: "https://github.com/MaginaBrian/blog-platform",
    external: "",
    tech: ["React", "Flask", "PostgreSQL", "Markdown"],
    desc: "Blogging platform with Markdown support, user authentication, comments, and tag-based categorization.",
  },
  {
    date: "MAY 2025",
    title: "E-commerce Store",
    github: "https://github.com/MaginaBrian/ecommerce",
    external: "",
    tech: ["React", "Flask", "Stripe API", "PostgreSQL"],
    desc: "E-commerce platform with product catalog, shopping cart, and Stripe payment integration.",
  },
  {
    date: "APR 2025",
    title: "Portfolio Website",
    github: "https://github.com/MaginaBrian/portfolio",
    external: "",
    tech: ["React", "Vite", "Styled Components"],
    desc: "Personal portfolio website showcasing projects and skills in mechatronics engineering and full-stack development.",
  },
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Flask", "SQLAlchemy", "Tailwind CSS", "Vite"] },
  { category: "Databases", items: ["PostgreSQL", "SQLite"] },
  { category: "Auth & Security", items: ["JWT", "bcrypt"] },
  { category: "Automation", items: ["PLC Programming", "SCADA", "Control Systems", "Instrumentation"] },
  { category: "Tools", items: ["Git", "GitHub", "REST APIs"] },
];

const experience = [
  {
    period: "OCT 2025 — PRESENT",
    company: "Agrinama",
    role: "Software Engineer",
    bullets: [
      "Developed and maintained full-stack web applications using React, Flask, and SQLAlchemy",
      "Built secure REST APIs with JWT-based authentication and role-based access control",
      "Designed Java House Radio — an online radio streaming platform with admin controls and activity tracking",
      "Built MyDuka, an inventory and sales management system supporting merchants, admins, and clerks",
      "Used Git and GitHub for version control and collaborative development",
    ],
  },
  {
    period: "JAN 2024 — APR 2024",
    company: "International Energy Technik",
    role: "Attachee",
    bullets: [
      "Developed PLC programs and SCADA system designs",
      "Participated in low voltage panel design and testing",
      "Contributed to Building Management System (BMS) design",
    ],
  },
  {
    period: "JAN 2023 — APR 2023",
    company: "Kenya Pipeline Company",
    role: "Attachee",
    bullets: [
      "Maintained pipeline and pump instrumentation systems",
      "Monitored PLC and SCADA operations",
      "Calibrated gauges and measurement instruments",
    ],
  },
];

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>;
}

export default function App() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = ["home", "projects", "work", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-container">
        {/* HEADER */}
        <header className="header">
          <div className="name">Brian Magina</div>
          <div className="position">Currently Software Engineer at Agrinama</div>
          <div className="location">Based in Nairobi, Kenya</div>
          <nav className="nav-links">
            <button className={active === "work" ? "active" : ""} onClick={() => scrollTo("work")}>Work</button>
            <span className="nav-separator">,</span>
            <button className={active === "projects" ? "active" : ""} onClick={() => scrollTo("projects")}>Projects</button>
            <span className="nav-separator">,</span>
            <button className={active === "contact" ? "active" : ""} onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
        </header>

        {/* HOME */}
        <section id="home" className="home-section">
          <FadeSection>
            <h1 className="creative-developer">Software &amp;<br />Mechatronics<br />Engineer</h1>
          </FadeSection>

          <FadeSection>
            <div className="hero-section">
              <div className="hero-left">
                <div className="cta-section">
                  <span className="arrow">↓</span>
                  <p className="support-text">
                    Full-stack developer &amp; mechatronics graduate — building scalable software and intelligent systems from Nairobi
                  </p>
                </div>
              </div>
              <div className="hero-right">
                <img src="/profile.jpg" alt="Brian Magina" className="profile-photo" />
              </div>
            </div>
          </FadeSection>


          <div className="large-name-section">
            <h2 className="large-name">MAGINA</h2>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <FadeSection>
            <div className="section-label">02 — Selected Projects</div>
            <div className="projects-list">
              {projectsData.map((p, i) => (
                <div className="project-item" key={i}>
                  <div className="project-date">{p.date}</div>
                  <div className="project-body">
                    <div className="project-title">{p.title}</div>
                    <div className="project-desc">{p.desc}</div>
                    <div className="project-techs">
                      {p.tech.map((t) => <span className="project-tech" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub"><FaGithub /></a>
                    {p.external && (
                      <a href={p.external} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live"><FaExternalLinkAlt size={12} /></a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <FadeSection>
            <div className="section-label">03 — Experience &amp; Skills</div>

            <div className="experience-list">
              {experience.map((e, i) => (
                <div className="exp-item" key={i}>
                  <div className="exp-meta">
                    <div className="exp-period">{e.period}</div>
                    <div className="exp-company">{e.company}</div>
                  </div>
                  <div>
                    <div className="exp-role-title">{e.role}</div>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ marginTop: "60px" }}>
              <div className="detail-title">Skills &amp; Technologies</div>
              <div className="skills-grid">
                {skills.map((s) => (
                  <div className="skill-block" key={s.category}>
                    <div className="skill-category">{s.category}</div>
                    <div className="skill-tags">
                      {s.items.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div style={{ marginTop: "60px" }}>
              <div className="detail-title">Education</div>
              <div className="about-details" style={{ marginTop: "20px" }}>
                {[
                  { title: "Full Stack Software Development", org: "Moringa School", period: "Feb 2025 – Nov 2025" },
                  { title: "BSc. Mechatronics Engineering", org: "Jomo Kenyatta University of Agriculture and Technology", period: "2019 – 2024", note: "Second Class Honours (Lower Division)" },
                  { title: "KCSE — Grade A-", org: "Maranda High School", period: "2015 – 2018" },
                ].map((ed, i) => (
                  <div className="detail-item" key={i}>
                    <strong style={{ fontSize: "14px" }}>{ed.title}</strong>
                    <span>{ed.org} · {ed.period}</span>
                    {ed.note && <span>{ed.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <FadeSection>
            <div className="section-label">04 — Get in Touch</div>
            <div className="contact-inner">
              <h2 className="contact-heading">Let's build something remarkable together.</h2>
              <div className="contact-details">
                <a href="mailto:brianojuk@gmail.com" className="contact-link"><FaEnvelope size={14} /> brianojuk@gmail.com</a>
                <a href="tel:+254722300009" className="contact-link">+254 722 300 009</a>
                <a href="https://github.com/MaginaBrian" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGithub size={14} /> github.com/MaginaBrian</a>
                <a href="https://linkedin.com/in/brian-magina" target="_blank" rel="noopener noreferrer" className="contact-link"><FaLinkedin size={14} /> LinkedIn</a>
              </div>
            </div>
          </FadeSection>
        </section>

        {/* FOOTER */}
        <footer className="social-links">
          <div className="footer-copy">© 2025 Brian Magina</div>
          <div className="social-icons">
            <a href="https://github.com/MaginaBrian" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/brian-magina" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:brianojuk@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </footer>
      </div>
    </>
  );
}