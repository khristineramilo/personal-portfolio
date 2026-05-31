import React, { useState } from 'react';

// Import all assets
import proj1 from '../assets/proj1.png';
import proj1_a from '../assets/proj1_a.png';
import proj1_b from '../assets/proj1_b.png';
import proj1_c from '../assets/proj1_c.png';
import proj1_d from '../assets/proj1_d.png';

import proj2 from '../assets/proj2.png';
import proj2_a from '../assets/proj2_a.png';

import proj3 from '../assets/proj3.png';
import proj3_a from '../assets/proj3_a.png';
import proj3_b from '../assets/proj3_b.png';

import proj4 from '../assets/proj4.png';
import proj4_a from '../assets/proj4_a.png';
import proj4_b from '../assets/proj4_b.png';
import proj4_c from '../assets/proj4_c.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);

    const projectList = [
        {
            id: 1,
            title: "Real Estate E-commerce Platform",
            mainImage: proj1, 
            gallery: [proj1, proj1_a, proj1_b, proj1_c, proj1_d],
            description: "Developed as my final term project, this web application is a fully functional e-commerce platform for real estate listings.",
            fullDetails: "This project features a fully functional e-commerce platform for real estate listings, complete with user authentication, a shopping cart, and payment processing using the Stripe API.",
            role: "Student Developer",
            outcome: "Gained hands-on experience with authentication, payment integration, and responsive design while building a real-world style application.",
            date: "May 2025",
            tech: ["React", "Node.js", "Stripe API"]
        },
        {
            id: 2,
            title: "Bug Game Dashboard",
            mainImage: proj2,
            gallery: [proj2, proj2_a],
            description: "Created for a course assignment, this interactive game challenges users to catch bugs, featuring a leaderboard and timer.",
            fullDetails: "A fun and engaging game designed to test your reflexes and strategic thinking.",
            role: "Game Designer & Developer",
            outcome: "Created a high-performance game loop that maintains 60fps on mobile devices.",
            date: "August 2025",
            tech: ["JavaScript", "Chart.js", "Firebase"]
        },
        {
            id: 3,
            title: "Sports Car Website",
            mainImage: proj3, 
            gallery: [proj3, proj3_a, proj3_b],
            description: "Built as a class project, this website showcases the exterior and interior of sports cars and includes a dealership locator.",
            fullDetails: "A sleek and modern website showcasing the latest sports cars, complete with interactive features and a dealership locator.",
            role: "Student Frontend Developer",
            outcome: "Enhanced my abilities in modern web design and interactive feature development.",
            date: "February 2025",
            tech: ["React", "Leaflet.js", "Tailwind"]
        },
        {
            id: 4,
            title: "Evaluation Form App",
            mainImage: proj4, 
            gallery: [proj4, proj4_a, proj4_b, proj4_c],
            description: "Developed for a course assignment, this app allows users to create and manage custom evaluation forms for various purposes.",
            fullDetails: "This project provides a user-friendly interface for creating and customizing evaluation forms, as well as features for managing and analyzing the collected data.",
            role: "Student App Developer",
            outcome: "Learned to design user-friendly interfaces and manage data collection and analysis within a web application.",
            date: "January 2025",
            tech: ["React", "Firebase", "SASS"]
        }
    ];

    if (selectedProject) {
        return (
            <section className="project-details-view">
                {/* Image Pop-up (Lightbox) */}
                {clickedImg && (
                    <div className="lightbox-overlay" onClick={() => setClickedImg(null)}>
                        <div className="lightbox-content">
                            <img src={clickedImg} alt="Enlarged" className="enlarged-img" />
                            <span className="close-lightbox">&times;</span>
                        </div>
                    </div>
                )}

                <div className="details-container">
                    <button className="back-btn" onClick={() => setSelectedProject(null)}>
                        ← Back to Projects
                    </button>
                    
                    <h2 className="detail-title">{selectedProject.title}</h2>
                    
                    <div className="project-meta-card">
                        <div className="meta-item">
                            <strong>Role</strong>
                            <span>{selectedProject.role}</span>
                        </div>
                        <div className="meta-item">
                            <strong>Date</strong>
                            <span>{selectedProject.date}</span>
                        </div>
                        <div className="meta-item">
                            <strong>Outcome</strong>
                            <span>{selectedProject.outcome}</span>
                        </div>
                    </div>

                    <div className="detail-description">
                        <h3>Project Overview</h3>
                        <p>{selectedProject.fullDetails}</p>
                        <div className="detail-tech-stack">
                            {selectedProject.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
                        </div>
                    </div>

                    <div className="image-gallery">
                        {selectedProject.gallery.map((img, index) => (
                            <div key={index} className="gallery-item" onClick={() => setClickedImg(img)}>
                                <img src={img} alt="Detail" className="gallery-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">My <span className="highlight">Projects</span></h2>
                <div className="projects-grid">
                    {projectList.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="card-image-wrapper">
                                <img src={project.mainImage} alt={project.title} className="project-img-main" />
                                <div className="card-overlay">
                                    <button className="btn-view" onClick={() => setSelectedProject(project)}>
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;