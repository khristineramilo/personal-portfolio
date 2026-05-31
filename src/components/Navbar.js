import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="logo-link">
                <div className="logo">
                    {/* Logo Image */}
                    <img src={logoImg} alt="Khristine Logo" className="nav-logo-img" />
                </div>
            </Link>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/references">References</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;