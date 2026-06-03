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

            <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} K.Ramilo | COMP229 Student Portfolio</p>
                    <div className="footer-links">
                        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://netlify.com" target="_blank" rel="noreferrer">Live Site</a>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </footer>
        </Router>




    );
};

export default App;