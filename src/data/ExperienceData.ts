// src/data/ExperienceData.ts

export type Experience = {
    date: string;
    title: string;
    description: string;
};

export const experiences: Experience [] = [
    {
        date: "Sept 2022 - Apr 2023",
        title: "Security Co-op @ Ministry of Citizen Services",
        description: "I worked in ServiceNow, a SAAS where I made a PDFGenerater App, that takes a dynamic form and produces a PDF. Additionally, I created feactures and scripts that encompassed the main, Security Threat Risk Assessment (STRA) app also within ServiceNow."
    },
    {
        date: "May 2023 - Apr 2024",
        title: "Security Auxiliary @ Ministry of Citizen Services",
        description: "Continuing my previous work as an intern, I constantly improved the PDFGeneratore App. However, my main project was the Mobile Security Threat Risk Assessment (STRA) app which was done in ServiceNow. This was completed by the time my contract was over."
    },
    {
        date: "May 2025 - Aug 2025",
        title: "Backend Team Member for UVIC Capstone Project",
        description: "With Oceans Network Canada as our clients, our group created a Chatbot (like ChatGPT) with Admin dashboard and analytics. As part of the backend team, I worked with FastAPI, PostgreSQL, Docker, async, and Pytest."
    },
    //Add more as needed
];