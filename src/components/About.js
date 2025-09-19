import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-content">
          <div className="about-header text-center mb-4">
            <h2>Innovative Digital Solutions for Modern Businesses</h2>
            <p className="section-subtitle">
              Empowering businesses with cutting-edge technology and creative design
            </p>
          </div>

          <div className="about-grid grid grid-2">
            <div className="about-story">
              <h3>Who We Are</h3>
              <p>
                Algo Tech Innovations is a forward-thinking digital solutions company founded by 
                <strong> Byamugisha Anthony</strong>. We are passionate about helping businesses 
                build a strong online presence and leverage technology to grow.
              </p>
              <p>
                We specialize in designing and developing modern websites and mobile applications 
                that make brands stand out in a competitive market.
              </p>
            </div>

            <div className="about-mission">
              <h3>Why We Exist</h3>
              <div className="mission-points">
                <div className="mission-point">
                  <div className="point-icon">❌</div>
                  <p>Many businesses lose customers because they lack a professional online presence.</p>
                </div>
                <div className="mission-point">
                  <div className="point-icon">🔍</div>
                  <p>Today's clients search online before making purchases; if your business isn't there, you're missing out.</p>
                </div>
                <div className="mission-point">
                  <div className="point-icon">🚀</div>
                  <p>We provide businesses with the digital tools needed to attract, engage, and retain customers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h3 className="text-center">Our Technology Stack</h3>
            <div className="stack-grid">
              <div className="stack-category">
                <h4>Backend Development</h4>
                <div className="tech-items">
                  <span className="tech-item">Python Django</span>
                  <span className="tech-item">RESTful APIs</span>
                  <span className="tech-item">Database Design</span>
                </div>
              </div>
              
              <div className="stack-category">
                <h4>Frontend Development</h4>
                <div className="tech-items">
                  <span className="tech-item">React</span>
                  <span className="tech-item">JavaScript</span>
                  <span className="tech-item">HTML5 & CSS3</span>
                  <span className="tech-item">TailwindCSS</span>
                </div>
              </div>
              
              <div className="stack-category">
                <h4>Mobile & Design</h4>
                <div className="tech-items">
                  <span className="tech-item">Flutter</span>
                  <span className="tech-item">UI/UX Design</span>
                  <span className="tech-item">Graphic Design</span>
                  <span className="tech-item">Brand Identity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;