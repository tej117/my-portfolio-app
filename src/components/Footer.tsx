// src/components/Footer.tsx

import React from 'react'
import styles from '../styles/Footer.module.css';

// Define Navbar Component
const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <p>Email: <a href="mailto:tejalcheema@gmail.com">tejalcheema@gmail.com</a></p>
                <p>LinkedIn: <a href="www.linkedin.com/in/simran-cheema-690755231" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p>GitHub: <a href="https://github.com/tej117" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Simran Cheema </p>
            </div>
        </div>
    );
};

export default Footer;