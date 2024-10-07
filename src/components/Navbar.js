import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          EasyShare
        </Link></div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/download">download</Link></li>
        <li><Link to="/imagecrypt">ImageCrypt</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
