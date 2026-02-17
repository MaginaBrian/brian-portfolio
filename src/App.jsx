import { useState, useEffect } from "react";
import "./styles/global.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * App — root component.
 * Tracks the active nav section via IntersectionObserver and passes
 * `active` + `scrollTo` down to Navbar.
 */
export default function App() {
  const [active, setActive] = useState("home");

  // Scroll to a section by id and update active state
  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Highlight the correct nav link as the user scrolls
  useEffect(() => {
    const sectionIds = ["home", "projects", "work", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <Navbar active={active} scrollTo={scrollTo} />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}