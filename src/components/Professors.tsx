"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Professor {
  name: string;
  position: string;
  image: string;
  achievements: string[];
}

export default function Professors() {
  const professors: Professor[] = [
    {
      name: "Профессор Айгуль Садыкова",
      position: "Профессор кафедры искусственного интеллекта",
      image: "/assets/images/aigul-sadykova.svg",
      achievements: [
        "15 лет преподавательского стажа, включая опыт работы в международных университетах",
        "Докторская степень в области компьютерных наук (PhD in Computer Science)",
        'Соосновательница стартапа "MedAI" (диагностика заболеваний на ранней стадии с использованием ИИ)',
      ],
    },
    {
      name: "Доктор Дамир Ахметов",
      position: "Доцент кафедры предпринимательства и инноваций",
      image: "/assets/images/damir-ahmetov.svg",
      achievements: [
        "10 лет опыта в бизнес-образовании и консультировании стартапов",
        "Докторская степень в области управления бизнесом (DBA)",
        "Ментор в университетском бизнес-инкубаторе, помог запустить более 10 стартапов",
        "Обладатель гранта на исследование экосистемы стартапов в регионе",
      ],
    },
    {
      name: "Профессор Елена Морозова",
      position: "Профессор кафедры робототехники и автоматизации",
      image: "/assets/images/elena-morozova.svg",
      achievements: [
        "Участник международного проекта по созданию роботов-ассистентов для людей с ограниченными возможностями",
        "20 лет научно-педагогической деятельности, пользуется уважением среди коллег и студентов",
        "Доктор технических наук (Dr.Eng.)",
        "Награда за вклад в развитие робототехники в образовании",
      ],
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
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
      id="professors"
      className="w-full mt-48 mb-20"
    >
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-16 justify-center items-center px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          <h1>
            Преподаватели нашего{" "}
            <span className="text-blue-500">Университета</span>
          </h1>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 w-full max-w-6xl"
        >
          {professors.map((professor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4 pt-12 sm:pt-16 md:pt-24 relative"
            >
              <div className="flex flex-col items-center space-y-4 shadow-2xl border-1 shadow-blue-200 px-4 pb-4 pt-34 md:px-8 md:pb-8 rounded-t-4xl bg-white w-full">
                <div className="absolute w-48 h-48 sm:w-64 sm:h-64 -top-8">
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 shadow-lg">
                    <Image
                      src={professor.image}
                      fill
                      alt={professor.name}
                      className="object-cover"
                    />
                  </div>
                </div>

                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl font-bold text-gray-800"
                >
                  {professor.name}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-blue-500 font-medium text-sm"
                >
                  {professor.position}
                </motion.p>
                <motion.ul
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm text-gray-600 space-y-2"
                >
                  {professor.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      className="list-disc list-inside text-left"
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center items-center mt-6 sm:mt-8 md:mt-12 px-4"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="hover:scale-105 w-full sm:w-auto text-base sm:text-lg md:text-xl font-medium text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md"
        >
          <a href="/teachers">Подробнее об остальных сотрудников</a>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
