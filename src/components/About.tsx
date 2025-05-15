"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="accent-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-96 w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/Chen.png"
              alt="Chen Wei"
              fill
              style={{objectFit: "cover"}}
              className="transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              I am Groot! Just kidding, I'm Chen Wei 哈哈哈哈哈. When I'm not pretending to be a Marvel character, I'm a full-stack software engineer and machine learning enthusiast building cool stuff with code.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              Over the years, I've gained hands-on experience across the stack—from engineering scalable REST APIs and real-time WebSocket services to designing intuitive user experiences using React, React Native, and modern state management. I've worked on projects ranging from AI-driven recipe generation systems to hypertext-based dining planners, and even built LLM-powered interfaces with integrated cloud infrastructure.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              I'm especially excited about intelligent systems, human-computer interaction, and scalable backend infrastructure. Whether it's fine-tuning a transformer model or optimizing SQL queries for speed, I enjoy solving challenging problems and turning ideas into polished products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 