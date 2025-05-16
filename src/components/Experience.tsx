"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiExternalLink } from "react-icons/fi";
import React from "react";

const experienceData = [
  {
    title: "Full Stack Engineer",
    company: "AMA Career",
    period: "Apr. 2025 - Present",
    url: "https://www.amainterview.ai/",
    products: [
      { name: "AMA Interview", url: "/projects/ama-interview" },
      { name: "AMA Autopilot(Coming Soon)", url: "/projects/ama-autopilot" }
    ],
    description: [
      "Built a responsive customer support chat bot and contact page in React, integrating Resend API for real-time email delivery",
      "Implemented a scalable WebSocket system with a global React frontend provider to manage connections, auto-update message queues, and expose action APIs",
      "Developed a FastAPI backend manager to handle multi-client connect/disconnect/reconnect events with background listeners for long-running tasks",
      "Streamlined data flow by implementing generic (de)serialization and integrating Supabase with automated mock data uploads for real-time storage and testing"
    ],
    skills: ["React", "FastAPI", "WebSockets", "Supabase", "Resend API"]
  },
  {
    title: "Full Stack Engineer",
    company: "Blyss",
    period: "Jan. 2025 - Apr. 2025",
    url: "",
    description: [
      "Redesigned a modular, multi-screen onboarding flow in React Native with integrated state management, mobile/email verification, and custom animations",
      "Built and optimized backend services using Node.js and Express.js, implementing server-side routing, DAOs, and Twilio API-based authentication",
      "Engineered a real-time chat messaging feature from scratch with Node.js/Express.js REST APIs and PostgreSQL, optimizing message storage with indexed queries"
    ],
    skills: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Twilio API"]
  },
  {
    title: "Full Stack Engineer",
    company: "GreenPlatter",
    period: "Jun. 2024 - Mar. 2025",
    url: "https://greenplatter.net/",
    description: [
      "Designed and developed a full-stack LLM-based recipe creation and information management feature with custom frontend components",
      "Migrated recipe data from AWS DynamoDB to PostgreSQL, enabling advanced querying capabilities such as filtering by allergens",
      "Automated code quality enforcement by implementing Git pre-hooks to standardize formatting with ESLint and Prettier",
      "Optimized backend workflows for RESTful API calls, ensuring efficient handling of data requests and adherence to modern API design standards"
    ],
    skills: ["LLM", "AWS DynamoDB", "PostgreSQL", "React", "REST API", "Git"]
  },
  {
    title: "Summer Analyst Intern",
    company: "Goldman Sachs",
    period: "Jun. 2023 - Aug. 2023",
    url: "https://www.goldmansachs.com/",
    description: [
      "Implemented quantitative models using Slang and assessed various types of risks for trading options leveraging SecDB and SQL analytics",
      "Developed model to mitigate risk from daily transactional outflows and performed sensitivity analysis on firm's models",
      "Validated and optimized stress assumptions made by firm's businesses based on different market conditions",
      "Gained experience with financial modeling and risk management in a real-world trading environment"
    ],
    skills: ["SecDB", "SQL", "Slang", "Financial Modeling", "Risk Analysis"]
  },
  {
    title: "Software Engineer Intern",
    company: "China Construction Industrial & Energy Engineering Group Co.",
    period: "Jun. 2020 - Oct. 2020",
    url: "https://inco.cscec.com/en/",
    description: [
      "Designed and implemented a MySQL database system deployed on Alibaba Cloud for managing construction sales data uploaded from WeaverOA",
      "Optimized MySQL queries for read operations by implementing indexing and caching mechanisms for frequently accessed data",
      "Introduced normalization and denormalization to improve query performance and minimize data redundancy",
      "Served a large-scale organization with 2,000+ personnel through effective database management"
    ],
    skills: ["MySQL", "Database Design", "Alibaba Cloud", "Indexing", "Caching"]
  }
];

// 辅助函数：将描述中的技术栈关键词加粗
const boldTechStack = (text: string, skills: string[]) => {
  let result = text;
  
  // 创建一个包含所有技能的数组，按长度降序排序（先替换长词，防止部分匹配）
  const allSkills = [...skills, 
    "React", "React Native", "FastAPI", "WebSockets", "WebSocket", "Supabase", "Resend API",
    "Node.js", "Express.js", "PostgreSQL", "Twilio API", "LLM", "AWS", "DynamoDB",
    "Git", "REST API", "RESTful", "SQL", "SecDB", "Slang", "MySQL", "Alibaba Cloud",
    "ESLint", "Prettier", "API", "REST", "DAOs", "indexing", "caching"
  ].sort((a, b) => b.length - a.length);
  
  // 为每个技能创建一个正则表达式，确保它是一个完整的词
  allSkills.forEach(skill => {
    const regex = new RegExp(`\\b${skill}\\b`, 'g');
    result = result.replace(regex, `<strong>${skill}</strong>`);
  });
  
  return result;
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Work <span className="accent-text">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="block bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group relative"
            >
              
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <FiBriefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    {exp.url ? (
                      <a 
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        {exp.title}
                      </a>
                    ) : (
                      <span className="text-xl font-bold">
                        {exp.title}
                      </span>
                    )}
                    <div className="flex items-center text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {exp.company}
                  </p>

                  {exp.products && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 my-auto">Products:</span>
                      {exp.products.map((product, i) => (
                        <a
                          key={i}
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  )}
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-300">
                    {exp.description.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: boldTechStack(item, exp.skills) }}></li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 