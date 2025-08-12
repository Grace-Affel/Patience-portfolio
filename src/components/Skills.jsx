import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const techSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git',
    'GitHub',
  ];

  const marketingSkills = [
    'Canva',
    'CapCut',
    'Unsplash',
    'Buffer',
    'Ecwid',
    'Google Ads',
    'Google Analytics',
    'MailChimp',
    'Email Marketing',
    'Google Trends',
    'Microsoft Office',
    'SPSS',
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#f0f4ff] via-[#e9ecf5] to-[#f4f6fa] py-20 px-8"
    >
      <motion.h2
        className="text-4xl mb-12 font-bold text-[#42495D] text-center"
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
       Combining frontend development skills with 3 years of digital marketing expertise, I craft effective and elegant solutions using the latest tools.
      </motion.p>

      {/* Tech Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mb-14"
      >
        <h3 className="text-2xl font-semibold text-[#42495D] mb-6 text-center">
          Tech Skills
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {techSkills.map((skill, i) => (
            <li
              key={skill}
              className="px-5 py-2 rounded-lg text-[#42495D] bg-white border border-[#6E8BC2] font-medium shadow-sm hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#6E8BC2] hover:to-[#42495D] hover:text-white cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Marketing & Content Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-[#42495D] mb-6 text-center">
          Marketing & Content
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {marketingSkills.map((skill, i) => (
            <li
              key={skill}
              className="px-5 py-2 rounded-lg text-[#42495D] bg-white border border-[#6E8BC2] font-medium shadow-sm hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#6E8BC2] hover:to-[#42495D] hover:text-white cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
