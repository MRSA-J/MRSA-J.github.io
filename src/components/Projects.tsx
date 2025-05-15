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
  appStoreUrl?: string;
  productUrl?: string;
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
        title: "AMA Autopilot",
        description: "An intelligent automation platform that streamlines workflow processes using AI technology. Features include task management, data synchronization, and integrations with popular productivity tools.",
        image: "/projects/sde/AMA Autocopilot.png",
        tags: ["React", "Node.js", "WebSockets", "FastAPI", "AI", "Automation"],
        githubUrl: "",
        liveUrl: "#",
        id: "ama-autopilot"
      },
      {
        title: "AMA Interview",
        description: "An AI-powered interview preparation platform that helps users ace interviews with expert AI feedback. Features include 5000+ real interview questions, AI mock interviews, and personalized feedback.",
        image: "/projects/sde/AMA Interview.png",
        tags: ["React", "WebSockets", "Supabase", "AI"],
        githubUrl: "",
        liveUrl: "https://www.amainterview.ai/",
        productUrl: "https://www.amainterview.ai/product",
        id: "ama-interview"
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
        title: "GreenPlatter",
        description: "An AI-powered meal planning platform designed specifically for diabetic patients to manage nutrition and improve health outcomes.",
        image: "/projects/sde/GreenPlatter/icon.jpeg",
        tags: ["React", "Node.js", "PostgreSQL", "Next.js", "Tailwind CSS", "AI", "Healthcare", "Mobile"],
        githubUrl: "",
        liveUrl: "https://greenplatter.net/",
        appStoreUrl: "https://apps.apple.com/ca/app/greenplatter/id6737013848",
        id: "greenplatter"
      },
      {
        title: "Wayfare Weave",
        description: "A map-based dining planning platform that enables users to explore and share their favorite restaurants and culinary experiences, featuring restaurant nodes, theme planning, and calendar scheduling.",
        image: "/projects/sde/Wayfare Wave.png",
        tags: ["TypeScript", "React", "Node.js", "MongoDB", "Google Maps API"],
        githubUrl: "https://github.com/MRSA-J/Wayfare-Weave",
        liveUrl: "https://wayfare-weave.vercel.app/",
        id: "wayfare-weave"
      },
      {
        title: "Foodie",
        description: "A mobile application for food lovers to discover, review, and share their dining experiences. Features include restaurant search, personalized recommendations, and social sharing capabilities.",
        image: "/projects/sde/Foodie.png",
        tags: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
        githubUrl: "https://github.com/MRSA-J/Foodie-MobileAppVersion",
        liveUrl: "",
        id: "foodie"
      }
    ]
  },
  "machine-learning": {
    title: "Machine Learning/Deep Learning",
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
        image: "/projects/mldl/GestureNauts.png",
        tags: ["Python", "MediaPipe", "TensorFlow", "Computer Vision", "Machine Learning"],
        githubUrl: "https://github.com/MRSA-J/Gesture-Nauts",
        liveUrl: "",
        id: "gesture-nauts"
      },
      {
        title: "ChatBot RAG",
        description: "A full-stack chatbot web application that integrates GPT API and RAG (Retrieval Augmented Generation) technology for enhanced conversational experiences.",
        image: "/projects/mldl/RAG.png",
        tags: ["TypeScript", "Next.js", "Node.js", "GPT-3.5", "RAG", "LlamaIndex", "Full-Stack"],
        githubUrl: "https://github.com/MRSA-J/ChatBot",
        liveUrl: "",
        id: "chatbot-rag"
      },
      {
        title: "SmartPicks Recommendation System",
        description: "A collaborative filtering recommendation system built with matrix factorization and neural networks that delivers personalized product suggestions with high precision and low latency.",
        image: "/projects/mldl/Smart-Picks.png",
        tags: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Docker", "Scikit-learn"],
        githubUrl: "",
        liveUrl: "",
        id: "recommendation-system"
      },
      {
        title: "Harry Potter Named Entity Recognition",
        description: "A custom NER system designed to extract and classify entity mentions in Harry Potter novels, using CRF models with extensive annotation and parameter fine-tuning.",
        image: "/projects/mldl/Harry Potter Named Entity Recognition.webp",
        tags: ["Python", "NLP", "CRF", "Named Entity Recognition", "Machine Learning", "Data Annotation"],
        githubUrl: "https://github.com/ChamiLamelas/COSI217B_Final_Project",
        liveUrl: "",
        id: "harry-potter-ner"
      },
      {
        title: "Stock Market Prediction System",
        description: "An end-to-end stock price forecasting system that scrapes historical market data, processes time series information, and applies deep learning models to predict future stock movements.",
        image: "/projects/mldl/Stock-Price-Prediction.png",
        tags: ["Python", "TensorFlow", "LSTM", "Time Series Analysis", "Web Scraping", "Data Visualization", "Finance"],
        githubUrl: "",
        liveUrl: "",
        id: "stock-prediction"
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
        image: "/projects/data/TwitterSentimentAnalyst.png",
        tags: ["Python", "NLP", "Machine Learning", "Hypothesis Testing", "Sentiment Analysis"],
        githubUrl: "https://github.com/MRSA-J/Twitter-World-Economy-Sentiment-Analysis",
        liveUrl: "",
        id: "twitter-sentiment"
      },
      {
        title: "Design Portfolio & Visualization",
        description: "A comprehensive collection of UI/UX design projects and data visualizations featuring iterative design processes from low-fidelity to high-fidelity prototypes, A/B testing, and data-driven storytelling.",
        image: "/projects/data/Design Portfolio.jpg",
        tags: ["Figma", "Adobe XD", "D3.js", "Tableau", "UI/UX", "A/B Testing", "Data Visualization", "Iterative Design"],
        githubUrl: "https://github.com/happydoggie666/portfolio/tree/main",
        liveUrl: "https://chenwei-design.vercel.app",
        id: "design-portfolio"
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
          {project.liveUrl && project.id === "greenplatter" && (
            <a
              href={project.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
          {project.id === "ama-interview" && project.productUrl && (
            <a
              href={project.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="mr-1" />
              <span>Product</span>
            </a>
          )}
          {project.id === "greenplatter" && project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.619.25-1.118.381-1.497.393-.578.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"/>
              </svg>
              <span>App Store</span>
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
                {category === "machine-learning" ? "ML/DL" : projectsData[category].title.split(" ")[0]}
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