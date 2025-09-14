// src/components/ProjectSection/ProjectBar.tsx

import React from "react";
import { projects } from "../../data/ProjectsData";
import style from '../../styles/ProjectPage/ProjectBar.module.css'


type Props = {
  active: string;
  onSelect: (id: string) => void;
};

const ProjectBar: React.FC<Props> = ({ active, onSelect }) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarInner}>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={active === project.id ? style.active : undefined}
            >
              <button onClick={() => onSelect(project.id)}>
                {project.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBar;