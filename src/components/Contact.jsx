import React from "react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    fetch("https://formspree.io/f/xldlbzov", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Message sent successfully!", {
          position: "top-right",
        });
        form.reset();
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.", {
          position: "top-right",
        });
      });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f5f9ff] text-[#42495D]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#6E8BC2]">Let’s Connect</h2>
          <p className="text-lg">
            Have a project, collaboration, or want to say hi? I’d love to hear from you!
          </p>

          <div className="space-y-3 text-base">
            <p className="flex items-center gap-3">
              <Mail className="text-[#6E8BC2]" size={20} />
              <a href="mailto:gpatience14@gmail.com" className="hover:underline">gpatience14@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-[#6E8BC2]" size={20} />
              <a href="tel:+233509459284" className="hover:underline">+233 50 945 9284</a>
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Grace-Affel" target="_blank" rel="noopener noreferrer">
              <Github size={22} className="text-[#6E8BC2] hover:text-[#42495D]" />
            </a>
            <a href="https://www.linkedin.com/in/patience-affel-794746370/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} className="text-[#6E8BC2] hover:text-[#42495D]" />
            </a>
            <a href="https://www.instagram.com/grace_affel/" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} className="text-[#6E8BC2] hover:text-[#42495D]" />
            </a>
          </div>
        </motion.div>

      
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="block mb-1 text-sm font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8BC2]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8BC2]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Your Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="What would you like to say?"
              className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#6E8BC2]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6E8BC2] text-white py-3 rounded-md hover:bg-[#5a77ad] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
