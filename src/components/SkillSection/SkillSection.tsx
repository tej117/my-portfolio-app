// src/components/SkillsSection/SkillsSection.tsx

import React from 'react';
import styles from '../../styles/SkillPage/SkillSection.module.css';

interface SkillCategory {
    title: string;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "AI & Computer Vision",
        skills: [
            "Computer Vision",
            "OpenCV",
            "OCR",
            "PaddleOCR",
            "Image Processing",
            "TensorFlow",
            "Scikit-learn",
            "RAG",
            "LLM Orchestration",
        ],
    },
    {
        title: "Robotics & Embedded",
        skills: [
            "ROS",
            "ROS2",
            "NVIDIA Jetson",
            "ZED Depth Camera",
            "3D Data",
            "Embedded Systems",
            "Camera Systems",
            "Extrinsic Calibration",
            "ChArUco",
        ],
    },
    {
        title: "Web & Backend",
        skills: [
            "React",
            "FastAPI",
            "REST APIs",
            "Async Python",
            "SQLAlchemy",
            "Alembic",
            "SQLite",
            "PostgreSQL",
        ],
    },
    {
        title: "Systems & Infrastructure",
        skills: [
            "Docker",
            "Linux",
            "systemd",
            "udev",
            "NVIDIA Container Runtime",
            "PowerShell",
            "Cloudflare Tunnel",
            "rclone",
        ],
    },
    {
        title: "Dev & Engineering",
        skills: [
            "Git",
            "GitHub Actions",
            "CI/CD",
            "pytest",
            "Software Architecture",
            "Technical Leadership",
            "Project Coordination",
            "Technical Writing",
        ],
    },
];

const SkillsSection: React.FC = () => {
    return (
        <div className={styles.container}>

            <div className={styles.headerBlock}>
                <p className={styles.fileLabel}>/* skills.tsx */</p>
                <div className={styles.heading}>
                    <h1>
                        <span className={styles.headingNumber}>02.</span> &lt;Skills/&gt;
                    </h1>
                </div>
            </div>

            <div className={styles.grid}>
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2 className={styles.cardTitle}>{category.title}</h2>
                            <div className={styles.cardDivider} />
                        </div>
                        <div className={styles.skillsArea}>
                            <div className={styles.skillsAccent} />
                            <div className={styles.tags}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles.tag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SkillsSection;