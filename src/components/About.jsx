import React from 'react';
import { motion } from 'framer-motion';
import { FaEarthAmericas, FaShop } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-[#F4FDF1] via-[#F9FFF7] to-[#E6F4E7] text-zinc-900"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-[#42495D] mb-6">
            What I Do
          </h3>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center gap-4 bg-white p-4 shadow-md rounded-xl hover:scale-[1.02] transition">
              <FaEarthAmericas className="text-[#6E8BC2] text-xl" />
              <span className="font-medium">Beginner Web Development</span>
            </li>
            <li className="flex items-center gap-4 bg-white p-4 shadow-md rounded-xl hover:scale-[1.02] transition">
              <FaShop className="text-[#6E8BC2] text-xl" />
              <span className="font-medium">Digital Marketing (3+ yrs)</span>
            </li>
            <li className="flex items-center gap-4 bg-white p-4 shadow-md rounded-xl hover:scale-[1.02] transition">
              <FaMobileAlt className="text-[#6E8BC2] text-xl" />
              <span className="font-medium">Exploring Mobile Dev</span>
            </li>
          </ul>
        </motion.div>

        {/* Bio + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-[#42495D] mb-6">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-800">
            I’m a passionate beginner in web development with a background in digital marketing.
            Over the past three years, I’ve gained hands-on experience running campaigns, managing content, and building online engagement. 
            Now, I’m diving into the world of frontend development — building clean, responsive websites and sharpening my skills every day through practice and collaboration.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center bg-white py-6 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-3xl font-extrabold text-[#6E8BC2]">3+</p>
              <p className="text-sm mt-1 text-gray-600">Years in Marketing</p>
            </div>
            <div className="text-center bg-white py-6 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-3xl font-extrabold text-[#6E8BC2]">1</p>
              <p className="text-sm mt-1 text-gray-600">Year in Web Dev</p>
            </div>
            <div className="text-center bg-white py-6 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-3xl font-extrabold text-[#6E8BC2]">Always</p>
              <p className="text-sm mt-1 text-gray-600">Ready to Learn</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
