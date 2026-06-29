import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-greeting text-blue-400 font-semibold mb-2">Hello, I am</p>
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4 text-white">
            Mohamed Ahmed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Eltobgy</span>
          </h1>
          <p className="hero-subtitle text-gray-400 text-lg mb-8 max-w-lg">
            Passionate Full Stack Developer. I craft scalable web applications, robust backends, and efficient database architectures. 
            Turning complex problems into elegant solutions.
          </p>
          <div className="hero-cta animate-fade-in delay-4">
            <a href="#projects">
              <Button variant="primary">
                View My Work <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="profile-wrapper glow">
            <img 
              src="/profile.webp" 
              alt="Mohamed Ahmed Eltobgy" 
              className="profile-img"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400';
              }}
            />
            <div className="experience-badge glass">
              <span className="years">Full Stack</span>
              <span className="text">Developer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
