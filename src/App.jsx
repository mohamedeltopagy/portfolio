import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import EagleBackground from './components/EagleBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
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
