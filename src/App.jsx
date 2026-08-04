import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import EagleBackground from './components/EagleBackground';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const updateTouchPosition = (e) => {
      if (e.touches && e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);

  return (
    <div className="app-container">
      <motion.div 
        className="custom-cursor glow"
        animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      
      <EagleBackground />
      <Navbar />
      <main className="main-content z-10 relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
