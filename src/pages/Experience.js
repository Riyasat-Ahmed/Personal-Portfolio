import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const services = [
    {
      title: "Scalefiniti - AI Automation",
      description:
        "Learning to master n8n to make automations for tedious tasks. Like automating LinkedIn posts, automating daily event summary every morning, and automating Siri to add, update, and remove events on Google Calendar as well as sending emails through a chosen email."
    },
    {
      title: "Web Building",
      description:
        "Using my knowledge in HTML, CSS, and JavaScript, I have created websites for my personal agengies, other clients, and myself."
    },
    {
      title: "Building an App (still in the works)",
      description:
        "Trying out a new challenge by creating an app that students like myself can benefit from. Still in the works but a great experience for me, getting used to React Native."
    },
    {
        title: "Personal Agencies",
        description:
          "Running 2 Agencies. Marketing Agency (RoyalX Media) and Web Develepment Agency (R&S Visuals)."
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
        Experience
      </motion.h3>
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="service-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
