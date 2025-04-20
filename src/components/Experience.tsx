"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: [
      "Led development of a microservices architecture that improved system scalability by 40%",
      "Implemented CI/CD pipelines that reduced deployment time by 60%",
      "Mentored junior developers and conducted code reviews to ensure best practices",
      "Designed and implemented RESTful APIs serving over 1M requests daily"
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Solutions Ltd.",
    period: "2020 - 2022",
    description: [
      "Developed NLP models for sentiment analysis with 92% accuracy",
      "Built and deployed recommendation systems that increased user engagement by 25%",
      "Created data pipelines for processing and analyzing large datasets",
      "Collaborated with product teams to integrate ML models into production applications"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL"]
  },
  {
    title: "Data Analyst",
    company: "Data Insights Co.",
    period: "2018 - 2020",
    description: [
      "Analyzed customer behavior data to identify trends and opportunities",
      "Created interactive dashboards using Tableau for executive reporting",
      "Performed A/B testing to optimize user experience and conversion rates",
      "Developed ETL processes for data integration from multiple sources"
    ],
    skills: ["SQL", "Python", "Tableau", "Excel", "R"]
  }
];

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
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <FiBriefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                    {exp.company}
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
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