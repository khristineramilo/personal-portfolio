import React from 'react';
import myImage from '../assets/myImage.jpg';

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-card">
                <div className="about-content-grid">
                    
                    <div className="about-image-side">
                        <div className="image-frame">
                            <img src={myImage} alt="Khristine" className="my-profile-img" />
                        </div>
                    </div>

                    <div className="about-text-side">
                        <h2 className="section-title">About <span className="highlight">Me</span></h2>
                        <p className="bio-lead">
                            Transforming ideas into <span className="text-white">digital reality.</span>
                        </p>
                        <p className="bio-text">
                            Hi, I'm <strong>Khristine</strong>! I'm learning to build modern applications 
                            through clean code and thoughtful design. When I'm not coding, 
                            you'll find me outdoors, reading, or playing with my dogs.
                        </p>

                        <div className="skills-tags">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">UI/UX</span>
                            <span className="skill-tag">Node.js</span>
                        </div>

                        <div className="about-cta">
                            <a href="/resume.pdf" target="_blank" className="btn-primary glow-button">
                                View Full Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;