import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const projects = [
  {
    title: "Personal Expense Tracker",
    description: "A comprehensive expense tracking application that helps users manage their finances, track spending patterns, and set budgets effectively.",
    technologies: ["Python", "Flask", "SQLite", "Bootstrap"],
    github: "https://github.com/karthikjadhav3916/Personal-Expense-Tracker",
    live: "https://github.com/karthikjadhav3916/Personal-Expense-Tracker",
    image: "expense-tracker.jpg"
  },
  {
    title: "Flashcard Learning App",
    description: "An interactive flashcard application designed to enhance learning through spaced repetition, perfect for studying and memorization.",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    github: "https://github.com/karthikjadhav3916/flashcard",
    live: "https://github.com/karthikjadhav3916/flashcard",
    image: "flashcard.jpg"
  },
  {
    title: "Heartbeat Project",
    description: "A healthcare-focused application for monitoring and analyzing heart rates, providing vital health insights and tracking capabilities.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/karthikjadhav3916/Heartbeat-Project",
    live: "https://github.com/karthikjadhav3916/Heartbeat-Project",
    image: "heartbeat.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
