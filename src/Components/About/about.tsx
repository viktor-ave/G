import React, { useState, useEffect, useRef } from 'react';
import './about.css';

const About: React.FC = () => {
  const [stats, setStats] = useState({ projects: 0, experience: 0, clients: 0 });
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const durations = [1800, 2200, 2000]; // Different durations for each counter
    const targets = [50, 3, 30];
    
    targets.forEach((target, i) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / durations[i], 1);
        
        setStats(prev => ({
          ...prev,
          [i === 0 ? 'projects' : i === 1 ? 'experience' : 'clients']: Math.floor(progress * target)
        }));

        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    });
  };

  const handleDownloadCV = () => {
    // Simulate download delay for better UX
    const btn = document.querySelector('.download-cv-btn');
    btn?.classList.add('downloading');
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Gitau_CV_2025.pdf';
      link.download = 'Gitau_Victor_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      btn?.classList.remove('downloading');
    }, 800);
  };

  return (
    <section id="about" className="about-section" ref={aboutRef}>
           <p className="title-word">The Evolution of a Digital Craftsman</p> <br />
          <p className="about-description">
            At <span className="text-highlight">18</span>, I'm already shaping digital experiences from <span className="text-highlight">Nairobi</span>. 
            By day, I'm an <span className="text-highlight">AI explorer</span> and problem solver. By weekend, you'll find me 
            hiking trails or diving into <span className="text-highlight">mythical lore</span> for creative inspiration. 
            I build technology that feels <span className="text-highlight">human</span>—simple, powerful, and always with purpose.
          </p>
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">
          </h2>
          
          
          <div className="why-choose-me">
            <h3 className="section-subtitle">Why Work With Me</h3>
            <ul className="qualities-list">
              {[
                "Transparent Communication - No surprises, just clear updates at every step",
                "Affordability - Premium quality without the premium price tag",
                "I Genuinely Care - Your project gets my full attention and passion",
                "Milestone Celebrations - We'll track and celebrate every win together"
              ].map((item, i) => (
                <li key={i}>
                  <div className="quality-item">
                    <div className="quality-icon">✓</div>
                    <div className="quality-text">{item}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <button className="download-cv-btn" onClick={handleDownloadCV}>
            <span className="btn-text">Download CV</span>
            <span className="btn-arrow">↓</span>
          </button>
        </div>
        
        <div className={`stats-container ${isVisible ? 'visible' : ''}`}>
          {[
            { value: stats.projects, label: "Delivered Projects", suffix: "+" },
            { value: stats.experience, label: "Years Experience", suffix: "+" },
            { value: stats.clients, label: "Happy Clients", suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="stat-item" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="stat-number">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;