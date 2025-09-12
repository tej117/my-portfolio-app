import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/ExperiencePage/ExperienceSection.module.css";
import { experiences } from "../../data/ExperienceData";
import TimelineItem from "./TimelineItem";

interface ExperienceSectionProps {
    onAnchorsReady?: (anchors: React.RefObject<HTMLDivElement | null>[]) => void;
}

const Timeline: React.FC<ExperienceSectionProps> = ( { onAnchorsReady }) => {

    // extra anchor refs for path waypoints
    const landingAnchor1 = useRef<HTMLDivElement>(null);
    const landingAnchor2 = useRef<HTMLDivElement>(null);
    const landingAnchor3 = useRef<HTMLDivElement>(null);

    const [isFirstDone, setIsFirstDone] = useState(false);
    
    useEffect(() => {
        if (!isFirstDone) {
            const timer = setTimeout(() => {
                setIsFirstDone(true)          // local flag
            }, 2000); // Delay (don't know why it works when added)
            return () => clearTimeout(timer);
        }
    }, [isFirstDone]);

    useEffect(() => {
        if (!isFirstDone) return;

        if (onAnchorsReady) {
            onAnchorsReady([
                landingAnchor1,
                landingAnchor2,
                landingAnchor3
            ]);
        }
    }, [isFirstDone]);

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

            {/* Hidden anchors for path waypoints */}
            <div ref={landingAnchor1} className={styles.anchorPoint} style={{ top: "13%", left: "9%" }} />
            <div ref={landingAnchor2} className={styles.anchorPoint} style={{ top: "13%", left: "49.7%" }} />
            <div ref={landingAnchor3} className={styles.anchorPoint} style={{ top: "100%", left: "49.7%" }} />
        </div>
    );
}

export default Timeline;