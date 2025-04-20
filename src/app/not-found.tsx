"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16"
      data-oid="23y--q6"
    >
      <div className="max-w-3xl mx-auto text-center" data-oid="oesm8pm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-oid="3srolcb"
        >
          <div className="mb-8" data-oid="082130h">
            <h1 className="text-blue-600 font-bold text-9xl" data-oid="l-pvv7f">
              404
            </h1>
            <div
              className="h-2 w-16 bg-blue-600 mx-auto my-6"
              data-oid="g4is351"
            ></div>
            <h2
              className="text-gray-800 text-3xl font-bold mb-4"
              data-oid="pfoknpz"
            >
              Страница не найдена
            </h2>
            <p
              className="text-gray-600 text-lg mb-8 max-w-md mx-auto"
              data-oid="l9i27:7"
            >
              Извините, но страница, которую вы ищете, не существует или была
              перемещена.
            </p>
          </div>

          <div className="mb-8" data-oid=":pyghgh">
            <svg
              className="w-48 h-48 mx-auto text-blue-600 opacity-20"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="0mn38p:"
            >
              <path
                d="M10.975 8L11 7.5C11 6.12 12.12 5 13.5 5C14.88 5 16 6.12 16 7.5C16 8.88 14.88 10 13.5 10H2V12H13.5C15.985 12 18 9.985 18 7.5C18 5.015 15.985 3 13.5 3C11.015 3 9 5.015 9 7.5L9.025 8H10.975Z"
                data-oid="8:-s-uy"
              />

              <path
                d="M22 12L13.5 12V10L17.5 10V8.975L14.025 8.975L14 8.5C14 7.12 15.12 6 16.5 6C17.88 6 19 7.12 19 8.5C19 9.88 17.88 11 16.5 11H5V13H16.5C18.985 13 21 10.985 21 8.5C21 6.015 18.985 4 16.5 4C14.015 4 12 6.015 12 8.5L12.025 9L22 9V12Z"
                data-oid=".5tt664"
              />

              <path d="M2 15H16V17H2V15Z" data-oid="b-fa_j2" />
              <path d="M5 18H22V20H5V18Z" data-oid="q8wqb2w" />
            </svg>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            data-oid="-cpfhf:"
          >
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              data-oid="zrgp.iw"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="in7s18u"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"
                  data-oid="5ta7xxf"
                />
              </svg>
              Вернуться на главную
            </Link>
          </motion.div>

          <div className="mt-12" data-oid="z.r35:h">
            <p className="text-gray-500" data-oid="fq:gadg">
              Быстрые ссылки:
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 mt-3"
              data-oid="_6of4o:"
            >
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                data-oid="-i6-369"
              >
                О нас
              </Link>
              <Link
                href="/programs"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                data-oid="qtgla8:"
              >
                Программы
              </Link>
              <Link
                href="/admission"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                data-oid="5lr275g"
              >
                Поступление
              </Link>
              <Link
                href="/contacts"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                data-oid="7g7iqnz"
              >
                Контакты
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
