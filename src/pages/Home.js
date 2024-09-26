import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission: To deliver exceptional solutions through web development and design.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
};

export default Home;
