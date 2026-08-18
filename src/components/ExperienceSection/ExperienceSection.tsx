// src/components/ExperienceSection/ExperienceSection.tsx

import React from "react";
import styles from "../../styles/ExperiencePage/ExperienceSection.module.css";
import { experiences } from "../../data/ExperienceData.tsx";
import TimelineItem from "./TimelineItem";

const Timeline: React.FC = () => {
    return (
        <div className={styles.timelineContainer} id="timeline">
            <div className={styles.headerBlock}>
                <p className={styles.fileLabel}>/* experience.md */</p>
                <div className={styles.heading}>
                    <h1><span className={styles.headingNumber}>03.</span> &lt;Experience/&gt;</h1>
                </div>
            </div>
            <div className={styles.timeline}>
                {experiences.map((exp, i) => (
                    <TimelineItem key={i} experience={exp} />
                ))}
            </div>
        </div>
    );
}

export default Timeline;