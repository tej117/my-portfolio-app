// src/components/HomeSection/BrowserPreview.tsx

import React from 'react';
import styles from '../../styles/HomePage/BrowserPreview.module.css';

interface BrowserPreviewProps {
    visible: boolean;
}

const BrowserPreview: React.FC<BrowserPreviewProps> = ({ visible }) => {
    return (
        <div className={`${styles.browser} ${visible ? styles.visible : ''}`}>

            {/* Browser chrome */}
            <div className={styles.browserBar}>
                <div className={styles.dots}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                </div>
                <div className={styles.addressBar}>
                    <span className={styles.protocol}>https://</span>
                    <span className={styles.domain}>simran.dev</span>
                </div>
            </div>

            {/* Rendered page content */}
            <div className={styles.pageContent}>

                <div className={styles.nameBlock}>
                    <p className={styles.greeting}>Hi, I'm</p>
                    <h1 className={styles.name}>Simran Cheema</h1>
                </div>

                <div className={styles.degreeBlock}>
                    <span className={styles.degree}>
                        B.Eng Software Engineering · Class of 2027
                    </span>
                    <span className={styles.university}>University of Victoria</span>
                </div>

                <div className={styles.divider} />

                <div className={styles.focusBlock}>
                    <p className={styles.focusLabel}>// focus areas</p>
                    <div className={styles.tags}>
                        <span className={styles.tag}>AI</span>
                        <span className={styles.tag}>Robotics</span>
                        <span className={styles.tag}>Computer Vision</span>
                        <span className={styles.tag}>Backend</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrowserPreview;