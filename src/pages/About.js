import React from 'react';
import myImage from '../assets/myImage.jpg';
import resume from '../assets/resume.pdf';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <img src={myImage} alt="Myself" />
      <p>Hi, I'm [Your Name]. I'm a web developer and ...</p>
      <a href={resume} download>Download My Resume</a>
    </div>
  );
};

export default About;
