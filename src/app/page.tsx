'use client'
import AboutUniversity from "@/components/AboutUniversity";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Professors from "@/components/Professors";
import UniversityIntroduce from "@/components/UniversityIntroduce";
import UniversityPrograms from "@/components/UniversityPrograms";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Hero/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <AboutUniversity/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <News/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <UniversityIntroduce/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <UniversityPrograms/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Professors/>
      </motion.div>
    </motion.div>
  );
}
