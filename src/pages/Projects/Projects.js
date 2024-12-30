import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Github, Globe, Git } from 'react-bootstrap-icons';
import { LanguageContext } from '../../context/LanguageContext';
import './Projects.css';

const ProjectCard = ({ title, description, commits, github, siteUrl }) => {
  return (
    <Card className="project-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <Globe size={20} />
            <span>Live Site</span>
          </a>
          <div className="commits">
            <Git size={20} />
            <span>{commits} commits</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  const { translations } = useContext(LanguageContext);
  const { title, items } = translations.projects;

  return (
    <Container className="projects">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="projects-grid">
        {items.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
