"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTerminal, FiLayers, FiCloud, FiTool } from "react-icons/fi";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FiCode />,
    skills: [
      { name: "JavaScript/TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 95 },
      { name: "Java", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "C/C++", proficiency: 75 },
    ]
  },
  {
    category: "AI & ML",
    icon: <FiDatabase />,
    skills: [
      { name: "PyTorch/TensorFlow", proficiency: 85 },
      { name: "NLP & Deep Learning", proficiency: 85 },
      { name: "LLMs & RAG", proficiency: 90 },
      { name: "Computer Vision", proficiency: 80 },
      { name: "NumPy/Scikit-learn", proficiency: 90 },
    ]
  },
  {
    category: "Web Development",
    icon: <FiLayers />,
    skills: [
      { name: "React/Next.js", proficiency: 95 },
      { name: "Node.js/Express", proficiency: 90 },
      { name: "REST API/GraphQL", proficiency: 85 },
      { name: "MongoDB/PostgreSQL", proficiency: 85 },
      { name: "HTML/CSS/Tailwind", proficiency: 90 },
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: <FiCloud />,
    skills: [
      { name: "AWS", proficiency: 80 },
      { name: "Docker", proficiency: 85 },
      { name: "Nginx", proficiency: 75 },
      { name: "Redis/HBase", proficiency: 80 },
      { name: "CI/CD Pipelines", proficiency: 75 },
    ]
  },
  {
    category: "Frameworks & Tools",
    icon: <FiTool />,
    skills: [
      { name: "Git/GitHub", proficiency: 95 },
      { name: "Spring/SpringBoot", proficiency: 80 },
      { name: "WebSockets", proficiency: 90 },
      { name: "FastAPI", proficiency: 85 },
      { name: "React Native", proficiency: 85 },
    ]
  },
  {
    category: "Other Skills",
    icon: <FiTerminal />,
    skills: [
      { name: "Shell/Linux", proficiency: 85 },
      { name: "Technical Writing", proficiency: 80 },
      { name: "Data Visualization", proficiency: 85 },
      { name: "Problem Solving", proficiency: 95 },
      { name: "R/MATLAB", proficiency: 75 },
    ]
  }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-zinc-700 dark:text-zinc-300 font-medium">{name}</span>
        <span className="text-zinc-500 dark:text-zinc-400 text-sm">{proficiency}%</span>
      </div>
      <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-300 dark:bg-blue-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Technical <span className="accent-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-500 dark:text-blue-400 text-xl">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 