import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <p>
                Hello! My name is <span className="name-highlight">Song Zi Yi</span>.
            </p>
            <p>
                I'm currently a second-year student at Republic Polytechnic pursuing a diploma in Digital Design and Development.
            </p>
            <p>
                My inspiration comes from the ever-evolving world of technology and the endless possibilities it offers to create and innovate. 
                I aim to develop user-friendly, visually appealing websites that not only meet the needs of my clients but also provide an enjoyable experience for their users.
            </p>
            <a href="/contact" className="cta-button">Get in Touch</a>

            <h3>Technical Skills:</h3>
            <div className="skills-inline">
                <span className="skill-item"><FontAwesomeIcon icon={faHtml5} /> HTML</span>
                <span className="skill-item"><FontAwesomeIcon icon={faCss3Alt} /> CSS</span>
                <span className="skill-item"><FontAwesomeIcon icon={faJs} /> JavaScript</span>
                <span className="skill-item"><FontAwesomeIcon icon={faReact} /> React</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">Responsive Design Principles</span>
                <span className="skill-item">Troubleshooting & Debugging</span>
                <span className="skill-item">Figma (Design & Prototyping)</span>
                <span className="skill-item">C#</span>
            </div>

            <h3>Soft Skills:</h3>
            <ul className="soft-skills-list">
                <li className="soft-skill-item">Adaptability and Willingness to Learn</li>
                <li className="soft-skill-item">Effective Communication</li>
                <li className="soft-skill-item">Organizational Skills</li>
                <li className="soft-skill-item">Enthusiasm for New Challenges</li>
            </ul>
        </section>
    );
};

export default About;