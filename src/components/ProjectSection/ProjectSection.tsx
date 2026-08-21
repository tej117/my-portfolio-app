// src/components/ProjectSection/ProjectSection.tsx

import React, { useState } from "react";
import { projects } from "../../data/ProjectsData";
import ProjectView from "./ProjectView";
import styles from "../../styles/ProjectPage/ProjectSection.module.css";

const ProjectSection: React.FC = () => {
    const [activeProject, setActiveProject] = useState(projects[0].id);
    const currentProject = projects.find((p) => p.id === activeProject);

    return (
        <div className={styles.container}>

            {/* Header */}
            <div className={styles.headerBlock}>
                <p className={styles.fileLabel}>/* projects.md */</p>
                <div className={styles.heading}>
                    <h1><span className={styles.headingNumber}>04.</span> &lt;Projects/&gt;</h1>
                </div>
            </div>

            {/* Tab bar */}
            <div className={styles.tabBar}>
                {projects.map((project) => (
                    <button
                        key={project.id}
                        className={`${styles.tab} ${activeProject === project.id ? styles.activeTab : ''}`}
                        onClick={() => setActiveProject(project.id)}
                    >
                        {project.label}
                    </button>
                ))}
            </div>

            {/* Project card */}
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
    );
};

export default ProjectSection;