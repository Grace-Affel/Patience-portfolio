import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Port from "../assets/Port.png";
import Rest from "../assets/Rest.png";
import Book from "../assets/Book.png";
import Palm from "../assets/Palm.png";
import Final from "../assets/Final.png";
import Utopia from "../assets/Utopia.png";

// Define tech icons per project
const techIcons = {
  "html/css": (
    <>
      <FaHtml5 className="text-orange-500 text-lg" />
      <FaCss3Alt className="text-blue-600 text-lg ml-1" />
    </>
  ),
  "react/tailwind": (
    <>
      <FaReact className="text-sky-500 text-lg" />
      <SiTailwindcss className="text-cyan-500 text-lg ml-1" />
    </>
  ),
};

const projects = [
  {
    title: "Professional Portfolio (HTML/CSS)",
    description:
      "Built with HTML and CSS, this showcases my skills in layout, styling, and content organization.",
    image: Port,
    tech: "html/css",
  },
  {
    title: "Restaurant Website (HTML/CSS)",
    description:
      "A simple restaurant landing page showcasing UI layout and design using pure HTML and CSS.",
    image: Rest,
    tech: "html/css",
  },
  {
    title: "Book Management App (React/Tailwind)",
    description:
      "Group assignment focused on CRUD functionality, component structure, and Tailwind styling.",
    image: Book,
    tech: "react/tailwind",
  },
  {
    title: "E-Commerce Website (React/Tailwind)",
    description:
      "Responsive and dynamic online store interface created with React and Tailwind CSS.",
    image: Palm,
    tech: "react/tailwind",
  },
  {
    title: "Final Project - Farmers App (React/Tailwind)",
    description:
      "An application to help farmers rent equipment, featuring booking modals, user authentication, and more.",
    image: Final,
    tech: "react/tailwind",
  },
  {
    title: "Login Page for Loyalty Program (Internship @ BTL Territories)",
    description:
      "Created during internship, featuring branded UI, form validation, and clean design.",
    image: Utopia,
    tech: "react/tailwind",
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-white py-16 px-6 md:px-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#333333] mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        These projects were built within my two-month Web Development training at{" "}
        <strong>Generation Ghana / MEST</strong>.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#F4F6FA] hover:shadow-lg hover:scale-[1.01] transition-all duration-300 rounded-xl p-4 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-semibold text-[#42495D]">
                {project.title}
              </h3>
              <div className="flex items-center">
                {techIcons[project.tech]}
              </div>
            </div>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Grace-Affel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#6E8BC2] font-medium hover:underline"
        >
          <FaGithub className="text-xl" />
          Explore More Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Project;
