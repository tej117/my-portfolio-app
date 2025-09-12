import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

// Define Navbar Component
const Navbar: React.FC = () => {

    //States for hamburger menu
    const [isActive, setIsActive] = useState<boolean>(false);
    //States for disappearing Navbar
    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    // Ref to store timeout ID
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            if (window.scrollY > lastScrollY) {
                // scrolling down → hide navbar
                setShow(false);
            } else {
                // scrolling up → show navbar
                setShow(true);
            }

            setLastScrollY(window.scrollY);

            // debounce to prevent flicker
            timeoutRef.current = setTimeout(() => {
                setShow(window.scrollY <= 0 || show);
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, show]);

    return (
        <div>
            <header> 
                <nav className={`${styles.navbar} ${show ? styles.show : styles.hidden}`}>
                    <Link to="/" className={`${styles.name}`}>Tejal Simran Cheema</Link>
                    <p className={styles.title}> Software Engineer </p>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active ?? '' : ''}`}>
                        <li onClick={removeActive}>
                            <a href="#about" className={styles.navLink}>01. &lt;About/&gt;</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="#experience" className={styles.navLink}>02.  &lt;Experience/&gt;</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="#projects" className={styles.navLink}>03.  &lt;Projects/&gt;</a>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;