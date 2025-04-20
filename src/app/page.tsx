"use client";
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
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      data-oid="zyr8dpu"
    >
      <motion.div variants={itemVariants} data-oid="zqesbpx">
        <Hero data-oid="if69vmt" />
      </motion.div>
      <motion.div variants={itemVariants} data-oid="ax05:xa">
        <AboutUniversity data-oid="bo5ddvl" />
      </motion.div>
      <motion.div variants={itemVariants} data-oid="b4zlowe">
        <News data-oid="0lrbfo8" />
      </motion.div>
      <motion.div variants={itemVariants} data-oid="8mw5olw">
        <UniversityIntroduce data-oid="_0::af2" />
      </motion.div>
      <motion.div variants={itemVariants} data-oid="78diwdd">
        <UniversityPrograms data-oid="cb4za7d" />
      </motion.div>
      <motion.div variants={itemVariants} data-oid="hifr7_4">
        <Professors data-oid="k9jl7:_" />
      </motion.div>
    </motion.div>
  );
}
