import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import flowerShopVideo from '../videos/flowerShop.mp4';
import gpaCalcVideo from '../videos/gpa-calculator.mp4';
import favouriteMoviesVideo from '../videos/favouriteMovies.mp4';

const Home = () => {
    const featuredProjects = [
        {
            title: "Flower Shop App",
            video: flowerShopVideo,
            objective: "Designed and developed a mobile e-commerce application for a flower shop.",
            link: "/portfolio#flower-shop" // Adjust ID as needed
        },
        {
            title: "GPA Calculator",
            video: gpaCalcVideo,
            objective: "A GPA calculator app built with React Native.",
            link: "/portfolio#gpa-calculator" // Adjust ID as needed
        },
        {
            title: "Favorite Movies App",
            video: favouriteMoviesVideo,
            objective: "Created a mobile application to display a list of favorite movies.",
            link: "/portfolio#favorite-movies" // Adjust ID as needed
        }
    ];

    return (
        <section id="home" className="home-section">
            <h1>Hello, I'm <span className="highlight">SONG ZI YI</span>.</h1>
            <p className="role">Developer. Designer. Innovator.</p>
            <p className="tagline">Crafting beautiful and functional web experiences.</p>
            <p>Welcome to my portfolio! :)</p>
            <Link to="/about" className="cta-button">View More</Link>
            <p className="explore">Feel free to explore and connect!</p>

            <h2>Featured Projects</h2>
            <Row className="justify-content-center"> {/* Center the row */}
                {featuredProjects.map((project, index) => (
                    <Col xs={12} md={6} lg={4} key={index} className="mb-4"> {/* Three cards per row */}
                        <Card className="project-card" style={{ height: '100%' }}>
                            <video className="project-video" controls>
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Card.Body>
                                <Card.Title className="project-title">{project.title}</Card.Title>
                                <Card.Text>{project.objective}</Card.Text>
                                <Link to={project.link}>
                                    <Button variant="primary" className="view-project-button">View Project</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="divider"></div> {/* Divider */}
        </section>
    );
};

export default Home;