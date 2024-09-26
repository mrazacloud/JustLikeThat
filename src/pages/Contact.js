// Author: Muhammad Raza
// Student ID: 301209703
// Date: September 25, 2024

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: 'Muhammad',
    lastName: 'Raza',
    email: 'mraza.cloud@gmail.com',
    message: 'HELLO',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data or display a message)
    console.log(formData);
    // Optionally, reset the form
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

