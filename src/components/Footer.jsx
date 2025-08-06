import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Optionally add scroll-to-top if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact');
  };

  return (
    <footer className="bg-black text-white px-6 md:px-10 py-16 md:py-20">

      {/* Top Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-5xl font-light leading-tight max-w-3xl">
          Let’s talk about a project, collaboration <br />
          or an idea you may have
        </h2>

        <button
          onClick={handleContactClick}
          className="bg-gray-200 text-black text-sm px-6 py-3 rounded-full hover:bg-white transition duration-200 "
        >
          Drop me a line
        </button>
      </motion.div>

      {/* Divider */}
      <hr className="my-10 border-gray-700" />

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2025 All rights reserved. Design & coded by <span className="text-pink-500">❤</span></p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <a href="https://dribbble.com/tushar-paliwal" className="hover:text-white" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://www.behance.net/tusharpaliwal1" className="hover:text-white" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="https://www.linkedin.com/in/tushar-paliwal-592418138" className="hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/tusharpaliwal13" className="hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:tusharpaliwal4@gmail.com" className="hover:text-white">Email</a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
