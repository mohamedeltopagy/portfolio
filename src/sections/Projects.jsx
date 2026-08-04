import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Cashier & POS System',
      description: 'A comprehensive Point of Sale (POS) system. Includes inventory management, real-time analytics, barcode scanning, and secure payment processing.',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
    },
    {
      title: 'AI Pong Game (Python)',
      description: 'An intelligent recreation of the classic Pong game featuring a self-learning AI opponent. Built with Python and Pygame for smooth rendering and physics.',
      tags: ['Python', 'Pygame', 'AI/Algorithms'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
    },
    {
      title: 'EagleEye: Network Traffic Analyzer',
      description: 'A cybersecurity tool that captures and analyzes network packets in real-time to detect suspicious activities, DDoS attempts, and potential vulnerabilities.',
      tags: ['Python', 'Wireshark API', 'CyberSecurity', 'Bash'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
    },
    {
      title: 'CipherChat: End-to-End Encrypted Messenger',
      description: 'A highly secure real-time chat application utilizing military-grade AES-256 encryption. Ensuring complete privacy with zero-knowledge architecture.',
      tags: ['React', 'Node.js', 'Cryptography', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
    },
    {
      title: 'Vulnerability Scanner Framework',
      description: 'An automated penetration testing framework that scans web applications for OWASP Top 10 vulnerabilities (SQLi, XSS) and generates detailed security reports.',
      tags: ['Python', 'Selenium', 'Security', 'Docker'],
      image: 'https://images.unsplash.com/photo-1614064641913-a53b9560f64c?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
    },
    {
      title: 'Decentralized Identity Vault',
      description: 'A blockchain-based identity management system preventing identity theft. Uses Smart Contracts to securely store and verify digital credentials.',
      tags: ['Solidity', 'Next.js', 'Web3', 'CyberSecurity'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400',
      links: { github: '#', live: '#' }
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
