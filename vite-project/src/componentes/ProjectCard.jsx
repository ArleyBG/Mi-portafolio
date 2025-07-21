import { useState } from "react";

// Carga todos los íconos SVG de la carpeta
const icons = import.meta.glob('../assets/project-cards-icons/*.svg', {
  eager: true,
  import: 'default',
});

// Función para obtener el ícono según el nombre
const getIcon = (tech) => {
  return icons[`../assets/project-cards-icons/${tech}-icon.svg`];
};

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="card-front" style={{ backgroundColor: project.color }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-icons">
            {project.tech.map((t) => {
              const iconSrc = getIcon(t);
              return iconSrc ? (
                <img key={t} src={iconSrc} alt={t} />
              ) : (
                <span key={t}> ¡No exist! </span>
              );
            })}
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