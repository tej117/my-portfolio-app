// src/components/ExperienceSection/TimelineItem.tsx

import React from "react";
import styles from "../../styles/ExperiencePage/TimelineItem.module.css";
import { Experience } from "../../data/ExperienceData";

type Props = {
    experience: Experience;
};

const TimelineItem: React.FC<Props> = ({ experience }) => {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.content}>
                <h3>{experience.title}</h3>
                <span className={styles.date}>{experience.date}</span>
                <p>{experience.description}</p>
            </div>
        </div>
    );
}

export default TimelineItem;