import React from "react";
import { motion } from "framer-motion";
import websitePic from "../assets/websitePic.png"; // your image

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Welcome! 👋
      </motion.h2>

      <div className="hero-content">
        {/* Left: Self portrait */}
        <motion.img
          src={websitePic}
          alt="Riyasat Ahmed"
          className="hero-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Right: Text block (intro + degree stacked vertically) */}
        <div className="hero-text-content">
          <motion.p
            className="hero-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            My name is Riyasat Ahmed and I am a software enthusiast. I am a
            second-year student at the University of Guelph and am currently
            learning C, Java, and Python.
          </motion.p>

          <motion.p
            className="hero-degree"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Bachelor of Computing, Honours Major Software Engineering
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
