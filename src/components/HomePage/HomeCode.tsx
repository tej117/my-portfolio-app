import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/HomeCode.module.css';
import Typewriter from "../../scripts/Typewriter";

import ResumeBtn from './ResumeBtn';

const HomeCode: React.FC = () => {

    const containerRef1 = useRef<HTMLDivElement>(null);
    const [isFirstDone, setIsFirstDone] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const hasRun = useRef(false);

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

    const showAnimation = isFirstDone && !animationComplete;
    const showCentered = !isFirstDone || showAnimation;

    //Make First Container appear center before moving to Left
    return (
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
                    className={`${styles.textContainer}
                                ${isFirstDone ? styles.visible : ''}
                                ${showAnimation ? styles.absolutePosition : ''}
                                ${showAnimation ? styles.animateToRight : ''}`}
                >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur soluta, corrupti
                        consequuntur amet ipsum voluptatibus facere debitis eos necessitatibus distinctio
                        incidunt sint consectetur neque autem.
                    </p>
                    <div className={styles.btnContainer}>
                        <ResumeBtn />
                    </div>
                </div>
            </div>
        </div>
    );       
};

export default HomeCode;