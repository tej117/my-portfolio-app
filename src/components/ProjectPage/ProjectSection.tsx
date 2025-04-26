import React from "react";
import style from '../../styles/ProjectPage/ProjectSection.module.css'

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt?: string; // Optional alt text for accessibility (for image)
}

const ProjectSection: React.FC<ProjectProps> = ({ title, description, image, alt }) => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <img src={image} alt={alt || title} className={style.image} />
        <div className={style.textContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;