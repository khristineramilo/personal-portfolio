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
        </Router>
    );
};

export default App;