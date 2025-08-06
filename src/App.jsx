import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import CustomCursor from './components/CustomCursor'; // 👈 import custom cursor

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <CustomCursor /> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Expertise />
                <div id="work">
                  <Work />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <Router>
      
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
