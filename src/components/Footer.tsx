// src/components/Footer.tsx

import React from 'react'
import styles from '../styles/Footer.module.css';

// Import icons
import { Images } from "../assets/assets"

const Footer: React.FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} Tejal Simran Cheema</p>
                </div>

                <div className={styles.socialBar}>
                    <a href="https://github.com/tej117" target="_blank" rel="noopener noreferrer">
                        <img src={Images.icons.github} alt="GitHub" />
                    </a>

                    <a href="https://www.linkedin.com/in/simran-cheema-690755231" target="_blank" rel="noopener noreferrer">
                        <img src={Images.icons.linkedin} alt="LinkedIn" />
                    </a>

                    <a href="mailto:tejalcheema@gmail.com">
                        <img src={Images.icons.email} alt="Email" />
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
