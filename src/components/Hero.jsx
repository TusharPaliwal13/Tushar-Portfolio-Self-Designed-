import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center px-10 sm:px-20">
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center">

        {/* Left - Big Heading */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{ fontFamily: '"Montagu Slab", serif' }} className="test text-[4rem]  sm:text-[8rem] leading-none">Creative</h1>
          <h1 style={{ fontFamily: '"Montagu Slab", serif' }} className="text-[4rem]  sm:text-[8rem]  leading-none">Developer</h1>
        </motion.div>

        {/* Right - Subtext */}
        <motion.div
          className="mt-8 sm:mt-0 sm:text-right text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <p>Competent in Web Design, UI / UX,</p>
          <p>Video Editing and</p>
          <p>Front-end Development.</p>
        </motion.div>



      </div>
    </section>
  );
};

export default Hero;
