import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/HomePage/HomeCode.module.css';
import Typewriter from "../../scripts/Typewriter";

import ResumeBtn from './ResumeBtn';
import CircuitPath from './CircuitPath';

const HomeCode: React.FC = () => {

    const containerRef1 = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);

    const [isFirstDone, setIsFirstDone] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const hasRun = useRef(false);
    const [showPath, setShowPath] = useState(false);

    useEffect(() => {
        // Ensures it runs only once
        if (hasRun.current) return; 
        hasRun.current = true;

        if (containerRef1.current) {
            const typewriter = new Typewriter(
                containerRef1.current,
                {
                    loop: false,
                    typingSpeed: 50,
                    deletingSpeed: 10
                }
            );

            // Text with the Typewriter effect

            typewriter
                .typeElement({
                    tag: "p", text: "&lt;/head&gt;", className:styles.fakeCode0
                })
                .typeElement({
                    tag: "p", text: "&lt;body&gt;", className:styles.fakeCode0
                })
                .typeElement({
                    tag: "p", text: "&lt;h1&gt;", className:styles.fakeCode1
                })
                .pauseFor(200)
                .typeElement({
                    tag: "h1", text: "Hi, </br> I'm Simran", className:styles.titleh1
                })
                .typeElement({
                    tag: "p", text: "&lt;/h1&gt;", className:styles.fakeCode1
                })
                .typeElement({
                    tag: "p", text: "&lt;h2&gt;", className:styles.fakeCode1
                })
                .pauseFor(200)
                .typeElement({
                    tag: "h2", text: "Software Engineer", className:styles.titleh2
                })
                .typeElement({
                    tag: "p", text: "&lt;/h2&gt;", className:styles.fakeCode1
                })
                .typeElement({
                    tag: "p", text: "&lt;/body&gt;", className:styles.fakeCode0
                })
                .callFunction(() => setIsFirstDone(true))
                .start();
        }
    }, []);

    useEffect(() => {
        if (isFirstDone) {
            // Wait 1200 for animation to finish and path gets correct resumebtn postion
            const timer = setTimeout(() => setShowPath(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [isFirstDone]);

    const showAnimation = isFirstDone && !animationComplete;
    const showCentered = !isFirstDone || showAnimation;

    //Make First Container appear center before moving to Left
    return (
        <div>
            <div className={isFirstDone && animationComplete ? styles.flexFinal : styles.flexInitial}>
                <div className={styles.animationWrapper}>
                    <div
                        className={`${styles.typewriterContainer} 
                                    ${showCentered ? styles.absolutePosition : ''} 
                                    ${showAnimation ? styles.animateToLeft : ''}`}
                        onAnimationEnd={() => setAnimationComplete(true)}
                    >
                        <div ref={containerRef1} />
                    </div>

                    <div
                        className={`${styles.contentContainer}
                                    ${isFirstDone ? styles.visible : ''}
                                    ${showAnimation ? styles.absolutePosition : ''}
                                    ${showAnimation ? styles.animateToRight : ''}`}
                    >
                        <div className={styles.textContainer}>
                            <p>
                                I'm a Software Engineering student at UVic who is specializing in Artifical Intelligence. I am focused on gaining experience in the Robotics and AI field, wanting to tackle real-world problems that can be solved through automation.
                            </p>
                        </div>
                        <div className={styles.btnContainer} ref={resumeRef}>
                            <ResumeBtn />
                        </div>
                    </div>
                </div>
                {showPath && <CircuitPath isFirstDone={isFirstDone} resumeRef={resumeRef} />}
            </div>
        </div>
    );       
};

export default HomeCode;