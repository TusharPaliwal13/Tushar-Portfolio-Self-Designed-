import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: 'GreenCart',
      description: 'MERN E-commerce site',
      image: '/previews/greencart.png',
      link: 'https://greencart-jet-five.vercel.app',
    },
    {
      name: 'EstateFlow',
      description: 'Real Estate Listing App',
      image: '/previews/estateflow.png',
      link: 'https://estateflowrealestatetp.netlify.app',
    },
    {
      name: 'Brisk AI',
      description: 'AI SaaS for Content Creation',
      image: '/previews/briskai.png',
      link: 'https://brisk-ai-nine-vert.vercel.app'
    },
  ];

  return (
    <section id="work" className="w-full bg-black text-white px-6 md:px-8 py-8">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-10 border-b border-zinc-700 pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work
      </motion.h2>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left: Project Titles */}
        <motion.div
          className="w-full md:w-1/2 space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="block group transition-all duration-300"
            >
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  hoveredIndex === index ? 'text-white' : 'text-zinc-500'
                } group-hover:text-white`}
              >
                {project.name}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base">
                {project.description}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Right: Image Preview */}
        <motion.div
          className="hidden md:block w-full md:w-1/2 min-h-[300px] relative mt-10 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <img
              key={index}
              src={project.image}
              alt={project.name}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
