import { useRef, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Services from './Components/Services/services';
import Contact from './Components/Contact/contact';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // This ensures the video plays correctly on mobile devices
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="app-container">
      {/* Video Background */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
        >
          // Replace this:
<source src="/assets/background.mp4" type="video/mp4" />


        <source src={`${process.env.PUBLIC_URL}/assets/hero_bg.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Page Content */}
      <div className="content-wrapper">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;