import React from "react";
import styles from "../../styles/ExperiencePage/TimelineItem.module.css";
import { Experience } from "../../scripts/ExperienceData";

type Props = {
    experience: Experience;
    isLeft: boolean; //Whether to display on left or right
};

const TimelineItem: React.FC<Props> = ({ experience, isLeft }) => {
    return (
        <div className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}>
            <div className={styles.content}>
                <h3>{experience.title}</h3>
                <span className={styles.date}>{experience.date}</span>
                <p>{experience.description}</p>
            </div>
            <div className={styles.dot}></div>
        </div>
    );
}

export default TimelineItem;