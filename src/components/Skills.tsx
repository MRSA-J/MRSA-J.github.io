"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTerminal, FiLayers, FiCloud, FiTool } from "react-icons/fi";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FiCode />,
    skills: [
      { name: "JavaScript/TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 70 },
      { name: "SQL", proficiency: 80 },
      { name: "C/C++", proficiency: 65 },
    ]
  },
  {
    category: "Data Science & ML",
    icon: <FiDatabase />,
    skills: [
      { name: "TensorFlow/PyTorch", proficiency: 85 },
      { name: "Scikit-learn", proficiency: 90 },
      { name: "Pandas/NumPy", proficiency: 95 },
      { name: "Data Visualization", proficiency: 80 },
      { name: "Statistical Analysis", proficiency: 75 },
    ]
  },
  {
    category: "Web Development",
    icon: <FiLayers />,
    skills: [
      { name: "React/Next.js", proficiency: 95 },
      { name: "Node.js/Express", proficiency: 85 },
      { name: "HTML/CSS/Tailwind", proficiency: 90 },
      { name: "RESTful APIs", proficiency: 85 },
      { name: "GraphQL", proficiency: 75 },
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: <FiCloud />,
    skills: [
      { name: "AWS/Azure/GCP", proficiency: 80 },
      { name: "Docker/Kubernetes", proficiency: 75 },
      { name: "CI/CD Pipelines", proficiency: 85 },
      { name: "Infrastructure as Code", proficiency: 70 },
      { name: "Monitoring & Logging", proficiency: 75 },
    ]
  },
  {
    category: "Tools & Frameworks",
    icon: <FiTool />,
    skills: [
      { name: "Git/GitHub", proficiency: 95 },
      { name: "Jira/Confluence", proficiency: 85 },
      { name: "MongoDB/PostgreSQL", proficiency: 80 },
      { name: "Redux/Context API", proficiency: 90 },
      { name: "Jest/React Testing Library", proficiency: 85 },
    ]
  },
  {
    category: "Other Skills",
    icon: <FiTerminal />,
    skills: [
      { name: "Agile/Scrum", proficiency: 90 },
      { name: "Technical Writing", proficiency: 85 },
      { name: "Problem Solving", proficiency: 95 },
      { name: "Team Leadership", proficiency: 80 },
      { name: "Project Management", proficiency: 85 },
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
          className="h-full bg-blue-500"
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