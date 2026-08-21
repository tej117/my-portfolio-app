// src/data/ProjectData.ts

//Images
import { Images } from "../assets/assets";

export type Projects = {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string,
    github: string,
    skills: string[],
};

export const projects: Projects [] = [

    // ============================================================
    // VITACORE — PRODUCTION
    // ============================================================
    {
        id: "project1",
        label: "3D Print Automation",
        title: "3D Printing Automation System",
        description:
            "Designed and built a production backend for automating a multi-printer Bambu Studio farm. I developed asynchronous job scheduling, printer state tracking, GUI automation, OCR-based status monitoring, and persistent job management to coordinate prints across multiple machines. The system was deployed into production and is actively used to automate part of the CPAP manufacturing workflow.",
        image: Images.projects.PrintFarm,
        github: "",
        skills: [
            "Python",
            "FastAPI",
            "SQLite",
            "OpenCV",
            "OCR",
            "Async",
            "GUI Automation",
        ],
    },

    {
        id: "project2",
        label: "Battery OCR",
        title: "Battery Detection & OCR Pipeline",
        description:
            "Built a computer vision pipeline for detecting and reading battery labels from live camera feeds and recorded video on an NVIDIA Jetson. I developed image-quality filtering, frame selection, preprocessing, multi-orientation OCR, and structured result processing using OpenCV and PaddleOCR. The system was designed to handle inconsistent lighting, blur, orientation, and other conditions encountered in a real recycling environment.",
        image: Images.projects.BatteryOCR,
        github: "",
        skills: [
            "Python",
            "OpenCV",
            "PaddleOCR",
            "NVIDIA Jetson",
            "Computer Vision",
            "Docker",
        ],
    },
    // ============================================================
    // UNIVERSITY / PERSONAL
    // ============================================================

    {
        id: "project3",
        label: "NautiChat",
        title: "NautiChat - Ocean Networks Canada Chatbot",
        description:
            "Built the backend for an AI-powered chatbot that allows users to query oceanographic data through natural language. I developed asynchronous FastAPI APIs, integrated Ocean Networks Canada's data sources, and worked with PostgreSQL, Qdrant, semantic search, and LLMs to connect user queries with relevant data. I also implemented automated testing and CI/CD to improve the reliability of the service.",
        image: Images.projects.Nautichat,
        github: "https://github.com/NautiChat-SENG499-Capstone/NautiChat-Backend",
        skills: [
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Qdrant",
            "LLMs",
            "CI/CD",
            "Testing",
        ],
    },

    {
        id: "project4",
        label: "Molecule Toxicity",
        title: "AI Model for Molecule Toxicity",
        description:
            "Developed a machine learning model to predict molecular toxicity using the Tox21 dataset as part of the University of Victoria's AI Club. I worked on data preparation, model evaluation, hyperparameter tuning, and visualization before integrating the model into a Streamlit interface for interactive exploration. The project was presented at the 2025 Canadian Undergraduate Conference on Artificial Intelligence (CUCAI).",
        image: Images.projects.Tox,
        github: "https://github.com/Tristant2005/Toxicology-Prediction",
        skills: [
            "Machine Learning",
            "Data Processing",
            "Model Evaluation",
            "Hyperparameter Tuning",
            "Streamlit",
        ],
    },

    {
        id: "project5",
        label: "Tetris",
        title: "Tetris Game",
        description:
            "Built a Tetris game from scratch in Java using an MVC architecture and event-driven design. I implemented SRS rotation, piece holding, previews, scoring, level progression, and the underlying game-state logic. The project focused on designing a clean separation between game logic, rendering, and input handling while building a relatively complex interactive system from the ground up.",
        image: Images.projects.Tetris,
        github: "https://github.com/tej117/Tetris---Java",
        skills: [
            "Java",
            "OOP",
            "MVC",
            "Algorithms",
            "Event-Driven",
        ],
    },
    //Add more as needed
];