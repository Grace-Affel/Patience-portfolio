import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'BTL Territories – Remote',
    date: 'Jun 2025 – Present',
    summary: 'Collaborating in a team to build user-friendly interfaces, fix bugs, and implement real-time features using React.',
  },
  {
    title: 'Trainee Frontend Developer',
    company: 'Web Dev Short Course – Remote',
    date: 'May 2025 – Present',
    summary: 'Learning and applying modern web technologies (HTML, CSS, JS, React) through real projects and mentorship.',
  },
  {
    title: 'Digital Marketer (Freelance)',
    company: 'Remote',
    date: '2022 – Present',
    summary: 'Managing social media, creating visuals with Canva, editing videos, and running digital campaigns for small brands.',
  },
  {
    title: 'Marketer & Graphic Designer',
    company: 'LesniceRutherford – UK',
    date: 'Aug 2024 – Jan 2025',
    summary: 'Handled branding, designed flyers, scheduled posts, and increased social engagement by 118%.',
  },
  {
    title: 'Sales Personnel',
    company: 'LesniceRutherford – UK',
    date: 'Jan 2024 – Aug 2024',
    summary: 'Sourced clients through platforms like Bark, and managed service requests and company profiles.',
  },
  {
    title: 'Article Writer',
    company: 'Streamline Africa – Remote',
    date: '2022',
    summary: 'Wrote articles on public figures and collaborated with editors to meet publication standards.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Experience = () => {
  return (
    <section
      className="px-6 py-16 bg-gradient-to-b from-[#f0f4ff] to-[#e8f0fb] text-[#42495D]"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-[#6E8BC2] to-[#42495D] text-transparent bg-clip-text">
          Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 transition-transform transform hover:scale-[1.015] hover:shadow-xl duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={cardVariants}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">{exp.date}</span>
              </div>
              <p className="text-sm text-[#6E8BC2] font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-700">{exp.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
