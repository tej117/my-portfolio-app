// src/components/ProjectSection/ProjectSection.tsx

import React, { useState } from "react";
import { projects } from "../../data/ProjectsData";
import ProjectView from "./ProjectView";
import ProjectBar from "./ProjectBar";
import styles from "../../styles/ProjectPage/ProjectSection.module.css";

const ProjectSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const handleSelect = (id: string) => {
    setActiveProject(id);
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <ProjectBar active={activeProject} onSelect={handleSelect} />

        <div className={styles.mainContent}>
          <h1 className={styles.heading}>03. Projects</h1>
          <div className={styles.slideshow}>
            {currentProject && (
              <ProjectView
                title={currentProject.title}
                description={currentProject.description}
                image={currentProject.image}
                alt={currentProject.title}
                github={currentProject.github}
                skills={currentProject.skills}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
