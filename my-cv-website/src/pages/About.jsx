import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>
        Welcome to my personal CV website! This site showcases my knowledge, skills, experience, and education.
      </p>
      <p>
        This site is a single page application created with React and Vite. The source code for this page is available to see in my 
        personal&nbsp;
        <a href="https://github.com/Jone5s/cv-website" target="_blank" rel="noopener noreferrer">
            Github account
        </a>.
      </p>
    </div>
  );
};

export default About;