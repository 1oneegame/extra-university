"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

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

export default function AdmissionPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
      data-oid="oeoafx."
    >
      <div
        className="bg-blue-500 pt-20 pb-24 relative overflow-hidden"
        data-oid="2d8lb3m"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-oid="u.15lb9"
        >
          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-24 mb-12 md:mb-16"
            data-oid="_9gx8s0"
          >
            <div className="text-center" data-oid=".9x9lw2">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                data-oid="ny74q_k"
              >
                Поступление в Extra University
              </motion.h1>
              <TypeAnimation
                sequence={[
                  "Ваш путь к успеху...",
                  1000,
                  "Будущее начинается здесь...",
                  1000,
                  "Образование мирового уровня...",
                  1000,
                ]}
                wrapper="h2"
                speed={10}
                className="text-2xl sm:text-3xl md:text-4xl text-white font-medium"
                repeat={Infinity}
                data-oid="wnhmayp"
              />

              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-2xl mx-auto"
                data-oid="dai0c1h"
              >
                <p className="text-white/90 text-lg" data-oid="ge51q4-">
                  Начните свой академический путь в одном из ведущих
                  университетов. Мы предлагаем прозрачный процесс поступления и
                  готовы помочь вам на каждом этапе.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" data-oid="7u-ptp8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            data-oid="nqfq0sw"
          >
            <rect width="1440" height="100" fill="#ffffff" data-oid="p65yaqp" />
          </svg>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        data-oid="8xhtgmi"
      >
        <motion.div
          variants={itemVariants}
          className="mb-20 md:mb-28"
          data-oid="orqno:b"
        >
          <div className="text-center mb-12" data-oid="04x6m7y">
            <h2
              className="text-3xl sm:text-4xl font-bold relative inline-block"
              data-oid="qyj8qqz"
            >
              Процесс поступления
              <span
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"
                data-oid="6hv2oob"
              ></span>
            </h2>
          </div>
          <div className="relative" data-oid="ius2:c9">
            <div
              className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-blue-500 hidden md:block"
              data-oid="k9_s:56"
            ></div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              data-oid="zpnxe_y"
            >
              {[
                {
                  step: "01",
                  title: "Подача документов",
                  description:
                    "Соберите необходимые документы и подайте заявку онлайн или в приемную комиссию университета.",
                  icon: "/assets/images/document-icon.svg",
                },
                {
                  step: "02",
                  title: "Вступительные испытания",
                  description:
                    "Пройдите вступительные экзамены или предоставьте результаты ЕНТ для зачисления.",
                  icon: "/assets/images/exam-icon.svg",
                },
                {
                  step: "03",
                  title: "Зачисление",
                  description:
                    "После успешного прохождения всех этапов, вы будете зачислены в Extra University.",
                  icon: "/assets/images/success-icon.svg",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative z-1"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  data-oid="0sxuglg"
                >
                  <div
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 h-full transition-all duration-300 border-b-4 border-blue-500"
                    data-oid="2984lv7"
                  >
                    <div
                      className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto md:mx-0"
                      data-oid="-zm:ycr"
                    >
                      {item.step}
                    </div>
                    <h3
                      className="text-xl font-semibold mb-4 text-gray-800 text-center md:text-left"
                      data-oid=":t_wbq9"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-600 leading-relaxed text-center md:text-left"
                      data-oid="tpwvuk9"
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-20 md:mb-28"
          data-oid="jlmc9hs"
        >
          <div className="text-center mb-12" data-oid="jq9jm_7">
            <h2
              className="text-3xl sm:text-4xl font-bold relative inline-block"
              data-oid="tr4-yy7"
            >
              Необходимые документы
              <span
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"
                data-oid="lkb453n"
              ></span>
            </h2>
          </div>
          <div
            className="bg-blue-50 p-8 md:p-10 rounded-2xl shadow-md"
            data-oid="2vg..fm"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-8"
              data-oid="o0prwrt"
            >
              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="4rb1du5"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="n1ggdfx"
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="6rr4h0_">
                  Документ, удостоверяющий личность (удостоверение или паспорт)
                </span>
              </div>

              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="z5o6bbi"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="bp3kve-"
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="6b.s1jt">
                  Медицинская справка (форма 086/у)
                </span>
              </div>

              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="xnh_u:a"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="9pbksty"
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="6uqqw_2">
                  Документ о среднем образовании (аттестат, диплом)
                </span>
              </div>

              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="1fhg9qi"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="od862u."
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="8fgfmnh">
                  6 фотографий размером 3x4
                </span>
              </div>

              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="q3cl_70"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="982mbdu"
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="wg245_h">
                  Сертификат ЕНТ (при наличии)
                </span>
              </div>

              <div
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                data-oid="f31cj6c"
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3"
                  data-oid="l45jnxu"
                >
                  ✓
                </span>
                <span className="text-gray-700" data-oid="a1:q9sb">
                  Документы, подтверждающие особый статус (при наличии)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-20 md:mb-28"
          data-oid="qu-0:0q"
        >
          <div className="text-center mb-12" data-oid="pl9il8w">
            <h2
              className="text-3xl sm:text-4xl font-bold relative inline-block"
              data-oid="q.74jik"
            >
              Сроки приема
              <span
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"
                data-oid="7r9e2r1"
              ></span>
            </h2>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500"
            data-oid="zjv2bjm"
          >
            <div className="overflow-x-auto" data-oid="3e5rx1i">
              <table className="min-w-full" data-oid="t8600s_">
                <thead data-oid=":3k1fvp">
                  <tr className="bg-blue-500 text-white" data-oid="det9bmw">
                    <th
                      className="py-4 px-6 text-left text-lg font-semibold"
                      data-oid="-0gq.t."
                    >
                      Этап
                    </th>
                    <th
                      className="py-4 px-6 text-left text-lg font-semibold"
                      data-oid="hzijw70"
                    >
                      Начало
                    </th>
                    <th
                      className="py-4 px-6 text-left text-lg font-semibold"
                      data-oid="zwfnwe2"
                    >
                      Окончание
                    </th>
                  </tr>
                </thead>
                <tbody data-oid="0.hb6pl">
                  <tr
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                    data-oid="o8qmxon"
                  >
                    <td
                      className="py-5 px-6 font-medium text-gray-800"
                      data-oid="ob.3yrh"
                    >
                      Прием документов
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid=":9cb-gy">
                      1 июня 2024
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid="jzpsct9">
                      20 августа 2024
                    </td>
                  </tr>
                  <tr
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                    data-oid="721q7ls"
                  >
                    <td
                      className="py-5 px-6 font-medium text-gray-800"
                      data-oid="5fvsh7f"
                    >
                      Вступительные экзамены
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid="jvehzv1">
                      5 июля 2024
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid="5nnsr1y">
                      25 августа 2024
                    </td>
                  </tr>
                  <tr
                    className="hover:bg-blue-50 transition-colors"
                    data-oid="v8iso0t"
                  >
                    <td
                      className="py-5 px-6 font-medium text-gray-800"
                      data-oid="1njjo6k"
                    >
                      Зачисление
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid="9ex149z">
                      25 августа 2024
                    </td>
                    <td className="py-5 px-6 text-gray-600" data-oid="rj9g.cp">
                      31 августа 2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-20"
          data-oid="y1n4l_m"
        >
          <div
            className="bg-blue-500 rounded-2xl overflow-hidden shadow-xl"
            data-oid="-4xu.97"
          >
            <div className="grid grid-cols-1 md:grid-cols-2" data-oid="p1zjq-o">
              <div
                className="p-8 md:p-12 flex flex-col justify-center"
                data-oid="thldr-8"
              >
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  data-oid="5jad_ky"
                >
                  Остались вопросы?
                </h2>
                <p className="text-white text-lg mb-8" data-oid="tcwajbk">
                  Свяжитесь с приемной комиссией для получения дополнительной
                  информации о процессе поступления.
                </p>
                <div className="space-y-4 text-white" data-oid="oz93g0o">
                  <div className="flex items-center" data-oid="2o.i0rj">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                      data-oid="ln:s77q"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        data-oid="-9rn3tw"
                      />
                    </svg>
                    +7 (777) 123-45-67
                  </div>
                  <div className="flex items-center" data-oid="nqnva83">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                      data-oid="0m2.9ni"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        data-oid="ukgt8bl"
                      />
                    </svg>
                    admission@extrauniversity.kz
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12" data-oid="6a2b48:">
                <div className="space-y-4" data-oid="q487:65">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="mt0dssk"
                  />

                  <input
                    type="tel"
                    placeholder="Ваш телефон"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="4ffqy6-"
                  />

                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="9gxno0a"
                  />

                  <textarea
                    placeholder="Ваш вопрос"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="k8e1o82"
                  ></textarea>
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                    data-oid=".qwwvyt"
                  >
                    Отправить запрос
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} data-oid="-c31_:5">
          <div className="text-center mb-12" data-oid="t0c:nju">
            <h2
              className="text-3xl sm:text-4xl font-bold relative inline-block"
              data-oid="_o09f8b"
            >
              Часто задаваемые вопросы
              <span
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"
                data-oid="akfxcrs"
              ></span>
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="4vxc-xo"
          >
            {[
              {
                question: "Какие программы обучения доступны?",
                answer:
                  "Мы предлагаем широкий спектр программ бакалавриата, магистратуры и докторантуры в различных областях знаний.",
              },
              {
                question: "Предоставляет ли университет общежитие?",
                answer:
                  "Да, университет предоставляет комфортабельные общежития для иногородних студентов.",
              },
              {
                question: "Есть ли доступные стипендии?",
                answer:
                  "Университет предлагает различные стипендиальные программы для талантливых студентов и студентов с особыми потребностями.",
              },
              {
                question: "Когда начинается учебный год?",
                answer:
                  "Учебный год начинается 1 сентября. Ориентационная неделя для новых студентов проводится в последнюю неделю августа.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-blue-500"
                whileHover={{ y: -5 }}
                data-oid="50_5se."
              >
                <h3
                  className="text-xl font-semibold mb-3 text-gray-800"
                  data-oid="qgz3:fc"
                >
                  {item.question}
                </h3>
                <p className="text-gray-600" data-oid="sizb3kv">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
