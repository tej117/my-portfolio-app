import React from "react";
import styles from "../../styles/ExperiencePage/Timeline.module.css";
import { experiences } from "../../scripts/ExperienceData";
import TimelineItem from "./TimelineItem";

const Timeline: React.FC = () => {
    return (
        <div className={styles.timelineContainer} id="timeline">
            <h2 className={styles.title}>Experience Timeline</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, i) => (
                    <TimelineItem key={i} experience={exp} isLeft={i % 2 === 0} />
                ))}
            </div>
        </div>
    );
}

export default Timeline;