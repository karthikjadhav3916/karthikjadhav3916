import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Contact</h2>
        <p className="contact-sub">Let's build something great together — I'm open to internships, freelance work, and full-time roles.</p>

        <div className="contact-card">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:karthikjadhav3916@gmail.com">karthikjadhav3916@gmail.com</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/karthikjadhav3916" target="_blank" rel="noopener noreferrer">github.com/karthikjadhav3916</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/karthikjadhav135/" target="_blank" rel="noopener noreferrer">linkedin.com/in/karthikjadhav135</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
