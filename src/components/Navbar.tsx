import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

// Define Navbar Component
const Navbar: React.FC = () => {

    //States for hamburger menu
    const [isActive, setIsActive] = useState<boolean>(false);

    //Flips between active - NOT active when hamburger is clicked
    const toggleActiveClass = (): void => {
        setIsActive(!isActive);
    };

    // Clean up function for when navigation link is clicked
    const removeActive = (): void => {
        setIsActive(false);
    };

    return (
        <div>
            <header> 
                <nav className={styles.navbar}>
                    <Link to="/" className={`${styles.name}`}>Tejal Simran Cheema</Link>
                    <p className={styles.title}> Software Engineer </p>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active ?? '' : ''}`}>
                        <li onClick={removeActive}>
                            <Link to="/about" className={styles.navLink}>01.  &lt;About/&gt;</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to="/experience" className={styles.navLink}>02.  &lt;Experience/&gt;</Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to="/projects" className={styles.navLink}>03.  &lt;Projects/&gt;</Link>
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