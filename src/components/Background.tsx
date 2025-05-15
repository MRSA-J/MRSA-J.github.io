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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold ml-4 accent-text">Education</h3>
              </div>
              <div className="pl-14 border-l-2 border-blue-300 dark:border-blue-700 py-2">
                <div className="relative mb-8">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-blue-400 dark:bg-blue-600"></div>
                  <h4 className="font-bold text-lg">Brown University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">M.S. in Computer Science</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">2022 - 2024</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-blue-400 dark:bg-blue-600"></div>
                  <h4 className="font-bold text-lg">Brandeis University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">B.S. in Computer Science & Applied Mathematics</p>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm italic">Magna Cum Laude</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">2019 - 2022</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-xl">
                  🔬
                </div>
                <h3 className="text-2xl font-bold ml-4 accent-text">Research</h3>
              </div>
              <div className="pl-14 border-l-2 border-green-300 dark:border-green-700 py-2">
                <div className="relative">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-green-400 dark:bg-green-600"></div>
                  <h4 className="font-bold text-lg">Computer Vision Research Group</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">Brandeis University</p>
                  <p className="text-zinc-600 dark:text-zinc-300 mt-2">Image and Sound Transformation</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">2021 - 2022</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center divider for visual separation */}
          <div className="hidden md:block md:col-span-2">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent mx-auto"></div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white text-xl">
                  👨‍🏫
                </div>
                <h3 className="text-2xl font-bold ml-4 accent-text">Teaching Experience</h3>
              </div>
              <div className="pl-14 border-l-2 border-amber-300 dark:border-amber-700 py-2">
                <div className="relative mb-8">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-amber-400 dark:bg-amber-600"></div>
                  <h4 className="font-bold text-lg">Brown University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Sep. 2023 - May 2024</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-zinc-600 dark:text-zinc-300">• CSCI 2660: Computer Systems Security</li>
                    <li className="text-zinc-600 dark:text-zinc-300">• DATA 1030: Hands-on Data Science</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-amber-400 dark:bg-amber-600"></div>
                  <h4 className="font-bold text-lg">Brandeis University</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Sep. 2021 - May 2022</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-zinc-600 dark:text-zinc-300">• COSI 131a: Operating Systems</li>
                    <li className="text-zinc-600 dark:text-zinc-300">• COSI 153a: Mobile Application Development</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xl">
                  🌟
                </div>
                <h3 className="text-2xl font-bold ml-4 accent-text">Achievements</h3>
              </div>
              <div className="pl-14 border-l-2 border-purple-300 dark:border-purple-700 py-2">
                <div className="relative mb-6">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-purple-400 dark:bg-purple-600"></div>
                  <h4 className="font-bold text-lg">Perfect Academic Record</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">4.0 GPA</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-purple-400 dark:bg-purple-600"></div>
                  <h4 className="font-bold text-lg">Languages</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">English, Mandarin (Simplified Chinese)</p>
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