"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface NewsItem {
  title: string;
  image: string;
  link: string;
}

interface Event {
  date: string;
  description: string;
  link: string;
}

export default function News() {
  const newsItems: NewsItem[] = [
    {
      title:
        "Extra объявляет о наборе на летнюю исследовательскую программу для старшеклассников",
      image: "/assets/images/extrauniversity-outside.svg",
      link: "/summer-research",
    },
    {
      title:
        "В Extra пройдет знаковая международная конференция в сфере машинного обучения",
      image: "/assets/images/extrauniversity-hall.svg",
      link: "/ml-conference",
    },
  ];

  const events: Event[] = [
    {
      date: "15 мая 2025:",
      description:
        'День открытых дверей "Extra University" для старшеклассников и их родителей.',
      link: "/",
    },
    {
      date: "1 июня 2025:",
      description:
        'Старт летней исследовательской программы "Extra" для старшеклассников.',
      link: "/",
    },
    {
      date: "15 июня 2025:",
      description:
        'Онлайн-вебинар "Карьерные перспективы в IT и бизнесе" с участием преподавателей "Extra University" и выпускников-предпринимателей.',
      link: "/",
    },
    {
      date: "1 июля 2025:",
      description:
        'Мастер-класс по робототехнике для школьников на базе лаборатории "Extra University".',
      link: "/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="news"
      className="container mt-48 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12">
        <div className="w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-row justify-center items-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
              Новости / <span className="text-blue-500">Мероприятия</span>
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Link href={item.link} className="group block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-[280px] md:h-[400px] overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    >
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute bottom-6 left-6 right-6 text-white text-xl md:text-2xl font-medium leading-tight"
                      >
                        {item.title}
                      </motion.h3>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4 sm:space-y-6 bg-blue-500 rounded-lg p-12"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="transition-all duration-300 text-white text-lg cursor-pointer hover:scale-105"
              >
                <span className="font-bold">{event.date}</span>{" "}
                <span>{event.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-6 py-4 text-lg font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Другие новости и мероприятия
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
