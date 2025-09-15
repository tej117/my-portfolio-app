// src/components/Footer.tsx

import React from 'react'
import styles from '../styles/Footer.module.css';

// Import icons (you can use your pngs from assets)
import { Images } from "../assets/assets"

const Footer: React.FC = () => {
    return (
        <>
            {/* Vertical social bar */}
            <div className={styles.socialBar}>
                <a href="mailto:tejalcheema@gmail.com" aria-label="Email">
                    <img src={Images.icons.email} alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/simran-cheema-690755231" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={Images.icons.linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/tej117" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src={Images.icons.github} alt="GitHub" />
                </a>
            </div>

            {/* Footer bottom text */}
            <div className={styles.footer}>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Simran Cheema</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
