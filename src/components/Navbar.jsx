import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const section = document.getElementById('work');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#work');
    }
  };

  return (
    <header className="bg-black text-white py-4 z-50 relative">
      <motion.div
        className="flex justify-between items-center px-4 sm:px-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="font-semibold text-sm sm:text-base cursor-pointer" onClick={() => navigate('/')}>
          Tushar Paliwal
        </div>

        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <Link to="/about" className="hover:text-zinc-400 transition-colors">About Me</Link>
          <a href="#work" onClick={handleScrollToWork} className="hover:text-zinc-400 transition-colors">Work</a>
          <Link to="/contact" className="hover:text-zinc-400 transition-colors">Drop me a line</Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
