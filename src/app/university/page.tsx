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

const campusFacilities = [
  {
    id: "facility-1",
    title: "Современные аудитории",
    description:
      "Технологически оснащенные аудитории с интерактивными досками, проекторами и комфортной мебелью.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="7h1siy-"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          data-oid="2g8u.w-"
        />
      </svg>
    ),
  },
  {
    id: "facility-2",
    title: "Научные лаборатории",
    description:
      "Специализированные лаборатории для исследований в области компьютерных наук, инженерии и естественных наук.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="kt.ic07"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.75 14.5M15 3.186a23.001 23.001 0 0 1 4.5 1.31"
          data-oid="0-b01.4"
        />
      </svg>
    ),
  },
  {
    id: "facility-3",
    title: "Библиотека и медиатека",
    description:
      "Обширная коллекция печатных и электронных ресурсов, включая доступ к ведущим мировым научным базам данных.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="h9r4r_h"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          data-oid=":v0v-a5"
        />
      </svg>
    ),
  },
  {
    id: "facility-4",
    title: "Студенческий центр",
    description:
      "Многофункциональное пространство для обучения, отдыха, проведения мероприятий и внеучебной деятельности.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="d_plqn7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          data-oid="w:agcuc"
        />
      </svg>
    ),
  },
  {
    id: "facility-5",
    title: "Спортивный комплекс",
    description:
      "Современный спортивный центр с тренажерным залом, бассейном, теннисными кортами и другими спортивными площадками.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="xs8mwa."
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
          data-oid="a186ifz"
        />
      </svg>
    ),
  },
  {
    id: "facility-6",
    title: "IT-инфраструктура",
    description:
      "Высокоскоростной интернет, беспроводная сеть Wi-Fi, компьютерные классы и облачные сервисы для студентов и сотрудников.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        data-oid="vjk6.vf"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          data-oid="mkm3kbp"
        />
      </svg>
    ),
  },
];

const studentLifeItems = [
  {
    id: "student-life-1",
    title: "Студенческие клубы",
    description:
      "Более 40 студенческих клубов и организаций, от технических сообществ до творческих объединений и спортивных команд.",
    image: "/assets/images/extrauniversity-hall.svg",
  },
  {
    id: "student-life-2",
    title: "Культурные мероприятия",
    description:
      "Фестивали, концерты, выставки и другие культурные события, организуемые студентами и университетом.",
    image: "/assets/images/extrauniversity-outside.svg",
  },
  {
    id: "student-life-3",
    title: "Научные конференции",
    description:
      "Возможность участвовать в студенческих научных конференциях, хакатонах и исследовательских проектах.",
    image: "/assets/images/extrauniversity-hall.svg",
  },
];

const universityValues = [
  {
    id: "value-1",
    title: "Инновации",
    description:
      "Мы поощряем творческое мышление и внедрение новых технологий и подходов в образовании и исследованиях.",
    color: "bg-blue-500",
  },
  {
    id: "value-2",
    title: "Качество",
    description:
      "Мы стремимся к превосходству во всех аспектах нашей деятельности, от образовательных программ до исследовательских проектов.",
    color: "bg-purple-500",
  },
  {
    id: "value-3",
    title: "Открытость",
    description:
      "Мы создаем инклюзивную среду, где ценится разнообразие мнений, культур и подходов.",
    color: "bg-green-500",
  },
  {
    id: "value-4",
    title: "Сотрудничество",
    description:
      "Мы верим в силу партнерства и сотрудничества с студентами, выпускниками, промышленностью и обществом.",
    color: "bg-amber-500",
  },
];

export default function UniversityPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
      data-oid="ywo.-tj"
    >
      <div
        className="bg-blue-500 pt-20 pb-24 relative overflow-hidden"
        data-oid="ksi1:_4"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-oid="fhwfh34"
        >
          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-24 mb-12 md:mb-16"
            data-oid="prcafqz"
          >
            <div className="text-center" data-oid="k8:ojtf">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                data-oid="5ro6nae"
              >
                Наш университет
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-3xl mx-auto"
                data-oid="p2eqzn5"
              >
                <p className="text-white/90 text-lg" data-oid="62dtpps">
                  Extra University — это инновационное образовательное
                  пространство, объединяющее талантливых студентов, выдающихся
                  преподавателей и исследователей для создания будущего, которое
                  вдохновляет.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" data-oid="_-j0o36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            data-oid="0vobbwb"
          >
            <rect width="1440" height="100" fill="#ffffff" data-oid="v88-z8-" />
          </svg>
        </div>
      </div>
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        data-oid="3qbleoh"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-oid="5zf4tg7"
        >
          <div className="text-center" data-oid="egfukg7">
            <div
              className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
              data-oid="omoeo._"
            >
              5000+
            </div>
            <div className="text-gray-600" data-oid="hustqml">
              Студентов
            </div>
          </div>
          <div className="text-center" data-oid="yqyoe0.">
            <div
              className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
              data-oid="2e1dn3e"
            >
              300+
            </div>
            <div className="text-gray-600" data-oid="86dkh-4">
              Преподавателей
            </div>
          </div>
          <div className="text-center" data-oid="5f:fdxq">
            <div
              className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
              data-oid="vu6e.dy"
            >
              25+
            </div>
            <div className="text-gray-600" data-oid="b71fc9a">
              Программ обучения
            </div>
          </div>
          <div className="text-center" data-oid="-eixh05">
            <div
              className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
              data-oid="fgk633u"
            >
              50+
            </div>
            <div className="text-gray-600" data-oid="o0hb:nm">
              Международных партнеров
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gray-50"
        data-oid="he1:6s5"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ia24v_i"
        >
          <div className="text-center mb-16" data-oid="3d3zo4v">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="h.v2fsj"
            >
              Наш кампус
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="a:hiuyk"
            >
              Современный кампус Extra University создает идеальные условия для
              обучения, исследований и студенческой жизни.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="c3kwcx_"
          >
            {campusFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                className="bg-white rounded-xl shadow-md p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="niofer5"
              >
                <div
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4"
                  data-oid="5kqmw00"
                >
                  {facility.icon}
                </div>
                <h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  data-oid="psa_9b8"
                >
                  {facility.title}
                </h3>
                <p className="text-gray-600" data-oid="5mcwtr1">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="py-16" data-oid="3bsdrct">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="q51_q.8"
        >
          <div className="text-center mb-12" data-oid="hlp.6vp">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="gk7qsch"
            >
              Виртуальный тур
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600 mb-6"
              data-oid="6vae.l4"
            >
              Ознакомьтесь с нашим кампусом, не выходя из дома
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9" data-oid="bfeh06o">
            <div
              className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center"
              data-oid="2p.nc5d"
            >
              <div className="text-center" data-oid="1nk2l5o">
                <div className="mb-4" data-oid="v4sz3gp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-500 mx-auto"
                    data-oid="5m7-k4w"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      data-oid="wl309.:"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 mb-4" data-oid="6h8g.yi">
                  Виртуальный тур по кампусу Extra University
                </p>
                <button
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  data-oid="e2two2a"
                >
                  Начать виртуальный тур
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gray-50"
        data-oid="2u.-eih"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="bcxq_j:"
        >
          <div className="text-center mb-16" data-oid="tq-djz.">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="8gh9q29"
            >
              Наши ценности
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="hkvacna"
            >
              Основные принципы, которыми мы руководствуемся в нашей
              деятельности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-oid="_y4uo-l">
            {universityValues.map((value) => (
              <motion.div
                key={value.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="_:4px2u"
              >
                <div className={`w-3 ${value.color}`} data-oid="ujyt4j2"></div>
                <div className="p-6 flex-1" data-oid="q:_e53f">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="7dglmrt"
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600" data-oid="mffmutw">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="py-16" data-oid="q8st5pm">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="9csnbzv"
        >
          <div className="text-center mb-16" data-oid="1iy:pv6">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="svimx3l"
            >
              Студенческая жизнь
            </h2>
            <p
              className="max-w-3xl mx-auto text-lg text-gray-600"
              data-oid="amx4i-z"
            >
              В Extra University учеба — это только часть опыта. Мы создаем
              условия для разностороннего развития студентов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-oid="mex6w40">
            {studentLifeItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                data-oid="dv__g2."
              >
                <div className="aspect-w-16 aspect-h-9 h-48" data-oid="5c_bfh2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    data-oid="7lah5mx"
                  />
                </div>
                <div className="p-6" data-oid="80k6348">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    data-oid="svesy:9"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-oid="siqu_g4">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-medium hover:text-blue-600 transition-colors"
                    data-oid="4czvp_1"
                  >
                    Узнать больше →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white py-16"
        data-oid="a40m.63"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="uvuanra"
        >
          <div className="text-center" data-oid="gg4dx5k">
            <h2
              className="text-3xl font-bold text-blue-600 mb-6"
              data-oid="sv9jlza"
            >
              Готовы присоединиться к Extra University?
            </h2>
            <p
              className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto"
              data-oid="bg4.re9"
            >
              Откройте для себя преимущества обучения в одном из самых
              инновационных и динамично развивающихся университетов.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              data-oid="g35o0s5"
            >
              <Link
                href="/admission"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                data-oid="cryzq93"
              >
                Подать заявку
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                data-oid="4e1xnzd"
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
