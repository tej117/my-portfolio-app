// src/data/ExperienceData.tsx

import { ReactNode } from "react";

import styles from "../styles/ExperiencePage/ExperienceData.module.css";

export type Experience = {
    date: string;
    title: ReactNode;
    description: ReactNode;
};

export const experiences: Experience [] = [
            //Add more as needed
    {
        date: "Jan 2026 - Aug 2026",
        title: (
            <>
                Engineering Co-op @{" "}
                <a
                    href="https://www.vitacore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hoverLink}
                >
                    Vitacore Industries Inc.
                </a>
            </>
        ),
        description: (
            <>
                Developed production software for manufacturing automation, including
                a 3D printing job scheduler that automated printer assignment and
                monitored{" "}
                <a
                    href="https://github.com/bambulab/BambuStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hoverLink}
                >
                    Bambu Studio
                </a>{" "} 
                to manage a multi-printer farm. The system was
                deployed to production and is actively used in the CPAP manufacturing
                process. I also worked on robotics and computer vision projects,
                developing a new camera calibration method for a delta robot and
                prototyping battery chemistry detection using OCR.
            </>
        ),
    },
    {
        date: "May 2025 - Aug 2025",
        title: "Backend Team Member for UVIC Capstone Project",
        description: (
            <>
                As part of a team building an AI-powered chatbot for{"\n"}
                    <a href="https://www.oceannetworks.ca/" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        Oceans Network Canada
                    </a>
                , I focused on backend development using FastAPI, PostgreSQL, and Docker. I implemented asynchronous APIs, integrated ONC's datasources, and built automated testing to ensure scalability and reliability.
            </>
        ),
    },
    {
        date: "May 2023 - Apr 2024",
        title: (
            <>
                Security Auxiliary @{" "}
                    <a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        Ministry of Citizen Services
                    </a>
            </>
        ),
        description: (
            <>
                Continuing my previous work as an intern, I enhanced the PDF Generator App with new features and led development of a mobile version of the{" "} 
                    <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        STRA
                    </a>{" "}
                app in{" "}
                    <a href="https://www.servicenow.com/" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        ServiceNow
                    </a>{" "}
                . By the end of my contract, the mobile STRA app was completed and demoed to ministry executives.
            </>
        ),
    },
    {
        date: "Sept 2022 - Apr 2023",
        title: (
            <>
                Security Co-op @{" "}
                    <a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        Ministry of Citizen Services
                    </a>
            </>
        ),
        description: (
            <>
                I developed a PDF Generator App in{" "}
                    <a href="https://www.servicenow.com/" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        ServiceNow
                    </a>{" "}
                that transformed dynamic forms into professional, responsive PDFs. I also added new features to the ministry's Security Threat Risk Assessment (
                    <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment" target="_blank" rel="noopener noreferrer" className={styles.hoverLink}>
                        STRA
                    </a>
                ) tool, improving automation and usability.
            </>
        ),
    },
];