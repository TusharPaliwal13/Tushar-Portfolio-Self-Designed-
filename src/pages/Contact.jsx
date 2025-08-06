import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="bg-black text-white min-h-screen px-10 py-20 font-outfit"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-normal font-montagu mb-6">
          Drop Me a Line
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-12">
          Whether you have a question, a project idea, or just want to say hi — my inbox is open.
        </p>
        <form
          action="https://formspree.io/f/mvgqqrbl"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-transparent border-b border-gray-600 py-3 px-1 focus:outline-none placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-transparent border-b border-gray-600 py-3 px-1 focus:outline-none placeholder-gray-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-transparent border-b border-gray-600 py-3 px-1 focus:outline-none placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="mt-6 border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
