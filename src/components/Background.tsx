"use client";

import { motion } from "framer-motion";

const Background = () => {
  return (
    <section id="background" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Academic <span className="accent-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="text-2xl text-blue-500 dark:text-blue-400 mr-3">🎓</div>
                <h3 className="text-2xl font-bold accent-text">Education</h3>
              </div>
              
              <div className="p-6 border-l-4 border-blue-400 dark:border-blue-600">
                <div className="mb-8">
                  <h4 className="font-bold text-lg">Brown University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">M.S. in Computer Science</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">2022 - 2024</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">Brandeis University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">B.S. in Computer Science & Applied Mathematics</p>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm italic">Magna Cum Laude</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">2019 - 2022</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="text-2xl text-purple-500 dark:text-purple-400 mr-3">🌟</div>
                <h3 className="text-2xl font-bold accent-text">Achievements</h3>
              </div>
              
              <div className="p-6 border-l-4 border-purple-400 dark:border-purple-600">
                <div className="mb-8">
                  <h4 className="font-bold text-lg">Perfect Academic Record</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="text-zinc-600 dark:text-zinc-300">Brown University: GPA 4.0/4.0</li>
                    <li className="text-zinc-600 dark:text-zinc-300">Brandeis University: GPA 3.789/4.0</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">Languages</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">English, Mandarin (Simplified Chinese)</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Teaching Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="text-2xl text-amber-500 dark:text-amber-400 mr-3">👨‍🏫</div>
                <h3 className="text-2xl font-bold accent-text">Teaching Experience</h3>
              </div>
              
              <div className="p-6 border-l-4 border-amber-400 dark:border-amber-600">
                <div className="mb-8">
                  <h4 className="font-bold text-lg">Brown University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Sep. 2023 - May 2024</p>
                  <ul className="mt-3 space-y-2">
                    <li className="text-zinc-600 dark:text-zinc-300 flex items-center">
                      <span className="mr-2 text-xs px-2 py-0.5 border border-amber-400 text-amber-600 dark:text-amber-400 rounded-full">TA</span>
                      CSCI 2660: Computer Systems Security 
                    </li>
                    <li className="text-zinc-600 dark:text-zinc-300 flex items-center">
                      <span className="mr-2 text-xs px-2 py-0.5 border border-amber-400 text-amber-600 dark:text-amber-400 rounded-full">TA</span>
                      DATA 1030: Hands-on Data Science 
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">Brandeis University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Sep. 2021 - May 2022</p>
                  <ul className="mt-3 space-y-2">
                    <li className="text-zinc-600 dark:text-zinc-300 flex items-center">
                      <span className="mr-2 text-xs px-2 py-0.5 border border-amber-400 text-amber-600 dark:text-amber-400 rounded-full">TA</span>
                      COSI 131a: Operating Systems 
                    </li>
                    <li className="text-zinc-600 dark:text-zinc-300 flex items-center">
                      <span className="mr-2 text-xs px-2 py-0.5 border border-amber-400 text-amber-600 dark:text-amber-400 rounded-full">TA</span>
                      COSI 153a: Mobile Application Development 
                    </li>
                    <li className="text-zinc-600 dark:text-zinc-300 flex items-center">
                      <span className="mr-2 text-xs px-2 py-0.5 border border-blue-400 text-blue-600 dark:text-blue-400 rounded-full">Grader</span>
                      MATH 10a: Calculus 
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Research Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="text-2xl text-green-500 dark:text-green-400 mr-3">🔬</div>
                <h3 className="text-2xl font-bold accent-text">Research</h3>
              </div>
              
              <div className="p-6 border-l-4 border-green-400 dark:border-green-600">
                <div>
                  <h4 className="font-bold text-lg">Computer Vision Research Group</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">Brandeis University</p>
                  <p className="text-zinc-600 dark:text-zinc-300 mt-2">Image and Sound Transformation with Semantics</p>
                  {/* <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">2021 - 2022</p> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background; 