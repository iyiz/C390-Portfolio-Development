import React, { useState } from 'react';
import './Portfolio.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import figmaIcon from '../images/figma-icon.png';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('');
    const [showProjects, setShowProjects] = useState(false);

    const designProjects = [
        {
            title: "Project 1: Flower Shop App",
            video: flowerShopVideo,
            objective: "This mobile e-commerce application showcases floral arrangements. I learned about user interface design in Figma and developed a user-friendly experience. I utilized color theory and typography to create an appealing interface, focusing on creating a seamless user journey from browsing to checkout.",
            link: "https://www.figma.com/design/s7bwnR0UmEceDlByAN6Lma/Shopping-App?node-id=57-27&p=f&t=VkgugoaHV0Z9t7Vh-0",
            skills: [<img src={figmaIcon} alt="Figma" style={{ width: '20px', marginRight: '5px' }} />, "Figma"]
        },
        {
            title: "Project 2: FoodieGo App",
            video: foodieGoVideo,
            objective: "A mobile application for restaurant bookings and exploration. I enhanced my skills in UI/UX design and learned how to implement responsive layouts. The project involved researching user needs and integrating user feedback to improve functionality and aesthetics, ensuring a smooth booking experience.",
            link: "https://www.figma.com/design/ZHQPkgAmFJzLD1lbH7mr7X/FoodieGo-High-fidelity-Wireframe?node-id=0-1&p=f&t=FFWvTAH4QWwGaSAS-0",
            skills: [<img src={figmaIcon} alt="Figma" style={{ width: '20px', marginRight: '5px' }} />, "Figma"]
        }
    ];

    const codingProjects = [
        {
            title: "Project 3: GPA Calculator",
            video: gpaCalcVideo,
            objective: "Built a GPA calculator app using React Native. This project taught me about state management and user input handling. I implemented various features such as real-time calculations and user-friendly input forms, using hooks for state management and improving performance.",
            skills: [<FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 4: The Greatest Books",
            video: booksAppVideo,
            objective: "Developed a mobile app displaying notable books. I focused on API integration and data rendering techniques. The app fetches data from a public API, processes it, and displays it in a user-friendly format, enhancing my skills in asynchronous programming.",
            skills: [<FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 5: VR Escape Room",
            img: project5Screenshot,
            objective: "Designed a puzzle-based VR escape room experience using Unity and C#. This project enhanced my understanding of 3D space and game mechanics. I developed interactive puzzles and created an immersive environment using Unity's physics engine and C# scripting.",
            skills: ["C#"]
        },
        {
            title: "Project 6: Movie App Starter",
            img: project6Screenshot,
            objective: "Created a functional movie search and display application using React. I learned about external API usage and state management. The app allows users to search for movies, view details, and save favorites, employing hooks for effective state management.",
            skills: [<FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 7: Get-A-Boat App",
            video: getAboatVideo,
            objective: "Developed a mobile app for browsing and searching boats for sale. This project improved my skills in filtering and searching data. I implemented a robust search functionality, allowing users to filter results based on various criteria, utilizing React's state management features.",
            skills: [<FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 8: Favorite Movies App",
            video: favouriteMoviesVideo,
            objective: "Created an app to display a list of favorite movies. I focused on user interface design and API calls. The application fetches data from a movie API and allows users to save their favorites, enhancing their browsing experience through a clean and intuitive interface.",
            skills: [<FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 9: Zi Yi's Pizza Menu",
            img: ziYisPizzaScreenshot,
            objective: "Developed a responsive menu for Zi Yi's Pizza using React. This project improved my skills in responsive web design. I ensured that the menu is mobile-friendly and visually appealing, employing CSS Grid and Flexbox for layout and responsiveness.",
            skills: [<FontAwesomeIcon icon={faHtml5} />, "HTML", <FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        },
        {
            title: "Project 10: Playlist Manager",
            img: playlistManagerScreenshot,
            objective: "Created a Playlist Manager to organize and manage songs. I learned about CRUD operations and local storage. The app allows users to create, read, update, and delete playlists, storing data locally for a seamless user experience.",
            skills: [<FontAwesomeIcon icon={faHtml5} />, "HTML", <FontAwesomeIcon icon={faJs} />, "JavaScript", <FontAwesomeIcon icon={faReact} />, "React"]
        }
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
                            <Col xs={12} md={6} lg={6} key={index} className="mb-4">
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
                                        <Card.Text>{project.objective}</Card.Text>
                                        <div className="skills-list">
                                            {project.skills.map((skill, idx) => (
                                                <span key={idx} className="skill-item">{skill}</span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <Button 
                                                variant="primary" 
                                                className="view-project-button" 
                                                href={project.link} 
                                                target="_blank" 
                                                style={{ width: '100%' }} 
                                            >
                                                View Project in Figma
                                            </Button>
                                        )}
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