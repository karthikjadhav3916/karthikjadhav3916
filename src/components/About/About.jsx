import React from 'react';
import './About.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'Python',
  'Flask',
  'SQL / SQLite',
  'HTML5',
  'CSS3',
  'Git & GitHub',
  'Machine Learning'
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-photo" aria-hidden>
          {/* Put your photo at `public/profile.jpg` so it appears here. */}
          <img src={import.meta.env.BASE_URL + 'profile.jpg'} alt="Karthik Jadhav" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p className="bio">
            I'm <strong>Karthik Jadhav</strong>, a B.Tech Computer Science & Engineering student at Jain University and a Full Stack Developer. I build clean, user-friendly web applications and data-driven tools. I enjoy turning ideas into polished, production-ready products.
          </p>

          <p className="bio-alt">
            I work across the stack — from crafting interactive front-ends with React to building scalable backends with Node.js and Python. I'm also exploring machine learning and modern deployment patterns to deliver end-to-end solutions.
          </p>

          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-list">
              {skills.map((s) => (
                <span key={s} className="skill">{s}</span>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn outline" href="mailto:karthikjadhav3916@gmail.com">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
