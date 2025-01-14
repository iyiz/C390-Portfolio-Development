import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      thumbnail: 'https://via.placeholder.com/150',
      link: '#',
      description: 'A brief description of the project.',
    },
    {
      title: 'Project 2',
      thumbnail: 'https://via.placeholder.com/150',
      link: '#',
      description: 'A brief description of the project.',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.thumbnail} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;