// src/components/ProjectSection/ProjectView.tsx

import React, { useState } from "react";
import styles from "../../styles/ProjectPage/ProjectView.module.css";
import { Images } from "../../assets/assets";

interface ProjectProps {
    title: string;
    description: string;
    image?: string;
    alt?: string;
    github?: string;
    skills?: string[];
}

const ProjectView: React.FC<ProjectProps> = ({ title, description, image, alt, github, skills }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <div className={styles.card}>

                {/* Top row — title/description left, thumbnail right */}
                <div className={styles.topRow}>
                    <div className={styles.titleBlock}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                    </div>

                    {/* Thumbnail */}
                    <div
                        className={`${styles.thumbnail} ${image ? styles.thumbnailClickable : styles.thumbnailPlaceholder}`}
                        onClick={() => image && setLightboxOpen(true)}
                    >
                        {image ? (
                            <>
                                <img src={image} alt={alt || title} className={styles.thumbnailImg} />
                                <div className={styles.thumbnailOverlay}>
                                    <span className={styles.expandHint}>⤢</span>
                                </div>
                            </>
                        ) : (
                            <span className={styles.placeholderLabel}>/* no preview */</span>
                        )}
                    </div>
                </div>

                {/* Meta row — skills + github */}
                {((skills && skills.length > 0) || github) && (
                    <div className={styles.metaRow}>
                        {skills && skills.length > 0 && (
                            <div className={styles.skillsBlock}>
                                <span className={styles.skillsLabel}>Key Skills:</span>
                                <div className={styles.tags}>
                                    {skills.map((skill, i) => (
                                        <span key={i} className={styles.tag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                            >
                                <img
                                    src={Images.icons.github}
                                    alt="GitHub"
                                    className={styles.githubIcon}
                                />
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightboxOpen && image && (
                <div
                    className={styles.lightboxOverlay}
                    onClick={() => setLightboxOpen(false)}
                >
                    <img
                        src={image}
                        alt={alt || title}
                        className={styles.lightboxImage}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default ProjectView;