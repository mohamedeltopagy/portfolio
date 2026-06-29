import React from 'react';
import { Code2, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import './About.css';

const About = () => {
  const services = [
    {
      icon: <Code2 size={40} className="service-icon text-primary" />,
      title: 'Frontend Development',
      desc: 'Building responsive, interactive, and beautiful user interfaces using React and modern CSS.'
    },
    {
      icon: <Server size={40} className="service-icon text-secondary" />,
      title: 'Backend Development',
      desc: 'Creating robust, scalable RESTful APIs and server-side logic using Node.js and Python.'
    },
    {
      icon: <Database size={40} className="service-icon text-accent" />,
      title: 'Database Architecture',
      desc: 'Designing efficient database schemas and complex queries using SQL and NoSQL databases.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              My journey in software development is driven by a deep curiosity for how things work under the hood and a desire to build products that make a difference.
            </p>
            <p>
              Whether it's crafting a pixel-perfect UI, optimizing a slow database query, or designing a system architecture from scratch, I approach every challenge with enthusiasm and a problem-solving mindset.
            </p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
