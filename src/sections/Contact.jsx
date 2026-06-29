import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's talk about your next project!</h3>
            <p className="contact-desc">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrapper glass">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>mhmdaltbjy9@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrapper glass">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p>01011789305</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrapper glass">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <Button variant="primary" style={{ width: '100%' }}>
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
      
      <footer className="footer glass">
        <p>© {new Date().getFullYear()} Mohamed Ahmed Eltobgy. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
