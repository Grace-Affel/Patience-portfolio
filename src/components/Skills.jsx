import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#f0f4ff] via-[#e9ecf5] to-[#f4f6fa] py-20 px-8"
    >
      <motion.h2
        className="text-4xl mb-8 font-bold text-[#42495D] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-[#42495D] mb-10 max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        As a beginner frontend developer with 3 years of digital marketing experience, I’m building a solid foundation in modern web technologies and marketing strategies. Here are the core tools I’m using:
      </motion.p>

      <motion.ul
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Tailwind CSS',
          'Git',
          'GitHub',
        ].map((skill, i) => (
          <motion.li
            key={skill}
            className="px-5 py-2 rounded-lg text-[#42495D] bg-white border border-[#6E8BC2] font-medium shadow-sm hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#6E8BC2] hover:to-[#42495D] hover:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
