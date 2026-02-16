import React from 'react';
import './projects.css';
import ProjectCard from './projectcard';

const projectData = [
  {
    id: 1,
    image: '/images/portfolio-img.png',
    title: 'Portfolio',
    description: 'It contains details of which projects I have worked on and which languages I am familiar with and my interests',
    technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Reactjs'],
  },

  {
    id: 2,
    image: '/images/agritech-img.png',
    title: 'Agritech',
    description: 'A mobile application to help farmers to know about which fertilixer needed to be used for specific soil',
    technologies: ['Figma(UI/UX)'],
  },

  {
    id: 3,
    image: '/images/bookmark-img.png',
    title: 'BookMark',
    description: '  It contains a responsive and interactive landing page using JavaScript, HTML, and CSS to showcase a bookmarking application.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  }
];

const Projects = () => {
  return (
    <div className="projects-page-container">
      <section className="projects-section" id='projects'>
        <div className="projects-title">
          <h2>Featured&nbsp;</h2>
          <span> Projects</span>
        </div>
        <div className="projects-grid">
          {projectData.map(project => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;