import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Services from './components/Services';
import References from './components/References';
import ContactMe from './components/ContactMe';
import './App.css';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/references" element={<References />} />
                <Route path="/contact" element={<ContactMe />} />
            </Routes>

            <footer className="fixed-footer">
    <div className="footer-container">
        {/* Left Side */}
        <div className="footer-id">
            <span>K.Ramilo | COMP229</span>
        </div>

        {/* Center Side */}
        <div className="footer-nav">
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </div>

        {/* Right Side */}
        <div className="footer-socials">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://khristine-ramilo-portfolio.netlify.app/" target="_blank">Live Site</a>
        </div>
    </div>
</footer>
        </Router>




    );
};

export default App;