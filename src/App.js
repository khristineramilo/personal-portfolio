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

<footer className="fixed-footer" style={{ 
    backgroundColor: '#111', 
    color: 'white', 
    padding: '10px 0', 
    width: '100%', 
    position: 'fixed', 
    bottom: 0, 
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center'
}}>
    <div className="footer-container" style={{ display: 'flex', gap: '20px', fontSize: '12px' }}>
        {/* Left Side */}
        <div className="footer-id">
            <span>K.Ramilo | COMP229</span>
        </div>

        {/* Center Side */}
<div className="footer-nav" style={{ display: 'flex', gap: '10px' }}>
    <span style={{color: '#646cff', fontWeight: 'bold'}}>EXPLORE:</span>
    <Link to="/" style={{color: '#ccc', textDecoration: 'none'}}>Home</Link>
    <Link to="/about" style={{color: '#ccc', textDecoration: 'none'}}>About</Link>
    <Link to="/projects" style={{color: '#ccc', textDecoration: 'none'}}>Projects</Link>
    <Link to="/contact" style={{color: '#ccc', textDecoration: 'none'}}>Contact</Link>
</div>
        {/* Right Side */}
        <div className="footer-socials" style={{ display: 'flex', gap: '10px' }}>
            <a href="https://github.com..." target="_blank" rel="noopener noreferrer" style={{color: '#ccc'}}>GitHub</a>
            <a href="https://netlify.app" target="_blank" rel="noopener noreferrer" style={{color: '#ccc'}}>Live Site</a>
        </div>
    </div>
</footer>
            </div>
        </Router>
    );
};

export default App;