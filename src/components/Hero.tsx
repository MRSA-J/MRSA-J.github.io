"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="accent-text">Your Name</span>
        </h1>
        
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300">
          Software Engineer • Machine Learning Engineer • Data Analyst
        </h2>
        
        <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          I build exceptional digital experiences with cutting-edge technology. Specializing in 
          full-stack development, machine learning solutions, and data analytics.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact"
            className="px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Contact Me
          </Link>
          <Link 
            href="#projects"
            className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            View Projects
          </Link>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <FiDownload size={20} />
            <span>Resume</span>
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-zinc-600 dark:border-zinc-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-zinc-600 dark:bg-zinc-400 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 