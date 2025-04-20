"use client";
import React from "react";
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

const teamMembers = [
  {
    id: 1,
    name: "Александр Петров",
    position: "Ректор",
    bio: "Доктор технических наук, профессор с 20-летним опытом управления образовательными учреждениями.",
    image: "/assets/images/alexandr.png",
  },
  {
    id: 2,
    name: "Аяжан Айтенова",
    position: "Проректор по учебной работе",
    bio: "Кандидат педагогических наук, автор инновационных образовательных методик и программ.",
    image: "/assets/images/ayazhan.png",
  },
  {
    id: 3,
    name: "Михаил Иванов",
    position: "Проректор по науке",
    bio: "Доктор физико-математических наук, руководитель множества успешных научных проектов.",
    image: "/assets/images/michael.png",
  },
  {
    id: 4,
    name: "Ольга Козлова",
    position: "Декан IT факультета",
    bio: "Доктор компьютерных наук, эксперт в области искусственного интеллекта и машинного обучения.",
    image: "/assets/images/olga-olga.png",
  },
];

const historyMilestones = [
  {
    year: "2005",
    title: "Основание университета",
    description:
      "Extra University был основан группой энтузиастов с целью создания инновационного образовательного учреждения.",
  },
  {
    year: "2010",
    title: "Открытие первого факультета",
    description:
      "Начал работу факультет информационных технологий, положивший начало стремительному развитию университета.",
  },
  {
    year: "2015",
    title: "Международное признание",
    description:
      "Extra University вошел в топ-500 лучших университетов мира по версии QS World University Rankings.",
  },
  {
    year: "2020",
    title: "Расширение кампуса",
    description:
      "Открытие нового современного кампуса с передовой инфраструктурой и оборудованием.",
  },
  {
    year: "2023",
    title: "Инновационные программы",
    description:
      "Запуск уникальных междисциплинарных программ на стыке технологий, бизнеса и гуманитарных наук.",
  },
];

const achievements = [
  {
    id: "achievement-1",
    title: "5 звезд QS Stars",
    description:
      "Высший рейтинг качества образования от международной рейтинговой системы QS Stars.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="8m:.c8d"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          data-oid="tjpc5v7"
        />
      </svg>
    ),
  },
  {
    id: "achievement-2",
    title: "Лучший IT университет",
    description:
      "Признан лучшим университетом в области информационных технологий по версии Tech Education Awards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="xuybvz."
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          data-oid="sv_0icu"
        />
      </svg>
    ),
  },
  {
    id: "achievement-3",
    title: "Научная премия",
    description:
      "Награда за выдающиеся исследования в области искусственного интеллекта и машинного обучения.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="xybi-ca"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
          data-oid="-br0toq"
        />
      </svg>
    ),
  },
  {
    id: "achievement-4",
    title: "Экологическая инициатива",
    description:
      "Признание за реализацию экологически устойчивых практик и зеленую инфраструктуру кампуса.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="xx31hvp"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          data-oid="znf89z0"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
      data-oid="iqrfwqk"
    >
      <div
        className="bg-blue-500 pt-20 pb-24 relative overflow-hidden"
        data-oid="35d:897"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-oid="0kup2sg"
        >
          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-24 mb-12 md:mb-16"
            data-oid="hruz54e"
          >
            <div className="text-center" data-oid="kf-ttp7">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                data-oid="bj.z4zz"
              >
                О нас
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-3xl mx-auto"
                data-oid="_d2qx_k"
              >
                <p className="text-white/90 text-lg" data-oid="_tfgh_-">
                  Extra University — это место, где традиции высшего образования
                  сочетаются с инновациями и современными технологиями.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" data-oid="6lh.97n">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            data-oid="i.w7x0q"
          >
            <rect width="1440" height="100" fill="#ffffff" data-oid="z75yie:" />
          </svg>
        </div>
      </div>
      <motion.div variants={itemVariants} className="py-16" data-oid="kx8:pmv">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="8u531g3"
        >
          <div className="grid md:grid-cols-2 gap-10" data-oid="woejf.i">
            <div data-oid="z:4cicb">
              <h2
                className="text-3xl font-bold text-gray-900 mb-6"
                data-oid="7vfe_3y"
              >
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-4" data-oid="tdft24u">
                Миссия Extra University — предоставлять высококачественное
                образование, которое вдохновляет студентов и дает им навыки и
                знания, необходимые для решения глобальных проблем и создания
                позитивных изменений в обществе.
              </p>
              <p className="text-lg text-gray-600" data-oid="w7xh9bo">
                Мы стремимся подготовить следующее поколение лидеров, которые
                смогут эффективно справляться с вызовами будущего, применяя
                междисциплинарный подход к решению проблем.
              </p>
            </div>
            <div data-oid="3ut190-">
              <h2
                className="text-3xl font-bold text-gray-900 mb-6"
                data-oid="g71o2t1"
              >
                Наше видение
              </h2>
              <p className="text-lg text-gray-600 mb-4" data-oid="s.f.v51">
                Мы видим Extra University как ведущий инновационный университет,
                признанный во всем мире за академическое превосходство,
                исследовательскую деятельность и вклад в общество.
              </p>
              <p className="text-lg text-gray-600" data-oid="8.2gm9-">
                Мы стремимся создать образовательную среду, которая отражает
                разнообразие мирового сообщества, поощряет критическое мышление
                и способствует междисциплинарному сотрудничеству.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* History Timeline */}
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gray-50"
        data-oid="xna6e7i"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="bl972su"
        >
          <div className="text-center mb-16" data-oid="wkdcpsf">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="r89l52b"
            >
              История университета
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="ws_gx_x"
            >
              Более 18 лет инноваций и академического превосходства
            </p>
          </div>

          <div className="relative" data-oid="je4c9v-">
            {/* Timeline line */}
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"
              data-oid="k_02k2a"
            ></div>

            {/* Timeline items */}
            {historyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`mb-12 md:mb-0 relative ${index % 2 === 0 ? "md:pb-20" : "md:pt-20"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="6h.87fv"
              >
                <div
                  className={`flex md:justify-between items-center ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}
                  data-oid="3yu442j"
                >
                  <div
                    className="md:w-5/12 p-6 bg-white rounded-xl shadow-md"
                    data-oid="pbhi8ze"
                  >
                    <div
                      className="text-blue-500 font-bold text-xl mb-2"
                      data-oid="pk:.li_"
                    >
                      {milestone.year}
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-800 mb-2"
                      data-oid=".ogip2-"
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600" data-oid="ease2qe">
                      {milestone.description}
                    </p>
                  </div>

                  <div
                    className="hidden md:block w-2/12 relative"
                    data-oid="hq41l6-"
                  >
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"
                      data-oid="0g9zm4x"
                    ></div>
                  </div>

                  <div className="md:w-5/12" data-oid="2ue1fxj"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="py-16" data-oid="sg3nc:x">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid=".gkscwm"
        >
          <div className="text-center mb-16" data-oid="ytxrdl9">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="7146q5q"
            >
              Наша команда
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="ucy2s-g"
            >
              Опытные специалисты и профессионалы своего дела, преданные идее
              развития образования
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="t1s9dsu"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="7ee-l54"
              >
                <div className="aspect-w-16 aspect-h-9 h-48" data-oid="aouolsh">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-oid="p:m9ri9"
                  />
                </div>
                <div className="p-6" data-oid="i-xz9mp">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-1"
                    data-oid="tzvio14"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-blue-500 font-medium mb-3"
                    data-oid="uhf8y1q"
                  >
                    {member.position}
                  </p>
                  <p className="text-gray-600" data-oid="2su.36.">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gray-50"
        data-oid=":p-9dww"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="h_vfg02"
        >
          <div className="text-center mb-16" data-oid="ug3z11a">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="4sz2s5k"
            >
              Достижения и награды
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="10j-scb"
            >
              Extra University получил признание за высокое качество образования
              и инновационный подход
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="-b4qbqw"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="bg-white rounded-xl shadow-md p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="agdlyoj"
              >
                <div
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4"
                  data-oid="ymbub7x"
                >
                  {achievement.icon}
                </div>
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-oid="a78o.-s"
                >
                  {achievement.title}
                </h3>
                <p className="text-gray-600" data-oid="padggyi">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white py-16"
        data-oid="_vkz19f"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="z-.l2ak"
        >
          <div className="text-center" data-oid="b8dyim4">
            <h2
              className="text-3xl font-bold text-blue-600 mb-6"
              data-oid="7_t0thw"
            >
              Станьте частью нашей истории
            </h2>
            <p
              className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto"
              data-oid="67xssn8"
            >
              Присоединяйтесь к Extra University и внесите свой вклад в создание
              будущего образования.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              data-oid="11e6pd0"
            >
              <Link
                href="/admission"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                data-oid="cshdzh7"
              >
                Подать заявку
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                data-oid="bxoeo1_"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
