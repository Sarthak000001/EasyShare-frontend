import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About EasyShare</h1>
      <p>
        Welcome to EasyShare, your go-to platform for simple and secure file sharing. Our mission is to provide a seamless
        experience for users who need to share files quickly and safely. With EasyShare, you can upload your files and 
        instantly generate a link to share with others, ensuring that your data is always protected and accessible.
      </p>
      <h2>Our Features</h2>
      <ul>
        <li>Fast and reliable file uploads</li>
        <li>Secure links for sharing files</li>
        <li>User-friendly interface</li>
        <li>24/7 customer support</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        At EasyShare, we believe in the power of simplicity and efficiency. Our goal is to make file sharing as easy as 
        possible while maintaining the highest standards of security. We are constantly innovating and improving our 
        platform to meet the evolving needs of our users.
      </p>
    </div>
  );
}

export default About;
