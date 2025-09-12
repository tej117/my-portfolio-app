import React from "react";
import style from '../../styles/ProjectPage/ProjectView.module.css'

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt?: string; // Optional alt text for accessibility (for image)
  github?: string;
  skills?: string[];
}

const ProjectView: React.FC<ProjectProps> = ({ title, description, image, alt, github, skills }) => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <img src={image} alt={alt || title} className={style.image} />
        
        <div className={style.textContent}>
          <h2>{title}</h2>
          <p>{description}</p>

          {(skills && skills.length > 0) || github ? (
            <div className={style.metaRow}>
              {skills && skills.length > 0 && (
                <div className={style.skills}>
                  <h3>Key Skills:</h3>
                  <ul>
                    {skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}

              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={style.githubLink}
                >
                  View on GitHub
                </a>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};


export default ProjectView;