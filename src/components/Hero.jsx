import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa6';
import HeroImg from '../assets/heads.png';

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-r from-[#f4f6fa] to-[#e3e9f4] flex items-center px-6 lg:px-20 overflow-hidden pt-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[70%] text-[#42495D] z-10 space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Hi, I’m <span className="text-[#6E8BC2]">Grace</span>
        </h2>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Frontend Developer Crafting <br /> Modern & Elegant Interfaces
        </h1>

        <p className="text-[#42495D]/80 text-lg max-w-xl">
          Passionate about building sleek and responsive websites that not only look great
          but also deliver results. Let’s create something extraordinary together.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:gpatience14@gmail.com"
            className="bg-[#4A6BA9] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
          >
            Let’s Connect
          </a>
          <a
            href="/Patience_Grace_Affel.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#4A6BA9] text-[#4A6BA9] px-6 py-3 rounded-full font-semibold hover:bg-[#4A6BA9] hover:text-white transition"
          >
            View Resume
          </a>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <span className="text-[#42495D]/90">Find me on:</span>
          <a
            href="https://www.linkedin.com/in/patience-affel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6E8BC2]"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/grace_affel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6E8BC2]"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="hover:text-[#6E8BC2]"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </motion.div>

      <div className="hidden lg:flex w-[30%] justify-center items-start h-full ">
        <img
          src={HeroImg}
          alt="Grace Affel"
          className="w-[90%] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
