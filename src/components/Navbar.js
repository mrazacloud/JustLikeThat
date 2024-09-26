// File name: Navbar.js
// Author: Muhammad Raza
// Student ID: 301209703
// Date: September 25, 2024
// Description: This file contains the Navbar component for the portfolio website.

/**
 * Navbar Component
 * This component creates the navigation bar that links to different sections
 * of the personal portfolio site.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file for styling

// Function to create the Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/me.jpg" alt="Custom Logo" />
      <ul>
        {/* Navigation Links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Export the Navbar component so it can be used in other parts of the app
export default Navbar;


