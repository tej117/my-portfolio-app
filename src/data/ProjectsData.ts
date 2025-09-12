// src/data/ProjectData.ts

//Images
import TetrisImg from '../assets/tetris.jpg';
import ToxImg from '../assets/Tox.jpg';
import NautichatImg from '../assets/Nautichat.jpg';

export type Projects = {
    id: string;
    title: string;
    description: string;
    image: string,
    github: string,
    skills: string[],
};

export const projects: Projects [] = [
    {
        id: "project1",
        title: "Tetris Game",
        description: "Modern Tetris is a custom-built Java project that recreates the classic game with modern mechanics, including SRS rotation, piece holding, and upcoming piece previews. Designed on a 20x10 grid, it challenges players with increasing speed and levels as they clear lines and score points. Built from scratch in IntelliJ, this project showcases strong design architecture and programming practice while leaving room for future enhancements like AI-driven gameplay.",
        image: TetrisImg,
        github: "https://github.com/tej117/Tetris---Java",
        skills: ["OOP", "Java", "MVC", "Algorithms", "Event-Driven"]
    },
    {
        id: "project2",
        title: "AI Model for Molecule Toxicity",
        description: "This project applies machine learning to the Tox21 dataset to predict molecular toxicity based on chemical structure and biological response. Built as part of the University of Victoria’s AI Club, the model was paired with a Streamlit interface for interactive exploration and presented at the 2025 Canadian Undergraduate Conference on Artificial Intelligence (CUCAI). By leveraging the principle of Structure-Activity Relationship (SAR), the project highlights the potential of AI in supporting drug discovery and reducing costly failures in clinical testing.",
        image: ToxImg,
        github: "https://github.com/Tristant2005/Toxicology-Prediction",
        skills: ["ML & NN", "Data Prep", "Metrics", "Hyperparam Tuning", "Visualization"]
    },
    {
        id: "project3",
        title: "NautiChat - Oceans Network Canada Chatbot",
        description: "NautiChat is a full-stack conversational AI assistant for Ocean Networks Canada that enables users to query and download real-time and historical oceanographic data through natural language. The backend, built with FastAPI and powered by LLMs, semantic search, and a PostgreSQL/Qdrant database, handles data processing and API integration, while the React frontend (deployed on Vercel) provides a clean, accessible interface. Together, they deliver a secure, scalable, and user-friendly platform designed to make ocean data more understandable for researchers, educators, students, and coastal communities.",
        image: NautichatImg,
        github: "https://github.com/NautiChat-SENG499-Capstone/NautiChat-Backend",
        skills: ["FastAPI", "Python", "PostgreSQL", "CI/CD", "Testing"]
    },
    //Add more as needed
];