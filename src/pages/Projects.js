import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const processSteps = [
    {
      step: "On the Way!",
      description: "Programming projects are still yet to come. Stay Tuned!"
    }
  ];

  return (
    <section>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          className="process-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <h4>{step.step}</h4>
          <p>{step.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
