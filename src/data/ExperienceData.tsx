// src/data/ExperienceData.tsx

import { ReactNode } from "react";

import styles from "../styles/ExperiencePage/ExperienceData.module.css";

export type Experience = {
    date: string;
    title: ReactNode;
    description: ReactNode;
};

export const experiences: Experience [] = [
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
    //Add more as needed
];