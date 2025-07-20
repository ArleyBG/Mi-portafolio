import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "./ProjectCards.css";

const ProjectCards = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <div className="cards-grid">
      {projects.slice(0, visibleCount).map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}

      {visibleCount < projects.length && (
        <button className="ver-mas" onClick={() => setVisibleCount(visibleCount + 4)}>
          Ver más proyectos
        </button>
      )}
    </div>
  );
};

export default ProjectCards;