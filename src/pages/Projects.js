import React from 'react';
import logo from '../assets/images/logo.png'; // Add your images to the assets folder

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="Assignment">
        <img src={logo} alt="logo" />
        <h3>Project 1</h3>
        <p>Description of project 1 and your role in it.</p>
      </div>
      {/* Add more projects */}
    </div>
  );
};

export default Projects;
