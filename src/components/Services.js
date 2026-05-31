import React from 'react';
import webDevImg from '../assets/service_web.avif';
import designImg from '../assets/service_design.jpg';
import mobileImg from '../assets/service_mobile.webp';
import progImg from '../assets/service_programming.jpg';

const Services = () => {
    const servicesList = [
        {
            title: "Web Development",
            description: "Building modern, responsive, and high-performance websites using React and modern CSS frameworks.",
            image: webDevImg
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces and engaging user experiences with a focus on usability and aesthetics.",
            image: designImg
        },
        {
            title: "Mobile Apps",
            description: "Developing cross-platform mobile applications that provide a seamless experience on both iOS and Android.",
            image: mobileImg
        },
        {
            title: "General Programming",
            description: "Providing custom software solutions, automation scripts, and backend logic to solve complex problems.",
            image: progImg
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-header">
                    <h2>My <span className="highlight">Services</span></h2>
                    <p>Professional digital solutions tailored to your specific goals and requirements.</p>
                </div>
                
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-img-wrapper">
                                <img src={service.image} alt={service.title} className="service-card-img" />
                            </div>
                            <div className="service-card-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;