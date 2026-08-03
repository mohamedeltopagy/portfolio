import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'SmartCare: AI Hospital Management & Medical Image System',
      description: 'An AI-Powered comprehensive system for hospitals to manage patient records, medical imaging, doctor appointments, and staff schedules efficiently.',
      tags: ['React', 'Python', 'AI/ML', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600&h=400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Advanced Cashier & POS System',
      description: 'A comprehensive Point of Sale (POS) system. Includes inventory management, real-time analytics, barcode scanning, and secure payment processing.',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'AI Pong Game (Python)',
      description: 'An intelligent recreation of the classic Pong game featuring a self-learning AI opponent. Built with Python and Pygame for smooth rendering and physics.',
      tags: ['Python', 'Pygame', 'AI/Algorithms'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400',
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card className="project-card h-full hover:-translate-y-2 transition-transform duration-300" hover={false}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.links.github} className="icon-link"><FaGithub /></a>
                  <a href={project.links.live} className="icon-link"><ExternalLink /></a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
