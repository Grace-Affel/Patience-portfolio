import React from "react";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BA Political Science and French",
    institution: "University of Ghana, Legon",
    date: "09/2020",
  },
  {
    degree: "Digital Marketing",
    institution: "GIZ in collaboration with Man and Robot",
    date: "04/2022",
  },
  {
    degree: "Web Development",
    institution:
      "Generation Ghana in collaboration with MEST Africa and Mastercard Foundation",
    date: "Enrolled (05/2025)",
  },
];

const certificationsData = [
  {
    title: "SPSS",
    institution: "DAL Consultancy",
    date: "2019",
  },
  {
    title: "Digital Marketing",
    institution: "GIZ in collaboration with Man and Robot",
    date: "2022",
  },
];

const Education = () => {
  return (
    <section className="bg-[#f9f9fb] text-[#42495D] py-16 px-6 md:px-20" id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>

      {/* EDUCATION TIMELINE */}
      <div className="relative border-l-4 border-[#6E8BC2] pl-6 space-y-10">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute -left-[22px] top-6 bg-[#6E8BC2] w-4 h-4 rounded-full border-2 border-white" />
            <div className="flex items-start gap-4">
              <GraduationCap className="text-[#6E8BC2] mt-1" size={22} />
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-sm mt-1 text-gray-600">{item.institution}</p>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-12 text-center">Certifications</h2>

      <div className="relative border-l-4 border-[#6E8BC2] pl-6 space-y-10">
        {certificationsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute -left-[22px] top-6 bg-[#6E8BC2] w-4 h-4 rounded-full border-2 border-white" />
            <div className="flex items-start gap-4">
              <BadgeCheck className="text-[#6E8BC2] mt-1" size={22} />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm mt-1 text-gray-600">{item.institution}</p>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
