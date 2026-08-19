// src/components/HomeSection/HomeCode.tsx

import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/HomePage/HomeCode.module.css';
import Typewriter from "../../scripts/Typewriter";
import BrowserPreview from './BrowserPreview';

const HomeCode: React.FC = () => {

    const containerRef1 = useRef<HTMLDivElement>(null);

    const lineNumRef = useRef<HTMLDivElement>(null);

    const [isFirstDone, setIsFirstDone] = useState(false);
    const hasRun = useRef(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Ensures it runs only once
        if (hasRun.current) return; 
        hasRun.current = true;

        // Current editor line
        let currentLine = 0;

        // Keep track of line number in typewriter (create div for it and set classname for styling)
        const addLineNumber = () => {
            currentLine++;
            if (lineNumRef.current && containerRef1.current) {
                // Find the last typed line's actual height
                const codeDiv = containerRef1.current.firstElementChild; // the inner div Typewriter creates
                const lastLine = codeDiv?.lastElementChild as HTMLElement | null;
                const height = lastLine ? lastLine.offsetHeight : null;

                const num = document.createElement("div");
                num.textContent = String(currentLine);
                num.className = styles.lineNum;
                if (height) num.style.height = `${height}px`;

                lineNumRef.current.appendChild(num);
            }
        }

        if (containerRef1.current) {
            const typewriter = new Typewriter(
                containerRef1.current,
                {
                    loop: false,
                    typingSpeed: 50,
                }
            );

            // Text with the Typewriter effect
            typewriter
                .typeParts([
                    { text: "<", className: styles.bracket },
                    { text: "head", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode0)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "<!-- styles, scripts -->", className: styles.comment }
                ], styles.fakeCode1)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "</", className: styles.bracket },
                    { text: "head", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode0)
                .callFunction(addLineNumber)
                .pauseFor(200)

                .typeParts([
                    { text: "<", className: styles.bracket },
                    { text: "body", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode0)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "<", className: styles.bracket },
                    { text: "h1", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode1)
                .callFunction(addLineNumber)
                .pauseFor(200)

                .typeParts([
                    { text: "Hi, I'm Simran", className: styles.string }
                ], styles.fakeCode1)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "</", className: styles.bracket },
                    { text: "h1", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode1)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "<", className: styles.bracket },
                    { text: "h2", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode1)
                .callFunction(addLineNumber)
                .pauseFor(200)

                .typeParts([
                    { text: "Software Engineer", className: styles.string }
                ], styles.fakeCode1)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "</", className: styles.bracket },
                    { text: "h2", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode1)
                .callFunction(addLineNumber)

                .typeParts([
                    { text: "</", className: styles.bracket },
                    { text: "body", className: styles.tagName },
                    { text: ">", className: styles.bracket },
                ], styles.fakeCode0)
                .callFunction(addLineNumber)

                .callFunction(() => setIsFirstDone(true))
                .start();
        }
    }, []);

    //Make First Container appear center before moving to Left
    return (
        <div className={styles.flexFinal}>
            <div className={`${styles.typewriterContainer}`}>
                <div className={styles.editorBar}>
                    <span className={styles.editorTitle}>index.html</span>
                </div>
                <div className={styles.editorBody}>
                    <div ref={lineNumRef} className={styles.lineNumbers} />
                    <div ref={containerRef1} className={styles.codeContent} />
                </div>
            </div>

            <BrowserPreview visible={isFirstDone} />

            {isFirstDone && (
                <div className={`${styles.scrollIndicator} ${scrolled ? styles.scrollHidden : ''}`}>
                    <span className={styles.scrollLabel}>// scroll</span>
                    <div className={styles.scrollChevron}>&#8964;</div>
                </div>
            )}
        </div>
    );     
};

export default HomeCode;