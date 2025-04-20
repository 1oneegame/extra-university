"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
      className="flex flex-col max-w-screen bg-white mt-[70px] sm:mt-[80px] md:mt-[100px]"
      data-oid="9869:83"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-48 text-4xl sm:text-6xl md:text-8xl lg:text-9xl flex flex-col justify-center items-center font-bold px-4 text-center"
        data-oid="fd9o3s2"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          data-oid="ju63m21"
        >
          Extra University:
        </motion.h1>
        <TypeAnimation
          sequence={[
            "Традиции...",
            1000,
            "Инновации...",
            1000,
            "Трансформация...",
            1000,
          ]}
          wrapper="h1"
          speed={10}
          className="text-blue-500"
          repeat={Infinity}
          data-oid="m8v__fh"
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8 md:mt-12 px-4"
        data-oid="awj7mqa"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto text-lg sm:text-2xl text-medium px-6 py-4 shadow-md hover:scale-105 bg-blue-500 border-1 text-white rounded-lg cursor-pointer transition-all duration-300"
          data-oid="5ymbwee"
        >
          Получить консультацию
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto text-lg sm:text-2xl text-medium px-6 py-4 shadow-md hover:scale-105 shadow-blue-300 border-1 rounded-lg text-blue-500 cursor-pointer transition-all duration-300"
          data-oid="ab2u_6x"
        >
          Узнать подробнее
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
