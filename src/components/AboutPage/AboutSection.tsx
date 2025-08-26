import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/AboutPage/AboutSection.module.css'

//Images
import profileImg from '../../assets/Me.jpg';

interface AboutSectionProps {
    onAnchorsReady?: (anchors: React.RefObject<HTMLDivElement | null>[]) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ( { onAnchorsReady } ) => {

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
            }, 2000); // wait for landing section
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
                   I’m a fourth-year Software Engineering student at the University of Victoria, specializing in Artificial Intelligence. My passion lies in applying AI and robotics to solve real-world problems. As I continue my degree, I’m focused on expanding my expertise in AI development, robotics, and computer vision to prepare for a career at the intersection of these fields.
                </p><br/><p>
                    Through the UVic AI Club and Robotics Club, I’ve gained hands-on experience applying AI techniques and working with real-world robotics systems. I developed toxicity prediction models using TensorFlow and presented this work at the Canadian Undergraduate Conference on AI (CUCAI), which strengthened my technical and communication skills. In robotics, I’ve worked with the ZED 2i depth camera and ROS to build vision systems for our competition robot, focusing on 3D data streaming, remote control, and marker detection. 
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
                </div>
            </div>
            <div className={styles.imageBlock}>
                <img src={profileImg} alt="Simran Cheema" />
            </div>

            {/* Hidden anchors for path waypoints */}
            <div ref={landingAnchor1} className={styles.anchorPoint} style={{ top: "16%", left: "25%" }} />
            <div ref={landingAnchor2} className={styles.anchorPoint} style={{ top: "16%", left: "66%" }} />
            <div ref={landingAnchor3} className={styles.anchorPoint} style={{ top: "71.2%", left: "66%" }} />
            <div ref={landingAnchor4} className={styles.anchorPoint} style={{ top: "71.2%", left: "1%" }} />
            <div ref={landingAnchor5} className={styles.anchorPoint} style={{ top: "100%", left: "1%" }} />
        </div>
    );
}

export default AboutSection;