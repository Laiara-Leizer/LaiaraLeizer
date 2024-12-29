import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Github, Globe, Git } from 'react-bootstrap-icons';
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
  const projects = [
    {
      title: "PSICDA",
      description: "Site feito para meu Trabalho de Conclusão de Curso, além disso, feito com o intuito de ser transformado em uma mini empresa, ou ao menos, uma pequena organização para realmente auxiliar crianças.",
      commits: 26,
      github: "https://github.com/Laiara-Leizer/PSICDA_01",
      siteUrl: "https://psicda.onrender.com/"
    },
    {
      title: "Devs_Chat",
      description: "Trabalho feito para consumir uma API fake, criada por mim. O trabalho em questão são varias salas de bate-papo, as quais Desenvolvedores podem conversar entre si para trocar ideias e interagir, como um discord, mas expecífico para Devs.",
      commits: 9,
      github: "https://github.com/Laiara-Leizer/Devs_Chat",
      siteUrl: "https://devs-chat-iota.vercel.app/"
    },
    {
      title: "Devs_Chat_API",
      description: "A API, a qual foi consumida no trabalho Devs_Chat. Esse trabalho foi expecifícadamente a api, demorou muito, mas com o mesmo, aprendi a criar APIs REST e que utilizem o banco de dados MongoDB.",
      commits: 46,
      github: "https://github.com/Laiara-Leizer/Devs_Chat_API",
      siteUrl: "https://devs-chat-api.onrender.com/"
    },
    {
      title: "RestLux",
      description: "Site fictício feito com uma API fake. O site tem como objetivo ser um site de restaurantes \"de luxo\", sendo predominantemente restaurantes de Taquara-RS.",
      commits: 14,
      github: "https://github.com/Laiara-Leizer/RestLux",
      siteUrl: "https://restlux.vercel.app/"
    },
    {
      title: "Java",
      description: "Minha pasta com todos os projetinhos em java de forma organizada - EM ANDAMENTO - Já que estou organizando mais ou menos um ano de trabalhos escolares.",
      commits: 0,
      github: "https://github.com/Laiara-Leizer/Trabalhos_em_java",
      siteUrl: "/"
    }
  ];

  return (
    <Container className="projects">
      <h2 className="text-center mb-4">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;

