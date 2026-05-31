import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home-hero">
            {/* Animated Background Shapes */}
            <div className="bg-circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
            </div>

            <div className="hero-content">
                <p className="pre-title">Welcome to my world</p>
                <h1>Hi, I'm <span className="highlight animate-char">Khristine</span></h1>
                <h2 className="typing-text">I build digital experiences.</h2>
                <p className="hero-description">
                    A passionate developer specializing in creative, functional, and 
                    high-performance web applications.
                </p>
                <div className="hero-btns">
                    <Link to="/projects" className="btn-primary glow-button">View My Work</Link>
                    <Link to="/contact" className="btn-secondary">Let's Talk</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;