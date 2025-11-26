import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    BIRDIE<span className="logo-accent">CLUB</span>
                </Link>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/tee-times" onClick={() => setIsOpen(false)}>Tee Times</Link></li>
                    <li><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
                    <li><Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to="/#learn-more" onClick={() => setIsOpen(false)}>Learn More</Link></li>
                    <li><Link to="/tee-times" className="btn-primary" onClick={() => setIsOpen(false)}>Book Now</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
