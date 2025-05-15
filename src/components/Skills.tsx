"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTerminal, FiLayers, FiCloud, FiTool } from "react-icons/fi";

// 重新组织技能数据，按类别和熟练度分组
const skillsData = [
  {
    category: "Programming Languages",
    icon: <FiCode />,
    description: "Core programming languages I use regularly",
    skills: {
      expert: ["Python", "Java", "SQL"],
      advanced: ["JavaScript", "TypeScript"],
      proficient: ["Go", "R", "MATLAB", "C/C++"]
    }
  },
  {
    category: "AI & Machine Learning",
    icon: <FiDatabase />,
    description: "AI and machine learning technologies",
    skills: {
      expert: ["NLP", "Computer Vision", "Deep Learning"],
      advanced: ["Scikit-learn", "Pandas", "TensorFlow"],
      proficient: ["LLMs & RAG", "Data Mining"]
    }
  },
  {
    category: "Full Stack Development",
    icon: <FiLayers />,
    description: "Frontend and backend web technologies",
    skills: {
      expert: ["React", "Next.js", "Node.js", "React Native"],
      advanced: ["REST API", "GraphQL", "HTML/CSS"],
      proficient: ["Tailwind"]
    }
  },
  {
    category: "DevOps & Cloud",
    icon: <FiCloud />,
    description: "Cloud and deployment technologies",
    skills: {
      expert: ["Docker", "Git/GitHub"],
      advanced: ["AWS", "CI/CD", "Nginx"],
      proficient: ["Redis", "HBase", "Kubernetes"]
    }
  },
  {
    category: "Frameworks & Tools",
    icon: <FiTool />,
    description: "Various frameworks and development tools",
    skills: {
      expert: ["FastAPI", "Express", "Cursor", "GenAI"],
      advanced: ["Spark", "BeautifulSoup", "Selenium"],
      proficient: ["WebSockets", "Spring/SpringBoot", "Django", "Vue.js", "Flask"]
    }
  }
];

// 技能标签组件
const SkillTag = ({ skill, level }: { skill: string; level: 'expert' | 'advanced' | 'proficient' }) => {
  // 根据技能级别设置不同的样式
  const colorClasses = {
    expert: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    advanced: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    proficient: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClasses[level]} m-1`}>
      {skill}
    </span>
  );
};

// 技能类别组件
const SkillCategory = ({ data, index }: { data: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
          <span className="text-blue-500 dark:text-blue-400 text-xl">
            {data.icon}
          </span>
        </div>
        <h3 className="text-xl font-bold">{data.category}</h3>
      </div>
      
      <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">{data.description}</p>
      
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Expert</span>
        </div>
        <div className="flex flex-wrap">
          {data.skills.expert.map((skill: string, i: number) => (
            <SkillTag key={i} skill={skill} level="expert" />
          ))}
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Advanced</span>
        </div>
        <div className="flex flex-wrap">
          {data.skills.advanced.map((skill: string, i: number) => (
            <SkillTag key={i} skill={skill} level="advanced" />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Proficient</span>
        </div>
        <div className="flex flex-wrap">
          {data.skills.proficient.map((skill: string, i: number) => (
            <SkillTag key={i} skill={skill} level="proficient" />
          ))}
        </div>
      </div>
    </motion.div>
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
            <SkillCategory key={index} data={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 