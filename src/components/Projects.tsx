"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

// Define types for our project data structure
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

type CategoryData = {
  title: string;
  description: string;
  projects: Project[];
};

type ProjectsDataType = {
  [key: string]: CategoryData;
};

// Restructured project data with categories
const projectsData: ProjectsDataType = {
  "machine-learning": {
    title: "Machine Learning & Deep Learning",
    description: "Projects that leverage ML/DL technologies to solve complex problems",
    projects: [
      {
        title: "Image Classification System",
        description: "An advanced image classification system using deep learning models to categorize images with high accuracy. Implemented with PyTorch and deployed on AWS Lambda for serverless inference.",
        image: "/placeholder-project.jpg",
        tags: ["PyTorch", "AWS Lambda", "Computer Vision", "TensorFlow", "CNN"],
        githubUrl: "https://github.com/yourusername/ml-project1",
        liveUrl: "https://ml-project1-demo.example.com"
      },
      {
        title: "Natural Language Processing API",
        description: "An API for processing and analyzing natural language data with capabilities for sentiment analysis, entity recognition, and language translation using state-of-the-art NLP models.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "BERT", "Hugging Face", "FastAPI", "Docker"],
        githubUrl: "https://github.com/yourusername/ml-project2",
        liveUrl: "https://ml-project2-demo.example.com"
      },
      {
        title: "Time Series Forecasting Model",
        description: "Developed advanced time series forecasting models for predicting financial markets and demand forecasting using LSTM networks and transformer architectures.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "Keras", "LSTM", "Time Series", "Forecasting"],
        githubUrl: "https://github.com/yourusername/ml-project3",
        liveUrl: "https://ml-project3-demo.example.com"
      }
    ]
  },
  "software-development": {
    title: "Software Development",
    description: "Web and mobile applications built with modern frameworks and technologies",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, payment processing, and order management. Built with React, Node.js, and MongoDB.",
        image: "/placeholder-project.jpg",
        tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
        githubUrl: "https://github.com/yourusername/dev-project1",
        liveUrl: "https://dev-project1-demo.example.com"
      },
      {
        title: "Real-Time Collaboration Tool",
        description: "A collaborative workspace app allowing teams to work together in real-time with features like document editing, task management, and video conferencing integration.",
        image: "/placeholder-project.jpg",
        tags: ["TypeScript", "React", "Socket.io", "Express", "Redis"],
        githubUrl: "https://github.com/yourusername/dev-project2",
        liveUrl: "https://dev-project2-demo.example.com"
      },
      {
        title: "Mobile Fitness Application",
        description: "A cross-platform mobile app for fitness tracking, workout planning, and nutrition monitoring. Includes social features and gamification elements to encourage user engagement.",
        image: "/placeholder-project.jpg",
        tags: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
        githubUrl: "https://github.com/yourusername/dev-project3",
        liveUrl: "https://dev-project3-demo.example.com"
      }
    ]
  },
  "data-analysis": {
    title: "Data Analysis & Visualization",
    description: "Projects focused on extracting insights from data through analysis and visualization",
    projects: [
      {
        title: "Financial Market Dashboard",
        description: "A data analysis tool for financial markets that processes large datasets to provide insights and visualizations. Features include trend analysis, anomaly detection, and predictive analytics.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "Pandas", "Plotly", "SQL", "Flask"],
        githubUrl: "https://github.com/yourusername/data-project1",
        liveUrl: "https://data-project1-demo.example.com"
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Analyzed customer data to identify distinct customer segments using clustering algorithms. Created interactive visualizations to help marketing teams target specific customer groups.",
        image: "/placeholder-project.jpg",
        tags: ["R", "K-means", "Tableau", "Statistical Analysis", "Marketing"],
        githubUrl: "https://github.com/yourusername/data-project2",
        liveUrl: "https://data-project2-demo.example.com"
      },
      {
        title: "COVID-19 Data Visualization",
        description: "Developed an interactive dashboard to track and visualize COVID-19 statistics worldwide. Integrated multiple data sources and provided trend analysis and forecasting capabilities.",
        image: "/placeholder-project.jpg",
        tags: ["D3.js", "JavaScript", "Python", "Data Visualization", "API Integration"],
        githubUrl: "https://github.com/yourusername/data-project3",
        liveUrl: "https://data-project3-demo.example.com"
      }
    ]
  }
};

// Project card component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full bg-blue-500 flex items-center justify-center">
        <span className="text-white font-medium">Project Screenshot</span>
        {/* Uncomment below and add your project image
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{objectFit: "cover"}}
          className="transition-all duration-300"
        />
        */}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 h-24 overflow-hidden">
          {project.description}
        </p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-md text-xs font-medium text-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiGithub className="mr-1" />
            <span>GitHub</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiExternalLink className="mr-1" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Section component for each category
const ProjectSection = ({ category, data }: { category: string; data: CategoryData }) => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{data.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl">{data.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get all categories for the tabs
  const categories = Object.keys(projectsData);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured <span className="accent-text">Projects</span>
          </h2>
        </motion.div>

        {/* Category tabs - show on smaller screens */}
        <div className="md:hidden mb-10">
          <select 
            value={activeCategory || ""}
            onChange={(e) => setActiveCategory(e.target.value || null)}
            className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {projectsData[category].title}
              </option>
            ))}
          </select>
        </div>

        {/* Category tabs - show on larger screens */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeCategory === null
                  ? "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700"
              } border border-zinc-200 dark:border-zinc-700`}
              onClick={() => setActiveCategory(null)}
            >
              All Projects
            </button>
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  index === categories.length - 1 ? "rounded-r-lg" : ""
                } ${
                  activeCategory === category
                    ? "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700"
                } border-t border-b border-r border-zinc-200 dark:border-zinc-700`}
                onClick={() => setActiveCategory(category)}
              >
                {projectsData[category].title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Display all categories or just the active one */}
        {activeCategory === null ? (
          categories.map((category) => (
            <ProjectSection key={category} category={category} data={projectsData[category]} />
          ))
        ) : (
          <ProjectSection category={activeCategory} data={projectsData[activeCategory]} />
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            <FiGithub className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;