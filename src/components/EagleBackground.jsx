import React from 'react';
import { motion } from 'framer-motion';
import './EagleBackground.css';

const EagleBackground = () => {

  return (
    <div className="eagle-bg-container">
      <div className="eagle-bg-overlay"></div>
      
      <div className="eagle-wrapper">
        <img 
          src="/eagle.png" 
          alt="Cyber Eagle Background" 
          className="eagle-img"
        />
      </div>
      
    </div>
  );
};

export default EagleBackground;
