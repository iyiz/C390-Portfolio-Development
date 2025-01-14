import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: your-email@example.com</p>
    </div>
  );
};

export default Contact;