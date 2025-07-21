import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="card-front"  style={{ backgroundColor: project.color }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-icons">
            {project.tech.map((t) => (
              <img key={t} src={`/src/assets/project-cards-icons/${t}-icon.svg`} alt={t} />
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button>Ver Proyecto</button>
          </a>
        </div>

        <div className="card-back">
          <p>Más detalles o imagen aquí</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;