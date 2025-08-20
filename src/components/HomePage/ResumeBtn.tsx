import React from 'react';
import styles from '../../styles/HomePage/ResumeBtn.module.css';

const ResumeBtn: React.FC = () => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.downloadButton}>Resume</button>
            <div className={`${styles.arc} ${styles.arcSmall}`}></div>
            <div className={`${styles.arc} ${styles.arcMedium}`}></div>
            <div className={`${styles.arc} ${styles.arcLarge}`}></div>
        </div>
    );
}

export default ResumeBtn;