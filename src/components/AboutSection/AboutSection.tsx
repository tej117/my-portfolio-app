// src/components/AboutSection/AboutSection.tsx

import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/AboutPage/AboutSection.module.css'

//Images
import { Images } from "../../assets/assets";

interface AboutSectionProps {
    onAnchorsReady?: (anchors: React.RefObject<HTMLDivElement | null>[]) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ( { onAnchorsReady } ) => {

    //Popups
    const [activePopup, setActivePopup] = useState<"ai" | "robotics" | "skills" | null>(null);

    // extra anchor refs for path waypoints
    const landingAnchor1 = useRef<HTMLDivElement>(null);
    const landingAnchor2 = useRef<HTMLDivElement>(null);
    const landingAnchor3 = useRef<HTMLDivElement>(null);
    const landingAnchor4 = useRef<HTMLDivElement>(null);
    const landingAnchor5 = useRef<HTMLDivElement>(null);

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
                landingAnchor3,
                landingAnchor4,
                landingAnchor5
            ]);
        }
    }, [isFirstDone]);

    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.heading}>
                    <h1>01. About Me</h1>
                    <div className={styles.headingLine}/>
                </div>
                <p>
                    I’m a fourth-year Software Engineering student at the{" "} 
                        <a href="https://www.uvic.ca" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                            University of Victoria
                        </a>
                    , specializing in Artificial Intelligence. My passion lies in applying AI and robotics to solve real-world problems. As I continue my degree, I’m focused on expanding my expertise in AI development, robotics, and computer vision to prepare for a career at the intersection of these fields.
                </p><br/><p>
                    Through the{" "}  
                        <span className={styles.popupTrigger} onClick={() => setActivePopup("ai")}>UVic AI Club→</span> 
                    {" "}and{" "}  
                        <span className={styles.popupTrigger} onClick={() => setActivePopup("robotics")}>UVic Robotics Club→</span>
                    , I’ve gained hands-on experience applying AI techniques and working with real-world robotics systems. I developed toxicity prediction models using TensorFlow and presented this work at the Canadian Undergraduate Conference on AI ( 
                        <a href="https://cucai.ca/" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                            CUCAI
                        </a>
                    ), which strengthened my technical and communication skills. In robotics, I’ve worked with the ZED 2i depth camera and ROS to build vision systems for our competition robot, focusing on 3D data streaming, remote control, and marker detection. 
                </p><br/><p>
                    Outside of school and clubs, I enjoy playing soccer, taking hip-hop dance classes, reading sci-fi novels and playing RPGs.
                </p>
                <br/>
                <div className={styles.headingLine}/>
                <div className={styles.techList}>
                    <p> Some technologies I have worked with:</p>
                    <br/>
                    <ul>
                        <li><strong>Programming:</strong> Java, Python, TypeScript</li>
                        <li><strong>AI/ML:</strong> TensorFlow, Scikit-learn</li>
                        <li><strong>Web:</strong> React, FastAPI</li>
                        <li><strong>Robotics:</strong> ROS, ZED Depth Camera</li>
                    </ul>
                    <br/>
                    <span className={styles.popupTrigger} onClick={() => setActivePopup("skills")}>View Full Skills→</span>
                </div>
            </div>
            <div className={styles.imageBlock}>
                <img src={Images.misc.profile} alt="Simran Cheema" />
            </div>

            {/* Hidden anchors for path waypoints */}
            <div ref={landingAnchor1} className={styles.anchorPoint} style={{ top: "15.9%", left: "25%" }} />
            <div ref={landingAnchor2} className={styles.anchorPoint} style={{ top: "15.9%", left: "66%" }} />
            <div ref={landingAnchor3} className={styles.anchorPoint} style={{ top: "71.2%", left: "66%" }} />
            <div ref={landingAnchor4} className={styles.anchorPoint} style={{ top: "71.2%", left: "1%" }} />
            <div ref={landingAnchor5} className={styles.anchorPoint} style={{ top: "100%", left: "1%" }} />

            {activePopup && (
                <div className={styles.popupOverlay} onClick={() => setActivePopup(null)}>
                    <div 
                    className={styles.popupBox} 
                    onClick={(e) => e.stopPropagation()}
                    >
                    <button className={styles.closeButton} onClick={() => setActivePopup(null)}>×</button>
                    
                    {activePopup === "ai" && (
                        <div className={styles.popupContent}>
                            <h2>UVic AI Club</h2>
                            <p>
                                As part of the AI Club, I’ve worked on small projects that have honed my machine learning skills. Most recently, I developed many models to predict molecule toxicity using the Tox21 dataset, which taught me a lot about handling imbalanced data and experimenting with different techniques in TensorFlow. I also had the opportunity to present this project with my partner at the Canadian Undergraduate Conference on AI (CUCAI), where I gained valuable experience sharing technical work with both peers and industry professionals. It was an incredible way to grow my confidence and communication skills while connecting with the wider AI community.
                            </p>
                            <div className={styles.imageSection}>
                                <img src={Images.clubs.AIClub} alt="UVic AI Club project" />
                            </div>
                        </div>
                    )}

                    {activePopup === "robotics" && (
                        <div className={styles.popupContent}>
                            <h2>UVic Robotics Club</h2>
                            <p>
                                Being part of the Robotics Club has allowed me to bridge software and hardware by working directly with robotics systems. I’m currently using the ZED 2i depth camera with ROS to experiment with computer vision, remote control, and 3D data streaming for our competition robot. The club has been a great environment for problem-solving with a team—whether it’s figuring out low-light marker detection, managing code with GitHub, or exploring how robotics and AI intersect in practice. It’s been both a technical challenge and a chance to grow through collaboration.
                            </p>
                            <div className={styles.imageSection}>
                                <img src={Images.clubs.RoboticsClub} alt="UVic Robotics Club project" />
                            </div>
                        </div>
                    )}

                    {activePopup === "skills" && (
                        <div className={styles.popupContent}>
                            <h2>All Skills</h2>
                            <ul className={styles.fullSkills}>
                                <li><strong>Programming Languages:</strong> Java, Python, C, C++, TypeScript/JavaScript, SQL, HTML/CSS, Bash</li>
                                <li><strong>Tools & Frameworks:</strong> FastAPI, React, Node.js, LangChain, Docker, Git, GitHubActions, ROS, ServiceNow</li>
                                <li><strong>AI/ML & DataScience:</strong> TensorFlow, Scikit-learn, Retrievial-Augmented Generation, LLM Orchestration, Prompt Engineering, QDrant, Groq API</li>
                                <li><strong>Systems & Hardware:</strong> Linux, Embedded C (STM32), VHDL (GHDL), Async Python, REST APIs, Fullstack-Development, CI/CD</li>
                                <li><strong>Other:</strong> UML Diagrams, API Integration, Technical Writing, Documentation, Team Collaboration</li>
                            </ul>
                        </div>
                    )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutSection;