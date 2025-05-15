"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Define types for our project data structure
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  id: string;
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
  "software-development": {
    title: "Software Development",
    description: "Web and mobile applications built with modern frameworks and technologies",
    projects: [
      {
        title: "AMA Interview",
        description: "An AI-powered interview preparation platform that helps users ace interviews with expert AI feedback. Features include 5000+ real interview questions, AI mock interviews, and personalized feedback.",
        image: "/projects/sde/AMA Interview.png",
        tags: ["React", "FastAPI", "WebSockets", "Supabase", "AI"],
        githubUrl: "",
        liveUrl: "https://www.amainterview.ai/",
        id: "ama-interview"
      },
      {
        title: "AMA Autopilot",
        description: "An intelligent automation platform that streamlines workflow processes using AI technology. Features include task management, data synchronization, and integrations with popular productivity tools.",
        image: "/projects/sde/AMA Autocopilot.png",
        tags: ["React", "Node.js", "WebSockets", "AI", "Automation"],
        githubUrl: "",
        liveUrl: "#",
        id: "ama-autopilot"
      },
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, payment processing, and order management. Built with React, Node.js, and MongoDB.",
        image: "/projects/sde/E-commerce.png",
        tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
        githubUrl: "",
        liveUrl: "https://dev-project1-demo.example.com",
        id: "dev-project1"
      },
      {
        title: "Wayfare Weave",
        description: "A map-based dining planning platform that enables users to explore and share their favorite restaurants and culinary experiences, featuring restaurant nodes, theme planning, and calendar scheduling.",
        image: "/placeholder-project.jpg",
        tags: ["TypeScript", "React", "Node.js", "MongoDB", "Google Maps API"],
        githubUrl: "https://github.com/MRSA-J/Wayfare-Weave",
        liveUrl: "https://wayfare-weave.vercel.app/",
        id: "wayfare-weave"
      },
      {
        title: "GreenPlatter",
        description: "A sustainability-focused food platform that helps users make environmentally conscious dining choices. Features recipe suggestions, restaurant sustainability ratings, and carbon footprint tracking.",
        image: "/placeholder-project.jpg",
        tags: ["React", "Node.js", "PostgreSQL", "Next.js", "Tailwind CSS"],
        githubUrl: "",
        liveUrl: "https://greenplatter.net/",
        id: "greenplatter"
      },
      {
        title: "Foodie",
        description: "A mobile application for food lovers to discover, review, and share their dining experiences. Features include restaurant search, personalized recommendations, and social sharing capabilities.",
        image: "/placeholder-project.jpg",
        tags: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
        githubUrl: "https://github.com/MRSA-J/Foodie-MobileAppVersion",
        liveUrl: "",
        id: "foodie"
      }
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Projects that leverage ML/DL technologies to solve complex problems",
    projects: [
      {
        title: "YouTube Teller",
        description: "A video storytelling model that automatically generates descriptive captions for YouTube videos. Built using deep learning techniques to analyze video frames and produce coherent natural language descriptions.",
        image: "/projects/mldl/Youtube-Teller.jpeg",
        tags: ["Python", "PyTorch", "Computer Vision", "NLP", "CLIP", "Transformer"],
        githubUrl: "https://github.com/MRSA-J/Youtube-Teller",
        liveUrl: "https://devpost.com/software/video-storytelling",
        id: "youtube-teller"
      },
      {
        title: "Gesture-Nauts",
        description: "A 3D gesture recognition system that provides corresponding animations upon recognition. Implements hand gesture detection using MediaPipe and deep learning for real-time interaction.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "MediaPipe", "TensorFlow", "Computer Vision", "Machine Learning"],
        githubUrl: "https://github.com/MRSA-J/Gesture-Nauts",
        liveUrl: "",
        id: "gesture-nauts"
      },
      {
        title: "Image Classification System",
        description: "An advanced image classification system using deep learning models to categorize images with high accuracy. Implemented with PyTorch and deployed on AWS Lambda for serverless inference.",
        image: "/placeholder-project.jpg",
        tags: ["PyTorch", "AWS Lambda", "Computer Vision", "TensorFlow", "CNN"],
        githubUrl: "https://github.com/yourusername/ml-project1",
        liveUrl: "https://ml-project1-demo.example.com",
        id: "ml-project1"
      },
      {
        title: "Natural Language Processing API",
        description: "An API for processing and analyzing natural language data with capabilities for sentiment analysis, entity recognition, and language translation using state-of-the-art NLP models.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "BERT", "Hugging Face", "FastAPI", "Docker"],
        githubUrl: "https://github.com/yourusername/ml-project2",
        liveUrl: "https://ml-project2-demo.example.com",
        id: "ml-project2"
      },
      {
        title: "Time Series Forecasting Model",
        description: "Developed advanced time series forecasting models for predicting financial markets and demand forecasting using LSTM networks and transformer architectures.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "Keras", "LSTM", "Time Series", "Forecasting"],
        githubUrl: "https://github.com/yourusername/ml-project3",
        liveUrl: "https://ml-project3-demo.example.com",
        id: "ml-project3"
      }
    ]
  },
  "data-analysis": {
    title: "Data Analysis & Visualization",
    description: "Projects focused on extracting insights from data through analysis and visualization",
    projects: [
      {
        title: "Twitter World Economy Sentiment Analysis",
        description: "Analyzed Twitter sentiment towards world economy and financial institutions during banking collapses, using machine learning and statistical hypothesis testing to understand public perception.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "NLP", "Machine Learning", "Hypothesis Testing", "Sentiment Analysis"],
        githubUrl: "https://github.com/MRSA-J/Twitter-World-Economy-Sentiment-Analysis",
        liveUrl: "",
        id: "twitter-sentiment"
      },
      {
        title: "Financial Market Dashboard",
        description: "A data analysis tool for financial markets that processes large datasets to provide insights and visualizations. Features include trend analysis, anomaly detection, and predictive analytics.",
        image: "/placeholder-project.jpg",
        tags: ["Python", "Pandas", "Plotly", "SQL", "Flask"],
        githubUrl: "https://github.com/yourusername/data-project1",
        liveUrl: "https://data-project1-demo.example.com",
        id: "data-project1"
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Analyzed customer data to identify distinct customer segments using clustering algorithms. Created interactive visualizations to help marketing teams target specific customer groups.",
        image: "/placeholder-project.jpg",
        tags: ["R", "K-means", "Tableau", "Statistical Analysis", "Marketing"],
        githubUrl: "https://github.com/yourusername/data-project2",
        liveUrl: "https://data-project2-demo.example.com",
        id: "data-project2"
      },
      {
        title: "COVID-19 Data Visualization",
        description: "Developed an interactive dashboard to track and visualize COVID-19 statistics worldwide. Integrated multiple data sources and provided trend analysis and forecasting capabilities.",
        image: "/placeholder-project.jpg",
        tags: ["D3.js", "JavaScript", "Python", "Data Visualization", "API Integration"],
        githubUrl: "https://github.com/yourusername/data-project3",
        liveUrl: "https://data-project3-demo.example.com",
        id: "data-project3"
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
      className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md"
    >
      <Link href={`/projects/${project.id}`} className="block">
        {/* Project Image */}
        <div className="relative h-48 w-full bg-blue-500 flex items-center justify-center">
          {project.image.includes('placeholder') ? (
            <span className="text-white font-medium">Project Screenshot</span>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{
                objectFit: "cover",
                objectPosition: project.id === "ama-autopilot" ? "center 40%" : "center"
              }}
              className="transition-all duration-300"
            />
          )}
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
        </div>
      </Link>

      {/* Project Links */}
      <div className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-700">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="mr-1" />
              <span>GitHub</span>
            </a>
          )}
          {project.id === "youtube-teller" && (
            <a
              href="https://devpost.com/software/video-storytelling"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 16.526h-1.58V5.864h1.58v12.272zm4.006-5.523L9.43 11.108h2.79l2.172 1.505-2.172 1.504H9.43l2.172-1.504zm3.798 5.523h-1.581V5.864h1.581v12.272z"/>
              </svg>
              <span>DevPost</span>
            </a>
          )}
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
            href="https://github.com/mrsa-j"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 mx-auto w-fit focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;