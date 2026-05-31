import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for redirection

const ContactMe = () => {
    const navigate = useNavigate(); // Initialize the redirect hook
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Capture information (Logging to console as requested)
        console.log("Captured Contact Info:", formData);
        
        alert('Thank you! Your message has been captured. Redirecting to Home...');
        
        // Redirect back to Home Page
        navigate('/'); 
    };

    return (
        <section className="contact-section">
            <div className="contact-layout">
                
                {/* Contact Information Panel */}
                <div className="contact-info-panel">
                    <h3>Contact <span className="highlight">Info</span></h3>
                    <p>Feel free to reach out to me directly through any of the following:</p>
                    <div className="info-item">
                        <strong>Email:</strong> khristinejramilo.30@gmail.com
                    </div>
                    <div className="info-item">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </div>
                    <div className="info-item">
                        <strong>Location:</strong> Toronto, ON, Canada
                    </div>
                </div>

                {/* Interactive Form */}
                <div className="contact-form-container">
                    <h2>Send a <span className="highlight">Message</span></h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} required />
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactMe;