// src/data/ProjectData.ts

export type Projects = {
    id: string;
    title: string;
    description: string;
    image: string,
};

export const projects: Projects [] = [
    {
        id: "project1",
        title: "Tetris Game",
        description: "An AI model built using the Tox21 dataset to predict molecule toxicity levels.",
        image: "placeholder.jpg"
    },
    {
        id: "project2",
        title: "AI Model for Molecule Toxicity",
        description: "A Tetris clone with AI and advanced scoring",
        image: "placeholder.jpg"
    },
    {
        id: "project3",
        title: "NautiChat - Oceans Network Canada Chatbot",
        description: "With Oceans Network Canada as our clients, our group created a Chatbot (like ChatGPT) with Admin dashboard and analytics.",
        image: "placeholder.jpg"
    },
    //Add more as needed
];