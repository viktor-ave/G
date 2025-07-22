import React, { useRef, useEffect, useState } from 'react';
import { FaReact, FaJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiTypescript } from 'react-icons/si';
import './services.css';

// Service data
const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces that users love with thoughtful user journeys and pixel-perfect designs.",
    icon: "/assets/UIUX_Design.jpg"
  },
  {
    title: "Web Development",
    description: "Building fast, responsive websites that look great on any device and drive real results.",
    icon: "/assets/Custom_Web_Dev.jpg"
  },
  {
    title: "Mobile App Development",
    description: "Creating smooth, native-feeling mobile experiences for iOS and Android platforms.",
    icon: "/assets/App_Dev.jpg"
  },
  {
    title: "Custom Web Solutions",
    description: "Tailored web applications designed to solve your specific business challenges.",
    icon: "/assets/Web_Deign.jpg"
  },
  {
    title: "AI Integration",
    description: "Implementing smart AI features to automate tasks and enhance user experiences.",
    icon: "/assets/AI_Services.jpg"
  },
  {
    title: "Motion Graphics",
    description: "Adding dynamic animations and micro-interactions to bring your digital products to life.",
    icon: "/assets/Motion_Graphics.jpg"
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Explore What I Offer</h2>
          <p className="section-subtitle">YOUR IDEA, MY PASSION</p>
        </div>

        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-icon">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="card-icon-image"
                />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="tech-icons">
          <FaReact className="tech-icon" title="React" />
          <FaJs className="tech-icon" title="JavaScript" />
          <FaPhp className="tech-icon" title="PHP" />
          <SiTailwindcss className="tech-icon" title="Tailwind CSS" />
          <SiBootstrap className="tech-icon" title="Bootstrap" />
          <SiTypescript className="tech-icon" title="TypeScript" />
          <FaLaravel className="tech-icon" title="Laravel" />
        </div>
      </div>
    </section>
  );
};

export default Services;