"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

const ContactsPage: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
      data-oid="_11o6sz"
    >
      <div
        className="bg-blue-500 pt-20 pb-24 relative overflow-hidden"
        data-oid="9gkmy81"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-oid="t8:jyqm"
        >
          <motion.div
            variants={itemVariants}
            className="mt-20 md:mt-24 mb-12 md:mb-16"
            data-oid="vq3mb4j"
          >
            <div className="text-center" data-oid="z183gmo">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                data-oid="p6po5v2"
              >
                Контакты
              </motion.h1>
              <TypeAnimation
                sequence={[
                  "Свяжитесь с нами...",
                  1000,
                  "Мы всегда на связи...",
                  1000,
                  "Ответим на ваши вопросы...",
                  1000,
                ]}
                wrapper="h2"
                speed={10}
                className="text-2xl sm:text-3xl md:text-4xl text-white font-medium"
                repeat={Infinity}
                data-oid="ricg5v0"
              />

              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-2xl mx-auto"
                data-oid="v9-l78f"
              >
                <p className="text-white/90 text-lg" data-oid="pr:t0e7">
                  Мы всегда на связи и готовы ответить на любые вопросы о
                  поступлении, обучении и других аспектах университетской жизни.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" data-oid="010fzrb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            data-oid="6cf1d12"
          >
            <rect width="1440" height="100" fill="#ffffff" data-oid="tm-u683" />
          </svg>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        data-oid=".dm3l-6"
      >
        <motion.div
          variants={containerVariants}
          className="bg-white rounded-xl overflow-hidden shadow-xl"
          data-oid="h66xsn4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5" data-oid="cde_4si">
            <div
              className="lg:col-span-2 bg-blue-500 p-8 lg:p-12 relative overflow-hidden"
              data-oid="2cu8r1q"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-10"
                data-oid="i_3bd-_"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 800"
                  data-oid="q58_45a"
                >
                  <defs data-oid="eqprxko">
                    <pattern
                      id="dotPattern"
                      patternUnits="userSpaceOnUse"
                      width="20"
                      height="20"
                      patternTransform="scale(2) rotate(45)"
                      data-oid="huq07d1"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="2"
                        height="2"
                        fill="white"
                        data-oid="5926acd"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="800"
                    height="800"
                    fill="url(#dotPattern)"
                    data-oid="my-z5bn"
                  />
                </svg>
              </div>

              <motion.div
                variants={itemVariants}
                className="relative z-10"
                data-oid="9x7waku"
              >
                <h2
                  className="text-2xl font-bold text-white mb-8"
                  data-oid="2.i85ue"
                >
                  Наши контакты
                </h2>

                <div className="space-y-6 text-white" data-oid="25rj0st">
                  <div className="flex items-start" data-oid="bl.ajn3">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4"
                      data-oid="d9h-om4"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="aj8di76"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          data-oid="dsgaj6e"
                        />
                      </svg>
                    </div>
                    <div data-oid="n.de1f3">
                      <h3
                        className="text-lg font-medium text-white"
                        data-oid="5h9r0ew"
                      >
                        Телефон
                      </h3>
                      <p className="mt-1" data-oid="7asa4ag">
                        <a
                          href="tel:+77777777777"
                          className="text-blue-100 hover:text-white transition-colors"
                          data-oid="9gx2m60"
                        >
                          +7 (777) 777-77-77
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-oid="cndxeqh">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4"
                      data-oid="kjp068k"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="rh3ey.u"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          data-oid="sqdm567"
                        />
                      </svg>
                    </div>
                    <div data-oid="--s315e">
                      <h3
                        className="text-lg font-medium text-white"
                        data-oid="yfw8:cu"
                      >
                        Email
                      </h3>
                      <p className="mt-1" data-oid="nu3f_vf">
                        <a
                          href="mailto:info@extra-university.edu"
                          className="text-blue-100 hover:text-white transition-colors"
                          data-oid="vu5k4:e"
                        >
                          info@extra-university.edu
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-oid="g86dn4z">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4"
                      data-oid="ptxsi2-"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="g5_8r:6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          data-oid="mq0.7bb"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          data-oid="kj4l9dm"
                        />
                      </svg>
                    </div>
                    <div data-oid="0ar5m4p">
                      <h3
                        className="text-lg font-medium text-white"
                        data-oid="e20cf4h"
                      >
                        Адрес
                      </h3>
                      <p className="mt-1 text-blue-100" data-oid="1dkui9d">
                        Алматы, Extra University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12" data-oid="80ikd0-">
                  <h3
                    className="text-lg font-medium text-white mb-4"
                    data-oid="7fjadoq"
                  >
                    Время работы
                  </h3>
                  <table className="w-full text-left" data-oid="9sc7:ix">
                    <tbody data-oid="5ano_-b">
                      <tr
                        className="border-b border-blue-400 border-opacity-30"
                        data-oid="9qhh437"
                      >
                        <td className="py-2 text-blue-100" data-oid="8niyzf.">
                          Понедельник - Пятница
                        </td>
                        <td
                          className="py-2 text-right text-white"
                          data-oid="hm8rih6"
                        >
                          9:00 - 18:00
                        </td>
                      </tr>
                      <tr
                        className="border-b border-blue-400 border-opacity-30"
                        data-oid="aeg5afg"
                      >
                        <td className="py-2 text-blue-100" data-oid="hu-ig3u">
                          Суббота
                        </td>
                        <td
                          className="py-2 text-right text-white"
                          data-oid="f8r..h."
                        >
                          10:00 - 15:00
                        </td>
                      </tr>
                      <tr data-oid="nww606p">
                        <td className="py-2 text-blue-100" data-oid="tf.e0uy">
                          Воскресенье
                        </td>
                        <td
                          className="py-2 text-right text-white"
                          data-oid="h4:ktj1"
                        >
                          Выходной
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3 p-8 lg:p-12" data-oid="8xlm0r4">
              <motion.div variants={itemVariants} data-oid="sp00.66">
                <h2
                  className="text-2xl font-bold text-gray-800 mb-6"
                  data-oid="kb7.g5c"
                >
                  Отправить сообщение
                </h2>

                <form className="space-y-6" data-oid="p4i9oit">
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid="c:5240e"
                  >
                    <div data-oid="cl2bd32">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="rl__qsy"
                      >
                        Ваше имя
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pt-[12px]"
                        required
                        data-oid="owz1e4e"
                      />
                    </div>
                    <div data-oid="h8t2i-c">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                        data-oid="t3dzzii"
                      >
                        Ваш email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pt-[12px]"
                        required
                        data-oid="s00jpe3"
                      />
                    </div>
                  </div>

                  <div data-oid="0v-3iu6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="pje3zwc"
                    >
                      Тема
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                      data-oid="5wb91id"
                    >
                      <option value="" data-oid="1wz_jt.">
                        Выберите тему
                      </option>
                      <option value="admission" data-oid="rs54ao6">
                        Поступление
                      </option>
                      <option value="programs" data-oid="y3a1m:3">
                        Учебные программы
                      </option>
                      <option value="other" data-oid="9.-86s4">
                        Другое
                      </option>
                    </select>
                  </div>

                  <div data-oid="z64jcsh">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="9p2:k.w"
                    >
                      Ваше сообщение
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows={5}
                      required
                      data-oid="zt1j7rt"
                    />
                  </div>

                  <div className="pt-2" data-oid="jn0yptu">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      data-oid="85o-uz-"
                    >
                      Отправить сообщение
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden"
          data-oid="emo:61w"
        >
          <div className="w-full h-80 bg-blue-50 relative" data-oid="uxcjgda">
            <div
              className="absolute inset-0 flex items-center justify-center"
              data-oid="w3_3ebl"
            >
              <div className="text-center space-y-3" data-oid="obm0jgk">
                <div
                  className="h-12 w-12 rounded-full bg-blue-500 mx-auto flex items-center justify-center"
                  data-oid=".ybv6f:"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="0lwt6-."
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      data-oid="6_9k_p2"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      data-oid="ub:qg0c"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-medium text-gray-900"
                  data-oid="qcnfbmq"
                >
                  Наше местоположение
                </h3>
                <p className="text-gray-600 max-w-md" data-oid="4h:31:r">
                  Алматы, Extra University
                </p>
                <a
                  href="https://maps.google.com/?q=әлі+Алматы"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  data-oid="txglflc"
                >
                  <span data-oid="y_q0ze3">Открыть в Google Maps</span>
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="ba503oq"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      data-oid=":5foc33"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactsPage;
