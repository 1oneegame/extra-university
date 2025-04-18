'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

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

const ContactsPage: React.FC = () => {
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
                                Контакты
                            </motion.h1>
                            <TypeAnimation
                                sequence={[
                                    'Свяжитесь с нами...',
                                    1000,
                                    'Мы всегда на связи...',
                                    1000,
                                    'Ответим на ваши вопросы...',
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
                                    Мы всегда на связи и готовы ответить на любые вопросы о поступлении, 
                                    обучении и других аспектах университетской жизни.
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
                <motion.div 
                    variants={containerVariants}
                    className="bg-white rounded-xl overflow-hidden shadow-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <div className="lg:col-span-2 bg-blue-500 p-8 lg:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <svg width="100%" height="100%" viewBox="0 0 800 800">
                                    <defs>
                                        <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(45)">
                                            <rect x="9" y="9" width="2" height="2" fill="white" />
                                        </pattern>
                                    </defs>
                                    <rect width="800" height="800" fill="url(#dotPattern)" />
                                </svg>
                            </div>
                            
                            <motion.div variants={itemVariants} className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-8">Наши контакты</h2>
                                
                                <div className="space-y-6 text-white">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Телефон</h3>
                                            <p className="mt-1">
                                                <a href="tel:+77777777777" className="text-blue-100 hover:text-white transition-colors">
                                                    +7 (777) 777-77-77
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Email</h3>
                                            <p className="mt-1">
                                                <a href="mailto:info@extra-university.edu" className="text-blue-100 hover:text-white transition-colors">
                                                    info@extra-university.edu
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-400 bg-opacity-30 flex items-center justify-center text-white mr-4">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Адрес</h3>
                                            <p className="mt-1 text-blue-100">
                                                Алматы, Extra University
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-12">
                                    <h3 className="text-lg font-medium text-white mb-4">Время работы</h3>
                                    <table className="w-full text-left">
                                        <tbody>
                                            <tr className="border-b border-blue-400 border-opacity-30">
                                                <td className="py-2 text-blue-100">Понедельник - Пятница</td>
                                                <td className="py-2 text-right text-white">9:00 - 18:00</td>
                                            </tr>
                                            <tr className="border-b border-blue-400 border-opacity-30">
                                                <td className="py-2 text-blue-100">Суббота</td>
                                                <td className="py-2 text-right text-white">10:00 - 15:00</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 text-blue-100">Воскресенье</td>
                                                <td className="py-2 text-right text-white">Выходной</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-3 p-8 lg:p-12">
                            <motion.div variants={itemVariants}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Отправить сообщение</h2>
                                
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Ваш email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            required
                                        >
                                            <option value="">Выберите тему</option>
                                            <option value="admission">Поступление</option>
                                            <option value="programs">Учебные программы</option>
                                            <option value="other">Другое</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ваше сообщение</label>
                                        <textarea
                                            id="message"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            rows={5}
                                            required
                                        />
                                    </div>
                                    
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                >
                    <div className="w-full h-80 bg-blue-50 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-3">
                                <div className="h-12 w-12 rounded-full bg-blue-500 mx-auto flex items-center justify-center">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Наше местоположение</h3>
                                <p className="text-gray-600 max-w-md">Алматы, Extra University</p>
                                <a 
                                    href="https://maps.google.com/?q=әлі+Алматы" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    <span>Открыть в Google Maps</span>
                                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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