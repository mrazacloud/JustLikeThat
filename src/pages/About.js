// Author: Muhammad Raza
// Student ID: 301209703
// Date: September 25, 2024

import React from 'react';
import myImage from '../assets/me.jpg'; // Place your image in src/assets/

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={myImage} alt="me" />
      <p>Hi, I am [Muhammad Raza], a passionate developer...</p>
      <a href="/assets/MRAZA Resume word.pdf" target="_blank">View My Resume</a> {/* Link to your PDF */}
    </div>
  );
};

export default About;
