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
            <div className="app-wrapper"> {/* Wrap everything in a main div */}
                <Navbar />
                
                <main className="content-area"> {/* Wrap routes in a main tag */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/contact" element={<ContactMe />} />
                    </Routes>
                </main>

                <footer className="fixed-footer">
                    <div className="footer-container">
                        <div className="footer-id">
                            <span>K.Ramilo | COMP229</span>
                        </div>

                        <div className="footer-nav">
                            <h4>Explore</h4>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                        </div>

                        <div className="footer-socials">
                            <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://khristine-ramilo-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;