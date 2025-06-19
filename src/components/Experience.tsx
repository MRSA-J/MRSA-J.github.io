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
      "🚀 Developed a real-time job application automation platform using FastAPI, React, and TypeScript, supporting 3 core services: job referral, auto-apply, and interview preparation, improving job submission efficiency by 60% for early users",
      "⚡ Designed and implemented RESTful APIs using FastAPI to handle CRUD operations across user, task, and job data stored in Supabase; optimized performance with pagination, indexing, and response caching, reducing average API latency by 40%",
      "🔧 Architected Supabase integration for real-time data storage of task states, and job updates; optimized read/write throughput with row-level indexing and selective fetching; implemented an event-driven Supabase Edge Function triggered on PostgreSQL insert to decouple onboarding from backend load",
      "💬 Built a scalable WebSocket framework with FastAPI to enable real-time syncing of task states, and profile edits across modules; optimized with connection pooling and auto-reconnect logic, reducing redundant network traffic by 40%",
      "📱 Implemented async batch sending for Twilio SMS to deliver task updates, frontend lazy loading, and (de)serialization layers to streamline cross-module communication, reduce UI rendering latency by 35%, and ensure scalable notification handling"
    ],
    skills: ["FastAPI", "React", "TypeScript", "Supabase", "WebSockets", "Twilio SMS", "PostgreSQL", "REST API"]
  },
  {
    title: "Full Stack Engineer",
    company: "Blyss",
    period: "Jan. 2025 - Apr. 2025",
    url: "",
    description: [
      "📱 Redesigned a modular, multi-screen onboarding flow in React Native with integrated state management, mobile/email verification, and custom animations",
      "💬 Built and optimized backend services using Node.js and Express.js, implementing server-side routing, DAOs, and Twilio API-based authentication",
      "🔐 Engineered a real-time chat messaging feature from scratch with Node.js/Express.js REST APIs and PostgreSQL, optimizing message storage with indexed queries",
      "⚙️ Optimized database query performance through indexing and query caching, reducing API response time by 50%",
      "🎨 Designed responsive UI components supporting dark mode, multi-language, and custom themes to enhance user experience"
    ],
    skills: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Twilio API", "JWT", "Redis"]
  },
  {
    title: "Full Stack Engineer",
    company: "GreenPlatter",
    period: "Jun. 2024 - Mar. 2025",
    url: "https://greenplatter.net/",
    description: [
      "🤖 Developed an LLM-based intelligent recipe generation system, integrating OpenAI API for personalized recipe recommendations and nutritional analysis",
      "🔄 Led data migration project from AWS DynamoDB to PostgreSQL, optimizing query performance and supporting complex allergen filtering capabilities",
      "🔧 Established complete CI/CD pipeline, integrating ESLint, Prettier, and Git hooks to ensure code quality and team collaboration efficiency",
      "📈 Optimized RESTful API architecture, implementing caching strategies and database connection pooling, improving API response time by 40%",
      "🎯 Designed user-friendly recipe management interface, supporting recipe favorites, rating system, and personalized recommendation algorithms"
    ],
    skills: ["LLM", "OpenAI API", "AWS DynamoDB", "PostgreSQL", "React", "REST API", "Git", "CI/CD"]
  },
  {
    title: "Summer Analyst Intern",
    company: "Goldman Sachs",
    period: "Jun. 2023 - Aug. 2023",
    url: "https://www.goldmansachs.com/",
    description: [
      "📊 Developed quantitative risk models using SecDB and Slang, analyzing options trading risks and generating real-time risk reports",
      "🔍 Built sensitivity analysis models to evaluate portfolio risk exposure under different market conditions",
      "⚖️ Validated and optimized company stress test assumptions, providing data support for risk management decisions",
      "💼 Gained hands-on experience in financial modeling and risk management in real trading environment"
    ],
    skills: ["SecDB", "SQL", "Slang", "Financial Modeling", "Risk Analysis", "Quantitative Analysis"]
  },
  {
    title: "Software Engineer Intern",
    company: "China Construction Industrial & Energy Engineering Group Co.",
    period: "Jun. 2020 - Oct. 2020",
    url: "https://inco.cscec.com/en/",
    description: [
      "🏗️ Designed and implemented MySQL-based construction sales data management system deployed on Alibaba Cloud, serving 2000+ employees",
      "⚡ Improved database query performance by 60% through indexing optimization and caching mechanisms, enhancing user experience",
      "📊 Implemented data normalization and denormalization strategies, optimizing query performance and reducing data redundancy",
      "🔗 Integrated WeaverOA system, achieving automatic data synchronization and real-time update functionality"
    ],
    skills: ["MySQL", "Database Design", "Alibaba Cloud", "Indexing", "Caching", "Data Integration"]
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
    "ESLint", "Prettier", "API", "REST", "DAOs", "indexing", "caching",
    "OpenAI API", "Claude API", "NLP", "JWT", "Redis", "CI/CD", "GPT-4",
    "Quantitative Analysis", "Data Integration", "WeaverOA", "SMS", "Email",
    "TypeScript", "Twilio SMS", "Edge Function", "connection pooling", "auto-reconnect",
    "lazy loading", "serialization", "deserialization", "pagination", "response caching",
    "row-level indexing", "selective fetching", "event-driven", "batch sending",
    "UI rendering", "notification handling", "job referral", "auto-apply", "interview preparation"
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