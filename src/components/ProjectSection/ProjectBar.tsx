// src/components/ProjectSection/ProjectBar.tsx

import React from "react";
import { projects } from "../../data/ProjectsData";
import style from '../../styles/ProjectPage/ProjectBar.module.css';

// Import icons (you can use your pngs from assets)
import { Images } from "../../assets/assets";

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
                <span>{project.label}</span>
                {active === project.id && (
                  <img src={Images.misc.leftBack} alt="<" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBar;