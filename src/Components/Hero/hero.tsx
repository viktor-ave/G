import React, { useEffect, useState } from 'react';
import './hero.css'; 

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Gitau Victor";
  const tagline = "I build what you imagine.".split('');
  const words = ["Simple", "Powerful", "Web"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typewriter effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText.length]);

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // gradient colors for each letter
  const getColorForLetter = (index: number) => {
    const hue = (index * 30) % 180 + 160; 
    return `hsl(${hue}, 80%, 60%)`;
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="typed-text">{typedText}</span>
          <span className="cursor">|</span>
        </h1>
        
        <p className="hero-tagline">
          {tagline.map((char, index) => (
            <span 
              key={index} 
              className="tagline-char"
              style={{ color: getColorForLetter(index) }}
            >
              {char}
            </span>
          ))}
          <span className="rotating-word">
            {words[currentWordIndex]}
          </span>
        </p>
        
        <button 
          className="hire-me-btn"
          onClick={handleHireMeClick}
        >
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;