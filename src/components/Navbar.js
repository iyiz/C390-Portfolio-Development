import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assume you have some CSS for your navbar
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;