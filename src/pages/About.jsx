import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Tushar_Paliwal_Resume.pdf"; // file must be inside public/
    link.download = "Tushar_Paliwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-black text-white px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 border-b border-zinc-700 pb-2">
          About Me
        </h1>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
          Hello! I'm <span className="text-white font-medium">Tushar Paliwal</span>, a self-driven frontend developer passionate about designing
          and building beautiful, functional web interfaces. I enjoy turning complex problems into simple, elegant solutions using technologies like
          <span className="text-white font-medium"> React, Tailwind CSS, and Framer Motion</span>.
        </p>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
          Beyond development, I explore the art of <span className="text-white font-medium">UI/UX design</span>, ensuring every interface feels intuitive and smooth. I'm also into
          <span className="text-white font-medium"> web design, graphic design, and video editing</span>, which helps me bridge the gap between design and code.
        </p>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
          I'm currently focused on building high-quality portfolio projects and preparing for exciting opportunities in the tech space.
          Whether it’s a landing page, a dashboard, or an entire frontend system — I build with care, creativity, and performance in mind.
        </p>

        <button
          onClick={downloadCV}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-zinc-200 transition-colors duration-300"
        >
          Download CV
        </button>
      </div>
    </motion.div>
  );
};

export default About;
