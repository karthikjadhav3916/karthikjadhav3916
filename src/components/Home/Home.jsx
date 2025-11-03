import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="home-content"
      >
        <h1>Karthik Jadhav</h1>
        <div className="title-animation">
          <h2>4th Year CSE Student</h2>
        </div>
        <p className="tagline">Passionate about creating innovative solutions through code</p>
        
        <div className="social-links">
          <a href="https://github.com/karthikjadhav3916" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/karthikjadhav135/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
