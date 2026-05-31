import React from 'react';

const References = () => {
    const referenceList = [
        {
            name: "John Doe",
            title: "Professor",
            contact: "john.doe@email.com",
            description: "Khristine is a dedicated and fast learner who excels at front-end development."
        },
        {
            name: "John Smith",
            title: "Course Instructor",
            contact: "john.smith@email.com",
            description: "A great team player with a sharp eye for modern UI design."
        },
        {
            name: "Jane Johnson",
            title: "Professor",
            contact: "jane.johnson@email.com",
            description: "Khristine has a keen sense of user experience and creates beautiful, functional designs."
        },
        {
            name: "Kael Jennings",
            title: "Course Instructor",
            contact: "kael.jennings@email.com",
            description: "Khristine is a talented developer with a strong foundation in web technologies."
        }
    ];

    return (
        <section className="references-section">
            <div className="container">
                <div className="section-header">
                    <h2><span className="highlight">References</span></h2>
                    <p>Endorsements from my academic mentors and colleagues.</p>
                </div>
                
                <div className="references-grid">
                    {referenceList.map((ref, index) => (
                        <div key={index} className="reference-card">
                            <div className="card-top">
                                <div className="quote-mark">“</div>
                                <div className="ref-avatar">{ref.name.charAt(0)}</div>
                            </div>
                            <p className="ref-desc">{ref.description}</p>
                            <div className="ref-info">
                                <h3>{ref.name}</h3>
                                <span className="ref-title">{ref.title}</span>
                                <a href={`mailto:${ref.contact}`} className="ref-contact">{ref.contact}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;