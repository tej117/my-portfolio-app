// src/components/SkillsSection/SkillsSection.tsx

import React from 'react';
import styles from '../../styles/SkillPage/SkillSection.module.css';

interface SkillCategory {
    title: string;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "SQL", "HTML/CSS", "Bash"],
    },
    {
        title: "AI & ML",
        skills: ["TensorFlow", "Scikit-learn", "RAG", "LLM Orchestration", "Prompt Engineering", "Qdrant", "Groq API"],
    },
    {
        title: "Robotics & Vision",
        skills: ["ROS", "ZED Depth Camera", "Computer Vision", "3D Data Streaming", "Embedded C", "STM32"],
    },
    {
        title: "Web & Backend",
        skills: ["React", "FastAPI", "Node.js", "REST APIs", "Docker", "PostgreSQL", "LangChain"],
    },
    {
        title: "Dev & Tools",
        skills: ["Git", "GitHub Actions", "Linux", "CI/CD", "ServiceNow", "VHDL", "Technical Writing"],
    },
];

const SkillsSection: React.FC = () => {
    return (
        <div className={styles.container}>

            <div className={styles.headerBlock}>
                <p className={styles.fileLabel}>/* skills.md */</p>
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