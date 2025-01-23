import React, { useState } from 'react';
import './Portfolio.css';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import gpaCalcVideo from '../videos/gpa-calculator.mp4';
import booksAppVideo from '../videos/books-app.mp4';
import foodieGoVideo from '../videos/foodieGo.mp4';
import flowerShopVideo from '../videos/flowerShop.mp4'; 
import project5Screenshot from '../images/project5.jpeg';
import project6Screenshot from '../images/project6.jpeg';
import getAboatVideo from '../videos/getAboat.mp4';
import favouriteMoviesVideo from '../videos/favouriteMovies.mp4';
import ziYisPizzaScreenshot from '../images/ziYisPizza.png';
import playlistManagerScreenshot from '../images/playlistManager.png';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(''); // No initial active tab
    const [showProjects, setShowProjects] = useState(false); // Control visibility of projects

    const designProjects = [
        { title: "Project 1: Flower Shop App", video: flowerShopVideo, objective: "Designed and developed a mobile e-commerce application for a flower shop." },
        { title: "Project 2: FoodieGo App", video: foodieGoVideo, objective: "Developed a mobile application for restaurant bookings and exploration." }
    ];

    const codingProjects = [
        { title: "Project 3: GPA Calculator", video: gpaCalcVideo, objective: "A GPA calculator app built with React Native." },
        { title: "Project 4: The Greatest Books", video: booksAppVideo, objective: "A mobile application displaying a list of notable books." },
        { title: "Project 5: VR Escape Room", img: project5Screenshot, objective: "Designed and developed a puzzle-based interactive VR escape room experience." },
        { title: "Project 6: Movie App Starter", img: project6Screenshot, objective: "Created a functional movie search and display application using React." },
        { title: "Project 7: Get-A-Boat App", video: getAboatVideo, objective: "Developed a mobile application for browsing and searching boats for sale." },
        { title: "Project 8: Favorite Movies App", video: favouriteMoviesVideo, objective: "Created a mobile application to display a list of favorite movies." },
        { title: "Project 9: Zi Yi's Pizza Menu", img: ziYisPizzaScreenshot, objective: "Developed a simple, responsive menu for Zi Yi's Pizza." },
        { title: "Project 10: Playlist Manager", img: playlistManagerScreenshot, objective: "Developed a Playlist Manager to organize and manage songs." }
    ];

    const handleButtonClick = (category) => {
        if (activeTab === category) {
            setShowProjects(!showProjects); // Toggle visibility
        } else {
            setActiveTab(category);
            setShowProjects(true); // Show projects for the selected category
        }
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <Container>
                <h2 className="section-title">Project Showcase</h2>

                {/* Large Buttons for Categories */}
                <div className="button-group mb-4">
                    <Button 
                        variant="primary" 
                        className="category-button primary" 
                        onClick={() => handleButtonClick('design')}
                    >
                        Design Projects
                    </Button>
                    <Button 
                        variant="secondary" 
                        className="category-button secondary" 
                        onClick={() => handleButtonClick('coding')}
                    >
                        Coding Projects
                    </Button>
                </div>

                {/* Render Projects Based on Active Tab */}
                {showProjects && (
                    <Row>
                        {(activeTab === 'design' ? designProjects : codingProjects).map((project, index) => (
                            <Col md={6} key={index} className="mb-4">
                                <Card className="project-card">
                                    {project.video ? (
                                        <video className="project-video" controls>
                                            <source src={project.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <Card.Img variant="top" src={project.img} />
                                    )}
                                    <Card.Body>
                                        <Card.Title className="project-title">{project.title}</Card.Title>
                                        <Accordion>
                                            <Accordion.Item eventKey={index.toString()}>
                                                <Accordion.Header>View Details</Accordion.Header>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </section>
    );
};

export default Portfolio;