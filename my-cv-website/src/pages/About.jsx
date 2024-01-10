import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>
        Welcome to my personal CV website! This site showcases my knowledge, skills, experience, and education. 
        This is a work in progress and I will be improving and updating it over time.
      </p>
      <p>
        This site is a single page application created with React and Vite. The source code for this page is available to see in my 
        personal&nbsp;
        <a href="https://github.com/Jone5s/cv-website" target="_blank" rel="noopener noreferrer">
            Github account
        </a>.
        <br></br>
        <br></br>
        Things I intend to add to this site in the future:<br></br>
        - A quest book system which saves entries in a backend.<br></br>
        - A drawpad for the quest book, where visitors can draw whatever if they want to.
      </p>
    </div>
  );
};

export default About;