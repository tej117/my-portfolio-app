// src/components/ExperienceSection/ExperienceSection.tsx

import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/ExperiencePage/ExperienceSection.module.css";
import { experiences } from "../../data/ExperienceData.tsx";
import TimelineItem from "./TimelineItem";

const Timeline: React.FC = () => {

    return (
        <div className={styles.timelineContainer} id="timeline">
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>02. Experience Timeline</h1>
            </div>
            <div className={styles.timeline}>
                {experiences.map((exp, i) => (
                    <TimelineItem key={i} experience={exp} isLeft={i % 2 === 0} />
                ))}
            </div>
        </div>
    );
}

export default Timeline;