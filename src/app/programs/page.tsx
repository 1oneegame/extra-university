"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const programCategories = [
  {
    id: "bachelor",
    title: "Бакалавриат",
    description:
      "4-летние программы для получения базового высшего образования",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="c91p7s2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          data-oid=".7.164_"
        />
      </svg>
    ),
  },
  {
    id: "master",
    title: "Магистратура",
    description:
      "2-летние программы для углубленной специализации и исследовательской деятельности",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="t-3n:00"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          data-oid="_k8uufs"
        />
      </svg>
    ),
  },
  {
    id: "phd",
    title: "Докторантура",
    description:
      "3-4-летние программы для подготовки научных и педагогических кадров высшей квалификации",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="kb8ypcx"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
          data-oid="g03-aim"
        />
      </svg>
    ),
  },
  {
    id: "courses",
    title: "Курсы и сертификационные программы",
    description:
      "Кратковременные программы для повышения квалификации и получения новых навыков",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="jpp9jv5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          data-oid="r4dlu.d"
        />
      </svg>
    ),
  },
];

const programs = [
  {
    id: 1,
    title: "Компьютерные науки и искусственный интеллект",
    category: "bachelor",
    faculty: "Факультет информационных технологий",
    duration: "4 года",
    schedule: "Дневная форма обучения",
    description:
      "Изучение алгоритмов, структур данных, машинного обучения, нейронных сетей и обработки естественного языка.",
    image: "/assets/images/cs1.png",
    features: [
      "Практические проекты с реальными данными",
      "Стажировки в IT‑компаниях",
      "Участие в международных соревнованиях",
    ],
  },
  {
    id: 2,
    title: "Цифровой бизнес и электронная коммерция",
    category: "bachelor",
    faculty: "Экономический факультет",
    duration: "4 года",
    schedule: "Дневная форма обучения",
    description:
      "Сочетание основ бизнеса с цифровыми технологиями, маркетингом и управлением проектами.",
    image: "/assets/images/db1.png",
    features: [
      "Стартап‑симуляции и кейсы",
      "Практика в e‑commerce",
      "Мастер‑классы от экспертов",
    ],
  },
  {
    id: 3,
    title: "Робототехника и автоматизированные системы",
    category: "bachelor",
    faculty: "Факультет робототехники",
    duration: "4 года",
    schedule: "Дневная форма обучения",
    description:
      "Проектирование и программирование роботизированных систем, мехатронных устройств и IoT‑решений.",
    image: "/assets/images/rb1.png",
    features: [
      "Лаборатории с реальными роботами",
      "Участие в робот‑чемпионатах",
      "Проекты с промышленными партнёрами",
    ],
  },
  {
    id: 4,
    title: "Цифровой дизайн и UX/UI",
    category: "bachelor",
    faculty: "Факультет дизайна",
    duration: "4 года",
    schedule: "Дневная форма обучения",
    description:
      "Основы графического дизайна, интерфейсного дизайна, прототипирования и пользовательского опыта.",
    image: "/assets/images/des1.png",
    features: [
      "Работа с Figma и Adobe XD",
      "Кейсы от реальных компаний",
      "Портфолио‑проекты",
    ],
  },
  {
    id: 5,
    title: "Экономическая аналитика и большие данные",
    category: "bachelor",
    faculty: "Факультет математики и аналитики",
    duration: "4 года",
    schedule: "Дневная форма обучения",
    description:
      "Методы статистики, машинного обучения и визуализации для анализа экономических процессов.",
    image: "/assets/images/data1.png",
    features: [
      "Работа с Python и R",
      "Исследовательские проекты",
      "Стажировки в финансовых организациях",
    ],
  },

  // Магистратура (master)
  {
    id: 6,
    title: "Анализ данных и принятие решений",
    category: "master",
    faculty: "Факультет математики и аналитики",
    duration: "2 года",
    schedule: "Дневная/вечерняя форма",
    description:
      "Углублённое изучение статистических методов, больших данных и BI‑решений для бизнеса.",
    image: "/assets/images/data2.png",
    features: [
      "Проекты с реальными данными",
      "Сертификация Power BI",
      "Сотрудничество с банками и консалтинговыми компаниями",
    ],
  },
  {
    id: 7,
    title: "Управление цифровыми проектами",
    category: "master",
    faculty: "Факультет информационных технологий",
    duration: "2 года",
    schedule: "Дневная/вечерняя форма",
    description:
      "Методологии Agile, DevOps и управление жизненным циклом IT‑продуктов.",
    image: "/assets/images/man1.png",
    features: [
      "Сертификация Scrum Master",
      "Кейсы от крупных IT‑компаний",
      "Разработка дорожных карт проектов",
    ],
  },
  {
    id: 8,
    title: "Интеллектуальные системы и робототехника",
    category: "master",
    faculty: "Факультет робототехники",
    duration: "2 года",
    schedule: "Дневная форма",
    description:
      "Разработка автономных роботов, компьютерное зрение и управление движением.",
    image: "/assets/images/mrob1.png",
    features: [
      "Лабораторные работы на современных платформах",
      "Исследования в области AI",
      "Партнёрство с ведущими робототехническими центрами",
    ],
  },
  {
    id: 9,
    title: "Цифровая экономика и финтех",
    category: "master",
    faculty: "Экономический факультет",
    duration: "2 года",
    schedule: "Дневная/вечерняя форма",
    description:
      "Блокчейн, криптовалюты, цифровые платежные системы и инновации в финансах.",
    image: "/assets/images/deco.png",
    features: [
      "Стажировки в финтех‑стартапах",
      "Практические кейсы с банками",
      "Возможность получения CFA Level I",
    ],
  },
  {
    id: 10,
    title: "Дизайн образовательных технологий (EdTech)",
    category: "master",
    faculty: "Факультет педагогики и IT",
    duration: "2 года",
    schedule: "Дневная форма",
    description:
      "Создание интерактивного контента, VR/AR‑решений и образовательных платформ.",
    image: "/assets/images/edtech.png",
    features: [
      "Проекты с онлайн‑университетами",
      "Использование AI‑ассистентов в обучении",
      "Пилотные внедрения в школах",
    ],
  },

  // Докторантура (phd)
  {
    id: 11,
    title: "Информационные технологии в образовании",
    category: "phd",
    faculty: "Факультет педагогики и IT",
    duration: "3 года",
    schedule: "Гибкий график",
    description:
      "Исследования в области EdTech, адаптивных систем обучения и влияния IT‑технологий на образовательные процессы.",
    image: "/assets/images/edtech2.png",
    features: [
      "Публикация в международных журналах",
      "Международное сотрудничество",
      "Участие в грантовых проектах",
    ],
  },
  {
    id: 12,
    title: "Когнитивные системы и нейроинформатика",
    category: "phd",
    faculty: "Факультет информационных технологий",
    duration: "3 года",
    schedule: "Гибкий график",
    description:
      "Углублённое исследование взаимодействия человека и машины, нейродинамика и AI‑моделирование.",
    image: "/assets/images/neuro.png",
    features: [
      "Лабораторные исследования",
      "Конференции по нейронаукам",
      "Гранты от научных фондов",
    ],
  },
  {
    id: 13,
    title: "Устойчивое развитие и «зелёные» технологии",
    category: "phd",
    faculty: "Факультет экологии и устойчивого развития",
    duration: "3 года",
    schedule: "Гибкий график",
    description:
      "Научные проекты в области возобновляемой энергии и экологического менеджмента.",
    image: "/assets/images/gt.png",
    features: [
      "Полевые исследования",
      "Партнёрство с экологическими НКО",
      "Публикации в профилированных журналах",
    ],
  },
  {
    id: 14,
    title: "Искусственный интеллект и глубокое обучение",
    category: "phd",
    faculty: "Факультет информационных технологий",
    duration: "3 года",
    schedule: "Гибкий график",
    description:
      "Разработка новых архитектур нейронных сетей, AI‑алгоритмов и теоретических основ глубокого обучения.",
    image: "/assets/images/ml.png",
    features: [
      "Супервизируемые и самообучающиеся системы",
      "Сотрудничество с AI‑лабораториями",
      "Публикации на ведущих конференциях",
    ],
  },

  // Курсы (courses)
  {
    id: 15,
    title: "Разработка веб‑приложений (Full‑stack)",
    category: "courses",
    faculty: "Центр дополнительного образования",
    duration: "6 месяцев",
    schedule: "Вечерняя форма / Онлайн",
    description:
      "Интенсив по созданию современных веб‑приложений на стеке React, Node.js и базах данных.",
    image: "/assets/images/fullstack.png",
    features: [
      "Итоговый проект для портфолио",
      "Mentoring от практиков",
      "Помощь в трудоустройстве",
    ],
  },
  {
    id: 16,
    title: "Курс по управлению IT‑проектами (Agile)",
    category: "courses",
    faculty: "Центр дополнительного образования",
    duration: "4 месяца",
    schedule: "Вечерняя форма / Онлайн",
    description:
      "Методологии Scrum, Kanban и инструменты Jira для эффективного управления проектами.",
    image: "/assets/images/pm.png",
    features: [
      "Сертификация Scrum Master",
      "Реальные кейсы из IT",
      "Networking с профессионалами",
    ],
  },
  {
    id: 17,
    title: "Дизайн интерfeйсов и пользовательский опыт (UI/UX)",
    category: "courses",
    faculty: "Центр дополнительного образования",
    duration: "5 месяцев",
    schedule: "Онлайн",
    description:
      "Построение удобных интерфейсов, прототипирование и тестирование пользовательских сценариев.",
    image: "/assets/images/uxui2.png",
    features: [
      "Работа в Figma",
      "User testing",
      "Готовые шаблоны для резюме",
    ],
  },
  {
    id: 18,
    title: "Основы Data Science и машинного обучения",
    category: "courses",
    faculty: "Центр дополнительного образования",
    duration: "6 месяцев",
    schedule: "Вечерняя форма / Онлайн",
    description:
      "Python, Pandas, Scikit‑learn и основы построения ML‑моделей на реальных данных.",
    image: "/assets/images/ds.png",
    features: [
      "Проекты с публичными датасетами",
      "Встречи с Data Scientists",
      "Сертификат завершения курса",
    ],
  },
  {
    id: 19,
    title: "Цифровой маркетинг и аналитика",
    category: "courses",
    faculty: "Центр дополнительного образования",
    duration: "4 месяца",
    schedule: "Онлайн",
    description:
      "SEO, SMM, контекстная реклама и основы веб‑аналитики в Google Analytics.",
    image: "/assets/images/smm.png",
    features: [
      "Запуск реальных рекламных кампаний",
      "Доступ к платным инструментам",
      "Практика на кейсах брендов",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    text: "Программа 'Компьютерные науки и ИИ' превзошла все мои ожидания. Практические проекты и поддержка преподавателей помогли мне найти работу своей мечты еще до выпуска.",
    author: "Артем Соколов",
    role: "Выпускник 2023 года",
    program: "Бакалавриат",
  },
  {
    id: 2,
    text: "Магистратура по анализу данных дала мне глубокие знания и навыки, которые сразу же нашли применение в моей работе. Исследовательские проекты с реальными данными - это бесценный опыт.",
    author: "Елена Кузнецова",
    role: "Выпускница 2022 года",
    program: "Магистратура",
  },
  {
    id: 3,
    text: "Курс по веб-разработке помог мне полностью сменить профессию. За 6 месяцев я получил знания, которые уже применяю в новой работе веб-разработчиком.",
    author: "Максим Иванов",
    role: "Выпускник курса 2023 года",
    program: "Курсы",
  },
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("bachelor");

  const filteredPrograms = programs.filter(
    (program) => program.category === activeCategory,
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
      data-oid="l1v8o1:"
    >
      <div
        className="bg-blue-500 pt-20 pb-24 relative overflow-hidden"
        data-oid="z5b--3n"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-oid="al170iz"
        >
          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-24 mb-12 md:mb-16"
            data-oid="wj1221y"
          >
            <div className="text-center" data-oid="zuieyu2">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                data-oid="d-8oufp"
              >
                Программы обучения
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-3xl mx-auto"
                data-oid="22.kt9."
              >
                <p className="text-white/90 text-lg" data-oid="6b2a63x">
                  Выбирайте из широкого спектра современных программ,
                  разработанных в сотрудничестве с ведущими специалистами и
                  компаниями
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" data-oid="rl9pms9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            data-oid="69r:wkm"
          >
            <rect width="1440" height="100" fill="#ffffff" data-oid="hu5_9:f" />
          </svg>
        </div>
      </div>
      <motion.div variants={itemVariants} className="py-16" data-oid="zobine6">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="l439zek"
        >
          <div className="text-center mb-16" data-oid="-5ooj:t">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="nepdpyz"
            >
              Образовательные возможности
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid=".t.xv:g"
            >
              В Extra University вы найдете программы, соответствующие вашим
              целям и амбициям
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="x-du-xj"
          >
            {programCategories.map((category) => (
              <motion.div
                key={category.id}
                className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${activeCategory === category.id ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-50"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCategory(category.id)}
                data-oid="u9zt-:9"
              >
                <div
                  className={`w-12 h-12 ${activeCategory === category.id ? "bg-blue-400 text-white" : "bg-blue-100 text-blue-500"} rounded-full flex items-center justify-center mb-4`}
                  data-oid="1nwhz.h"
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" data-oid="6a92gds">
                  {category.title}
                </h3>
                <p
                  className={
                    activeCategory === category.id
                      ? "text-white/90"
                      : "text-gray-600"
                  }
                  data-oid="r6rh0py"
                >
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gray-50"
        data-oid="mq69r94"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="f85yo.t"
        >
          <div className="text-center mb-16" data-oid="o--9zzu">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="jzjupkb"
            >
              {programCategories.find((cat) => cat.id === activeCategory)
                ?.title || "Программы"}
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="bzgvmgg"
            >
              Изучите детали программ и выберите наиболее подходящую для вас
            </p>
          </div>

          <div className="grid gap-12" data-oid="ib99ee8">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-oid="s1bns:h"
              >
                <div className="md:flex" data-oid="5fe0_z8">
                  <div className="md:flex-shrink-0 md:w-1/3" data-oid="qr1p84b">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-48 w-full object-cover md:h-full"
                      data-oid="6b4279d"
                    />
                  </div>
                  <div className="p-8 md:w-2/3" data-oid="caj19t7">
                    <div
                      className="uppercase tracking-wide text-sm text-blue-500 font-semibold mb-1"
                      data-oid="o_f0nt:"
                    >
                      {program.faculty}
                    </div>
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-2"
                      data-oid="wzamsfq"
                    >
                      {program.title}
                    </h3>
                    <div
                      className="flex flex-wrap gap-4 mb-4"
                      data-oid="-x81stu"
                    >
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        data-oid="bld_._v"
                      >
                        {program.duration}
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                        data-oid="1_aluka"
                      >
                        {program.schedule}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4" data-oid="ksg1wa-">
                      {program.description}
                    </p>
                    <div className="mb-4" data-oid="rkxnh.-">
                      <h4
                        className="font-semibold text-gray-900 mb-2"
                        data-oid="793pkw8"
                      >
                        Ключевые особенности:
                      </h4>
                      <ul
                        className="list-disc list-inside text-gray-600 space-y-1"
                        data-oid="iu8.kpk"
                      >
                        {program.features.map((feature, index) => (
                          <li key={index} data-oid="_o5-aab">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6" data-oid="kcc:tgx">
                      <Link
                        href="/admission"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                        data-oid="6rtzb._"
                      >
                        Подробнее о программе
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 ml-2"
                          data-oid="k9zlsy5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            data-oid="qw8ca-f"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="py-16" data-oid="yfi63zq">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="qdmcr2s"
        >
          <div className="text-center mb-16" data-oid="tl1-ftr">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="5exv9lv"
            >
              Отзывы студентов
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="vw7e2_8"
            >
              Узнайте, что говорят наши выпускники о своем опыте обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-oid="i37au_.">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-8 relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="2-h59.g"
              >
                <svg
                  className="text-blue-100 absolute top-6 left-6 w-16 h-16 -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  aria-hidden="true"
                  data-oid="l8:uhpi"
                >
                  <path
                    fill="currentColor"
                    d="M33.594 0C15.032 0 0 15.032 0 33.594c0 12.056 6.344 22.646 15.876 28.625c-5.978 20.27-3.637 29.322 4.407 37.366c8.047 8.044 19.368 9.982 32.886 5.25c-3.355-11.946-4.526-24.042-3.5-36.312h-16.063c-9.281 0-16.812-7.531-16.812-16.81c0-9.282 7.531-16.814 16.812-16.814h33.595v38.688c0 18.562-15.032 33.594-33.595 33.594c-3.107 0-6.102-0.444-8.969-1.219c1.219 2.906 1.969 6.061 1.969 9.408c0 2.217-0.29 4.36-0.813 6.406c2.57 0.398 5.2 0.625 7.906 0.625c33.41 0 60.47-27.059 60.47-60.47c0-33.408-27.06-60.468-60.47-60.468L33.593 0zm67.186 0c-3.108 0-6.102 0.444-8.968 1.219c1.219 2.906 1.969 6.061 1.969 9.406c0 2.219-0.29 4.363-0.812 6.406c2.56 0.397 5.188 0.625 7.905 0.625c2.105 0 4.143-0.145 6.156-0.376c-1.427 17.434-15.855 31.157-33.625 31.157h-16.062c-3.354 11.944-4.526 24.04-3.5 36.312h16.062c33.408 0 60.47-27.06 60.47-60.47c0-15.052-5.516-28.808-14.595-39.374c-7.865-9.143-19.412-15.029-32.405-15.093L100.78 0z"
                    data-oid="2kcn:2a"
                  />
                </svg>
                <p
                  className="text-gray-700 mb-6 relative z-10"
                  data-oid="y9l8ogh"
                >
                  {testimonial.text}
                </p>
                <div className="flex items-center" data-oid="a9mpm7.">
                  <div className="ml-3" data-oid="5aowrbo">
                    <div
                      className="text-lg font-bold text-gray-900"
                      data-oid="5khp73g"
                    >
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500" data-oid="veel7bh">
                      {testimonial.role}
                    </div>
                    <div
                      className="text-sm font-medium text-blue-500"
                      data-oid="8ips0o0"
                    >
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white py-16"
        data-oid="vkb4hm6"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="lx4tgbe"
        >
          <div
            className="grid md:grid-cols-2 gap-12 items-center"
            data-oid="02l6.oz"
          >
            <div data-oid="ggdo_rx">
              <h2
                className="text-3xl font-bold text-blue-600 mb-6"
                data-oid="rd0o23j"
              >
                Подайте заявку сегодня
              </h2>
              <p className="text-gray-700 text-lg mb-8" data-oid="s5896gc">
                Сделайте первый шаг к получению качественного образования,
                которое откроет перед вами новые возможности. Наша команда
                готова помочь вам на каждом этапе процесса поступления.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                data-oid="7xcvpkf"
              >
                <Link
                  href="/admission"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  data-oid="d7:iz3z"
                >
                  Подать заявку
                </Link>
                <Link
                  href="/contacts"
                  className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  data-oid="yopcelg"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
            <div className="w-full" data-oid="n24w_e_">
              <div
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-gray-900"
                data-oid="8dye5tx"
              >
                <h3 className="text-2xl font-bold mb-4" data-oid="b3l88jr">
                  Ключевые даты
                </h3>
                <div className="space-y-6" data-oid="u4z.urq">
                  <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between"
                    data-oid=".dgkg-8"
                  >
                    <div
                      className="text-blue-500 font-bold md:w-1/2"
                      data-oid="3fl1teo"
                    >
                      15 февраля - 30 июня
                    </div>
                    <div className="font-medium md:w-1/2" data-oid="-1lw5j_">
                      Прием документов на бакалавриат
                    </div>
                  </div>
                  <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between"
                    data-oid="u.lm:fm"
                  >
                    <div
                      className="text-blue-500 font-bold md:w-1/2"
                      data-oid="n_lf9pj"
                    >
                      15 марта - 15 июля
                    </div>
                    <div className="font-medium md:w-1/2" data-oid="xnomxq5">
                      Прием документов в магистратуру
                    </div>
                  </div>
                  <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between"
                    data-oid="_i7ipyj"
                  >
                    <div
                      className="text-blue-500 font-bold md:w-1/2"
                      data-oid="nkqu1o1"
                    >
                      1 апреля - 31 июля
                    </div>
                    <div className="font-medium md:w-1/2" data-oid="d1ixcfz">
                      Прием документов в докторантуру
                    </div>
                  </div>
                  <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between"
                    data-oid="61esvtd"
                  >
                    <div
                      className="text-blue-500 font-bold md:w-1/2"
                      data-oid="3k6zi5i"
                    >
                      Круглый год
                    </div>
                    <div className="font-medium md:w-1/2" data-oid="fi27c5w">
                      Запись на курсы и сертификационные программы
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
