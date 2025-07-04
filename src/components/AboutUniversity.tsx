"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUniversity() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
      className="w-full"
      data-oid="p77457l"
    >
      <div
        className="flex flex-col justify-center items-center pt-52  px-4"
        data-oid="3rubm-y"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          data-oid="8e2yfa:"
        >
          <h1 className="text-black" data-oid="8v4w6yw">
            «
            <span className="text-blue-500" data-oid="dmmicvv">
              Extra University
            </span>
            » – это больше, чем просто ВУЗ
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 sm:mt-8 md:mt-12 w-full max-w-6xl"
          data-oid="ek.w-lc"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-500 text-white shadow-md rounded-lg w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-4 sm:py-6 text-base sm:text-lg md:text-xl font-normal"
            data-oid="6702-11"
          >
            <p data-oid="--5:h-d">
              Мы создаём сообщество единомышленников, где каждый студент
              получает возможность воплотить свои идеи в жизнь.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white text-black shadow-md shadow-blue-300 rounded-lg w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-4 sm:py-6 text-base sm:text-lg md:text-xl font-normal"
            data-oid=".n.bq0o"
          >
            <p data-oid="5jj66ve">
              <span className="font-bold" data-oid="cdaa2oc">
                Наша миссия
              </span>{" "}
              – прививать любовь к знаниям, развивать практический склад ума и
              вдохновлять на достижение амбициозных целей.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-1 shadow-lg shadow-blue-200 rounded-lg w-full max-w-6xl mt-6 sm:mt-8 md:mt-12 flex flex-col md:flex-row gap-8 p-4 md:p-8"
          data-oid="jx:e1rm"
        >
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center md:justify-start relative"
            data-oid="8f9tvsj"
          >
            <Image
              className="scale-118 mb-1.5"
              src="assets/images/student.svg"
              width="298"
              height="430"
              alt="student"
              data-oid="rp0-2aq"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between py-4 sm:py-6 md:py-12"
            data-oid="zo8io97"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black"
              data-oid="ciuzwq5"
            >
              Найдите вашу <br data-oid="9-d:hia" />
              программу
            </h1>
            <div className="relative mt-4 sm:mt-8" data-oid="80bpg9p">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Поиск академических программ..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-oid="geiv5xo"
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 cursor-pointer transition-all duration-500"
                data-oid="n6abc.h"
              >
                <Search data-oid="so1wg7o" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
