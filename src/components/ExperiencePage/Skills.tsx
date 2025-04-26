import React from 'react';
import styles from "../../styles/ExperiencePage/Skills.module.css"

type Skill = {
    name: string;
    image: string;
}

const skills: Skill[] = [
    { name: "Java", image: ""},
    { name: "TypeScript", image: ""},
    { name: "React", image: ""},
    { name: "Python", image: ""},
    { name: "HTML", image: ""},
    { name: "CSS", image: ""},
    { name: "ROS", image: ""},
    { name: "Linux", image: ""},
    { name: "Git", image: ""},
    //Add more as needed
];

const Skills: React.FC = () => {
    return (
        <div className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            {/* Combine base grid class and conditional centering class*/}
            <div className={styles.flexWrapper}>
                {skills.map((skill, i) => (
                    <div key={i} className={styles.skillCard}>
                        {/*Placeholder Icon*/}
                        <div className={styles.iconPlaceholder}>
                            <img src={skill.image}/>
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;