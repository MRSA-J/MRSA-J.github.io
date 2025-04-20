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
            className="relative h-80 w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
          >
            {/* Replace with your actual image */}
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl font-medium">
              Your Photo Here
            </div>
            {/* Uncomment below and add your photo
            <Image
              src="/profile-image.jpg"
              alt="Profile"
              fill
              style={{objectFit: "cover"}}
              className="transition-all duration-300 hover:scale-105"
            />
            */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              I'm a passionate [Software Developer / Machine Learning Engineer / Data Analyst] with [X] years of experience building innovative solutions. I specialize in [your specific expertise areas] and enjoy solving complex problems with elegant solutions.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              My background in [your educational/professional background] has equipped me with the skills to [specific abilities relevant to your field]. I'm constantly learning and adapting to new technologies to stay at the forefront of the industry.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              When I'm not coding, you can find me [your hobbies/interests] or exploring [something you're passionate about outside of work].
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-zinc-600 dark:text-zinc-300">Your City, Country</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-zinc-600 dark:text-zinc-300">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <p className="text-zinc-600 dark:text-zinc-300">Your University/Degree</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Languages</h4>
                <p className="text-zinc-600 dark:text-zinc-300">English, [Other Languages]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 