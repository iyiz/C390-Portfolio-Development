import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <h1>Hello, I'm <span className="highlight">SONG ZI YI</span>.</h1>
            <p className="role">Developer. Designer. Innovator.</p>
            <p className="tagline">Crafting beautiful and functional web experiences.</p>
            <p>Welcome to my portfolio! :)</p>
            <Link to="/about" className="cta-button">View More</Link>
            <p className="explore">Feel free to explore and connect!</p>
            <div className="divider"></div> {/* Divider */}
        </section>
    );
};

export default Home;