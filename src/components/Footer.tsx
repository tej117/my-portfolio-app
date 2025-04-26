import React from 'react'
import styles from '../styles/Footer.module.css';

// Define Navbar Component
const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
                <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Simran Cheema </p>
            </div>
        </div>
    );
};

export default Footer;