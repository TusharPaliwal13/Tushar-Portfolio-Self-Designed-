import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Expertise = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="bg-black text-white px-6 md:px-10 py-16 md:py-20">
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed">
            I design and build clean, responsive websites with a focus on creativity and user experience.
            As a beginner frontend developer and creative designer, I help bring ideas to life with simple and modern design.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Drop me a line
            </button>
          </Link>
        </div>

        <div>
          <p className="mb-4 border-b border-gray-700 pb-1">Let’s get connected</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="https://dribbble.com/tushar-paliwal" className="hover:text-white">Dribbble</a>
            </li>
            <li>
              <a href="https://www.behance.net/tusharpaliwal1" className="hover:text-white">Behance</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tushar-paliwal-592418138" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/tusharpaliwal13" className="hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 md:mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">I can help you with …</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            ['01', 'Development', 'I build responsive and interactive websites using modern web technologies.'],
            ['02', 'Design', 'I design simple, user-friendly interfaces and smooth user flows.'],
            ['03', 'Editing', 'I edit engaging, cinematic videos and short-form content for web and social platforms.']
          ].map(([num, title, desc], i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-gray-600 mb-2">{num}</p>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Expertise
