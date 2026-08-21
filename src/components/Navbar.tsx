// src/components/Navbar.tsx

import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Navbar.module.css';

// Define Navbar Component
const Navbar: React.FC = () => {

    //States for hamburger menu
    const [isActive, setIsActive] = useState<boolean>(false);
    //States for disappearing Navbar
    const [show, setShow] = useState<boolean>(true);
    const lastScrollY = useRef(window.scrollY);
    const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

    //Flips between active - NOT active when hamburger is clicked
    const toggleActiveClass = (): void => {
        setIsActive(!isActive);
    };

    // Clean up function for when navigation link is clicked
    const removeActive = (): void => {
        setIsActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isProgrammaticScroll) {
                lastScrollY.current = currentScrollY;
                return;
            }

            // Ignore tiny scroll movements
            if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
                return;
            }

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setShow(false);
                setIsActive(false);
            } else {
                // Scrolling up
                setShow(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isProgrammaticScroll]);

    return (
        <div>
            <header> 
                <nav className={`${styles.navbar} ${show ? styles.show : styles.hidden}`}>
                    <a href="/my-portfolio-app/" className={`${styles.name}`}>Tejal Simran Cheema</a>
                    <p className={styles.title}> Software Engineer </p>
                    <div className={styles.navActions}>
                        <ul className={`${styles.navMenu} ${isActive ? styles.active ?? '' : ''}`}>
                            <li onClick={removeActive}>
                                <a 
                                    href="#about" 
                                    className={styles.navLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProgrammaticScroll(true);
                                        document.getElementById("about")?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        // reset the flag after scroll finishes
                                        setTimeout(() => setIsProgrammaticScroll(false), 800);
                                    }}
                                >
                                    01. &lt;Me/&gt;
                                </a>
                            </li>
                            <li onClick={removeActive}>
                                <a 
                                    href="#skills" 
                                    className={styles.navLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProgrammaticScroll(true);
                                        document.getElementById("skills")?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        // reset the flag after scroll finishes
                                        setTimeout(() => setIsProgrammaticScroll(false), 800);
                                    }}
                                >
                                    02. &lt;Skills/&gt;
                                </a>
                            </li>
                            <li onClick={removeActive}>
                                <a 
                                    href="#experience" 
                                    className={styles.navLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProgrammaticScroll(true);
                                        document.getElementById("experience")?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        // reset the flag after scroll finishes
                                        setTimeout(() => setIsProgrammaticScroll(false), 800);
                                    }}
                                >
                                    03.  &lt;Experience/&gt;
                                </a>
                            </li>
                            <li onClick={removeActive}>
                                <a 
                                    href="#projects" 
                                    className={styles.navLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProgrammaticScroll(true);
                                        document.getElementById("projects")?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        // reset the flag after scroll finishes
                                        setTimeout(() => setIsProgrammaticScroll(false), 800);
                                    }}
                                >
                                    04.  &lt;Projects/&gt;
                                </a>
                            </li>
                        </ul>
                        <div className={styles.mobileControls}>
                            <a
                                href="/my-portfolio-app/Resume-Main.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.resumeLink}
                                aria-label="View CV (opens in new tab)"
                            >
                                <span className={styles.downloadIcon} aria-hidden="true">
                                    <span className={styles.downloadArrow}></span>
                                    <span className={styles.downloadLine}></span>
                                </span>
                                <span className={styles.resumeText}>CV</span>
                            </a>
                            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;