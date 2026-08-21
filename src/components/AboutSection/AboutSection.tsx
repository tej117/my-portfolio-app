// src/components/AboutSection/AboutSection.tsx

import React, { useState } from 'react';
import styles from '../../styles/AboutPage/AboutSection.module.css';

const AboutSection: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.contentBlock}>

                {/* Header */}
                <div className={styles.heading}>
                    <p className={styles.fileLabel}>/* CURRENTLY DOING */</p>
                    <h1>
                        <span className={styles.headingNumber}>01.</span> &lt;Me/&gt;
                    </h1>
                </div>

                {/* Bio card */}
                <div className={styles.bioRow}>
                    <div className={styles.textBlock}>
                        <p>
                            I'm someone who enjoys discovering new things and exploring unfamiliar topics
                            simply for the fun of it. I learn best by building things myself, often getting
                            pulled down a rabbit hole to understand how everything works from the ground up.
                            I especially enjoy projects where software has a tangible result, whether that's
                            controlling a robot, processing data from a camera, or turning an unfamiliar idea
                            into a reliable prototype. 
                        </p>
                    </div>
                </div>

                {/* Currently — full width, below bio row */}
                <div className={styles.currentRole}>
                    <div className={styles.borderPulse} />
                    <p className={styles.sectionHeader}>/* CURRENTLY */</p>

                    <div className={styles.titleRow}>
                        <h2 className={styles.roleTitle}>Software Lead</h2>
                        <span className={styles.activeBadge}>Active</span>
                    </div>

                    <p className={styles.roleOrg}>UVic Robotics Club</p>

                    <p className={styles.roleSummary}>
                        I lead the software team, coordinating development across our rover's systems while contributing 
                        wherever I'm needed. My work spans project management, systems architecture, implementation, research, 
                        and documentation, from designing control systems to investigating new tools and technologies for the team.
                    </p>

                    <button
                        className={styles.expandButton}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <span>What I'm working on</span>
                        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>
                            ›
                        </span>
                    </button>

                    <div className={`${styles.expandContent} ${expanded ? styles.expandContentOpen : ''}`}>
                        <ul className={styles.workList}>
                            <li>Lead and coordinate the software team and host weekly meetings</li>
                            <li>Track issues, milestones, and requirements through GitHub and our SRS</li>
                            <li>Design and implement control systems for the arm and drive systems</li>
                            <li>Develop and maintain our Docker and ROS 2 development environment (+ CI/CD workflows)</li>
                            <li>Research rover subsystems including antennas, communications, DDS, and camera pipelines</li>
                            <li>Work with technologies including GStreamer, ROS 2, and simulation tools</li>
                            <li>Create tutorials and documentation to help onboard and support the team</li>
                        </ul>
                    </div>
                </div>                

            </div>
        </div>
    );
};

export default AboutSection;