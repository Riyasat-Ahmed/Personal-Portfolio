import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";

// Components
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
