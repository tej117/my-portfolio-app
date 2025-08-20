// src/components/ProjectPage/ProjectView.tsx

import React, { useState } from "react";
import { projects } from "../../data/ProjectsData";
import ProjectSection from "./ProjectSection";
import ProjectBar from "./ProjectBar";
import style from "../../styles/ProjectPage/ProjectView.module.css";

const ProjectView: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const handleSelect = (id: string) => {
    setActiveProject(id);
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <div className={style.container}>
      <ProjectBar active={activeProject} onSelect={handleSelect} />

      <div className={style.slideshow}>
        {currentProject && (
          <ProjectSection
            title={currentProject.title}
            description={currentProject.description}
            image={currentProject.image}
            alt={currentProject.title}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectView;
