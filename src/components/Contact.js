import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [socialMedia, setSocialMedia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally you would send the form data to your server here
        console.log({ email, socialMedia });

        // Reset the form after submission
        setEmail('');
        setSocialMedia('');
    };

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, feel free to fill out the form below!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="socialMedia">Social Media Links:</label>
                    <input 
                        type="text" 
                        id="socialMedia" 
                        value={socialMedia} 
                        onChange={(e) => setSocialMedia(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="cta-button">Submit</button>
                <p></p>
            </form>
            <div className="contact-info">
                <p>Email: <a href="mailto:23031421@myrp.edu.sg">23031421@myrp.edu.sg</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/song-zi-yi-83082029b/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></p>
            </div>
        </section>
    );
};

export default Contact;