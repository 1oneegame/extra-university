'use client'
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AdmissionPage() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden"
        >
            <div className="bg-blue-500 pt-20 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        variants={itemVariants}
                        className="mt-20 md:mt-24 mb-12 md:mb-16"
                    >
                        <div className="text-center">
                            <motion.h1 
                                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Поступление в Extra University
                            </motion.h1>
                            <TypeAnimation
                                sequence={[
                                    'Ваш путь к успеху...',
                                    1000,
                                    'Будущее начинается здесь...',
                                    1000,
                                    'Образование мирового уровня...',
                                    1000,
                                ]}
                                wrapper="h2"
                                speed={10}
                                className="text-2xl sm:text-3xl md:text-4xl text-white font-medium"
                                repeat={Infinity}
                            />
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 max-w-2xl mx-auto"
                            >
                                <p className="text-white/90 text-lg">
                                    Начните свой академический путь в одном из ведущих университетов. Мы предлагаем прозрачный процесс поступления и готовы помочь вам на каждом этапе.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                        <rect width="1440" height="100" fill="#ffffff" />
                    </svg>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div variants={itemVariants} className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
                            Процесс поступления
                            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"></span>
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-blue-500 hidden md:block"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    step: '01',
                                    title: 'Подача документов',
                                    description: 'Соберите необходимые документы и подайте заявку онлайн или в приемную комиссию университета.',
                                    icon: '/assets/images/document-icon.svg'
                                },
                                {
                                    step: '02',
                                    title: 'Вступительные испытания',
                                    description: 'Пройдите вступительные экзамены или предоставьте результаты ЕНТ для зачисления.',
                                    icon: '/assets/images/exam-icon.svg'
                                },
                                {
                                    step: '03',
                                    title: 'Зачисление',
                                    description: 'После успешного прохождения всех этапов, вы будете зачислены в Extra University.',
                                    icon: '/assets/images/success-icon.svg'
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="relative z-1"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 h-full transition-all duration-300 border-b-4 border-blue-500">
                                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto md:mx-0">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center md:text-left">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-center md:text-left">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
                            Необходимые документы
                            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"></span>
                        </h2>
                    </div>
                    <div className="bg-blue-50 p-8 md:p-10 rounded-2xl shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-8">
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">Документ, удостоверяющий личность (удостоверение или паспорт)</span>
                            </div>
                            
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">Медицинская справка (форма 086/у)</span>
                            </div>
                            
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">Документ о среднем образовании (аттестат, диплом)</span>
                            </div>
                            
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">6 фотографий размером 3x4</span>
                            </div>
                            
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">Сертификат ЕНТ (при наличии)</span>
                            </div>
                            
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">✓</span>
                                <span className="text-gray-700">Документы, подтверждающие особый статус (при наличии)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
                            Сроки приема
                            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"></span>
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="bg-blue-500 text-white">
                                        <th className="py-4 px-6 text-left text-lg font-semibold">Этап</th>
                                        <th className="py-4 px-6 text-left text-lg font-semibold">Начало</th>
                                        <th className="py-4 px-6 text-left text-lg font-semibold">Окончание</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                        <td className="py-5 px-6 font-medium text-gray-800">Прием документов</td>
                                        <td className="py-5 px-6 text-gray-600">1 июня 2024</td>
                                        <td className="py-5 px-6 text-gray-600">20 августа 2024</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                        <td className="py-5 px-6 font-medium text-gray-800">Вступительные экзамены</td>
                                        <td className="py-5 px-6 text-gray-600">5 июля 2024</td>
                                        <td className="py-5 px-6 text-gray-600">25 августа 2024</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors">
                                        <td className="py-5 px-6 font-medium text-gray-800">Зачисление</td>
                                        <td className="py-5 px-6 text-gray-600">25 августа 2024</td>
                                        <td className="py-5 px-6 text-gray-600">31 августа 2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="bg-blue-500 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Остались вопросы?</h2>
                                <p className="text-white text-lg mb-8">
                                    Свяжитесь с приемной комиссией для получения дополнительной информации о процессе поступления.
                                </p>
                                <div className="space-y-4 text-white">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        +7 (777) 123-45-67
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        admission@extrauniversity.kz
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 md:p-12">
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="Ваше имя" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input 
                                        type="tel" 
                                        placeholder="Ваш телефон" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Ваш email" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <textarea 
                                        placeholder="Ваш вопрос" 
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg">
                                        Отправить запрос
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
                            Часто задаваемые вопросы
                            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500"></span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                question: 'Какие программы обучения доступны?',
                                answer: 'Мы предлагаем широкий спектр программ бакалавриата, магистратуры и докторантуры в различных областях знаний.'
                            },
                            {
                                question: 'Предоставляет ли университет общежитие?',
                                answer: 'Да, университет предоставляет комфортабельные общежития для иногородних студентов.'
                            },
                            {
                                question: 'Есть ли доступные стипендии?',
                                answer: 'Университет предлагает различные стипендиальные программы для талантливых студентов и студентов с особыми потребностями.'
                            },
                            {
                                question: 'Когда начинается учебный год?',
                                answer: 'Учебный год начинается 1 сентября. Ориентационная неделя для новых студентов проводится в последнюю неделю августа.'
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-blue-500"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.question}</h3>
                                <p className="text-gray-600">{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
        </div>
        </motion.div>
    );
}