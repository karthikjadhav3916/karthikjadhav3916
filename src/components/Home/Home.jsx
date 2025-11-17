import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-text"
        >
          <h1>Karthik Jadhav</h1>
          <div className="title-animation">
            <h2>B.Tech CSE Student at Jain University • Full Stack Developer</h2>
          </div>
          <p className="tagline">Passionate about creating innovative solutions through code — React, Node.js, and ML enthusiast</p>
          
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

        <motion.div
          className="home-photo"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          {/* show half of the photo using CSS clipping */}
          <img src="/profile.jpg" alt="Karthik Jadhav" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
