import FadeSection from "./FadeSection";
import "./Hero.css";

/**
 * Hero — the landing section with the headline, CTA text, profile photo
 * and the large outlined "MAGINA" watermark.
 */
export default function Hero() {
  return (
    <section id="home" className="home-section">
      <FadeSection>
        <h1 className="hero-headline">
          Software &amp;<br />
          Mechatronics<br />
          Engineer
        </h1>
      </FadeSection>

      <FadeSection>
        <div className="hero-row">
          <div className="hero-left">
            <div className="hero-cta">
              <span className="hero-arrow">↓</span>
              <p className="hero-tagline">
                Full-stack developer &amp; mechatronics graduate —
                building scalable software and intelligent systems from Nairobi
              </p>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="/profile.jpg"
              alt="Brian Magina"
              className="hero-photo"
            />
          </div>
        </div>
      </FadeSection>

      <div className="hero-watermark-section">
        <h2 className="hero-watermark">MAGINA</h2>
      </div>
    </section>
  );
}