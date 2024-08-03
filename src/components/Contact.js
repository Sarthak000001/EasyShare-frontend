import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Hi 👋, I'm <strong>Sarthak Nirgude</strong>
      </p>
      <p>
        A Web Developer & Passionate Software Developer
      </p>
      <p>
        You can find my projects and more on my <a href="https://github.com/Sarthak000001" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <h2>Impressive Things About Me</h2>
      <ul>
        <li>Passionate about creating innovative solutions to solve real-world problems.</li>
        <li>Experience in building user-friendly and efficient web applications.</li>
        <li>Constantly learning and exploring new technologies in the field of software development.</li>
        <li>Able to work both independently and collaboratively in team environments.</li>
      </ul>
      <h2>Let's Connect</h2>
      <p>
        Feel free to reach out to me via email at <a href="mailto:sarthaknirgude7@gmail.com">sarthaknirgude7@gmail.com</a> for any inquiries or collaboration opportunities.
      </p>
    </div>
  );
}

export default Contact;
