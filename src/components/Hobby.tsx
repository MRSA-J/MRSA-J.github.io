"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiTrendingUp, FiActivity, FiCamera, FiMusic, FiCpu } from "react-icons/fi";

// 定义爱好数据
const hobbiesData = [
  {
    icon: <FiMessageSquare className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Debating",
    description: "Fell in love with British Parliamentary Debating since high school. Proud achievements include Novice Best Speaker in Suzhou International Debate Open and Octo-finalist in Shanghai International Debate Open."
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Rock Climbing",
    description: "Discovered my passion for rock climbing in 2023 after climbing with friends. Central Rock Gym has become my favorite place to challenge myself and improve my skills."
  },
  {
    icon: <FiActivity className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Badminton",
    description: "Played on the Badminton Varsity team at my previous university. Proud to have won runner-up in a female school-level badminton competition."
  },
  {
    icon: <FiCpu className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Arduino Projects",
    description: "Love building cool things on Arduino with my friends. It's been an interesting journey, thanks to the tutoring and materials provided by Verimake Lab."
  },
  {
    icon: <FiMusic className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Music",
    description: "Enjoy all kinds of music that gets me moving. As they say, let's all \"moves like jagger\"!"
  },
  {
    icon: <FiCamera className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Photography",
    description: "Capturing moments through photography allows me to see the world from different angles. I particularly enjoy landscape and street photography."
  }
];

const Hobby = () => {
  return (
    <section id="hobby" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My <span className="accent-text">Hobbies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold">{hobby.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Beyond coding and technology, I believe in maintaining a balanced life through various interests and activities. 
            These hobbies help me stay creative, refreshed, and bring new perspectives to my professional work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobby; 