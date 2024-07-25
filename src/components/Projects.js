import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        <ProjectCard
          title="Proyecto 1"
          description="Descripción breve del proyecto 1"
          link="https://link-al-proyecto1.com"
        />
        <ProjectCard
          title="Proyecto 2"
          description="Descripción breve del proyecto 2"
          link="https://link-al-proyecto2.com"
        />
        <ProjectCard
          title="Proyecto 3"
          description="Descripción breve del proyecto 3"
          link="https://link-al-proyecto3.com"
        />
        {/* Añade más proyectos según sea necesario */}
      </div>
    </section>
  );
}

export default Projects;
