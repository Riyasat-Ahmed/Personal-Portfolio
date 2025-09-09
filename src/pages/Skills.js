import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const portfolioItems = ["C", "HTML", "CSS", "JavaScript", "React", "n8n"];

  return (
    <section>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h3>
      <div className="portfolio-grid">
        {portfolioItems.map((title, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <p>{title}</p>
          </motion.div>
        ))}
      </div>

      {/* Box under skills */}
      <motion.div
        className="skill-callout"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
      >
        <h4>Planning on Learning</h4>
        <p>I plan to learn more about JavaScript and get exposure to the backend of programming. Therefore wanting to be good with Node.js. I also plan to create projects that use LLMs, like predictors. Additionally I just got introduced to Java and Python, so I would like to expand on that. </p>
      </motion.div>
    </section>
  );
};

export default Skills;
