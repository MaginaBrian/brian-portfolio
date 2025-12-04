import './App.css';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="name">Your Name</div>
        <div className="position">Currently [Your Role] at [Company]</div>
        <div className="location">Based in [City], [Country]</div>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <span className="nav-separator">,</span>
          <a href="#about">About</a>
          <span className="nav-separator">,</span>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main className="main-content">
        <h1 className="creative-developer">CREATIVE DEVELOPER</h1>
        
        <div className="hero-section">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-photo"
          />
        </div>
        
        <div className="cta-section">
          <span className="arrow">↓</span>
          <p className="support-text">I SUPPORT DESIGNERS AND AGENCIES WITH CREATIVE DEVELOPMENT</p>
        </div>
        
        <div className="large-name-section">
          <h2 className="large-name">YOUR NAME</h2>
        </div>
      </main>
      
      <footer className="social-links">
        <a
          href="https://twitter.com/YourProfile"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/YourProfile"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/YourProfile"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/YourProfile"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:your.email@example.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </footer>
    </div>
  );
}

export default App;