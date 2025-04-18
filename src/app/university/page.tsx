'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const campusFacilities = [
    {
        id: "facility-1",
        title: "Современные аудитории",
        description: "Технологически оснащенные аудитории с интерактивными досками, проекторами и комфортной мебелью.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>
        )
    },
    {
        id: "facility-2",
        title: "Научные лаборатории",
        description: "Специализированные лаборатории для исследований в области компьютерных наук, инженерии и естественных наук.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.75 14.5M15 3.186a23.001 23.001 0 0 1 4.5 1.31" />
            </svg>
        )
    },
    {
        id: "facility-3",
        title: "Библиотека и медиатека",
        description: "Обширная коллекция печатных и электронных ресурсов, включая доступ к ведущим мировым научным базам данных.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
        )
    },
    {
        id: "facility-4",
        title: "Студенческий центр",
        description: "Многофункциональное пространство для обучения, отдыха, проведения мероприятий и внеучебной деятельности.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        )
    },
    {
        id: "facility-5",
        title: "Спортивный комплекс",
        description: "Современный спортивный центр с тренажерным залом, бассейном, теннисными кортами и другими спортивными площадками.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
            </svg>
        )
    },
    {
        id: "facility-6",
        title: "IT-инфраструктура",
        description: "Высокоскоростной интернет, беспроводная сеть Wi-Fi, компьютерные классы и облачные сервисы для студентов и сотрудников.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
        )
    }
];

const studentLifeItems = [
    {
        id: "student-life-1",
        title: "Студенческие клубы",
        description: "Более 40 студенческих клубов и организаций, от технических сообществ до творческих объединений и спортивных команд.",
        image: "/assets/images/extrauniversity-hall.svg"
    },
    {
        id: "student-life-2",
        title: "Культурные мероприятия",
        description: "Фестивали, концерты, выставки и другие культурные события, организуемые студентами и университетом.",
        image: "/assets/images/extrauniversity-outside.svg"
    },
    {
        id: "student-life-3",
        title: "Научные конференции",
        description: "Возможность участвовать в студенческих научных конференциях, хакатонах и исследовательских проектах.",
        image: "/assets/images/extrauniversity-hall.svg"
    }
];

const universityValues = [
    {
        id: "value-1",
        title: "Инновации",
        description: "Мы поощряем творческое мышление и внедрение новых технологий и подходов в образовании и исследованиях.",
        color: "bg-blue-500"
    },
    {
        id: "value-2",
        title: "Качество",
        description: "Мы стремимся к превосходству во всех аспектах нашей деятельности, от образовательных программ до исследовательских проектов.",
        color: "bg-purple-500"
    },
    {
        id: "value-3",
        title: "Открытость",
        description: "Мы создаем инклюзивную среду, где ценится разнообразие мнений, культур и подходов.",
        color: "bg-green-500"
    },
    {
        id: "value-4",
        title: "Сотрудничество",
        description: "Мы верим в силу партнерства и сотрудничества с студентами, выпускниками, промышленностью и обществом.",
        color: "bg-amber-500"
    }
];

export default function UniversityPage() {
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
                                Наш университет
                            </motion.h1>
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 max-w-3xl mx-auto"
                            >
                                <p className="text-white/90 text-lg">
                                    Extra University — это инновационное образовательное пространство, объединяющее талантливых студентов, 
                                    выдающихся преподавателей и исследователей для создания будущего, которое вдохновляет.
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
            <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">5000+</div>
                        <div className="text-gray-600">Студентов</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">300+</div>
                        <div className="text-gray-600">Преподавателей</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">25+</div>
                        <div className="text-gray-600">Программ обучения</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">50+</div>
                        <div className="text-gray-600">Международных партнеров</div>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш кампус</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Современный кампус Extra University создает идеальные условия для обучения, исследований и студенческой жизни.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campusFacilities.map((facility) => (
                            <motion.div 
                                key={facility.id}
                                className="bg-white rounded-xl shadow-md p-6"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                                    {facility.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                                <p className="text-gray-600">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Виртуальный тур</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
                            Ознакомьтесь с нашим кампусом, не выходя из дома
                        </p>
                    </div>
                    
                    <div className="aspect-w-16 aspect-h-9">
                        <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 mx-auto">
                                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600 mb-4">Виртуальный тур по кампусу Extra University</p>
                                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                                    Начать виртуальный тур
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Основные принципы, которыми мы руководствуемся в нашей деятельности
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {universityValues.map((value) => (
                            <motion.div 
                                key={value.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden flex"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`w-3 ${value.color}`}></div>
                                <div className="p-6 flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Студенческая жизнь</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            В Extra University учеба — это только часть опыта. Мы создаем условия для разностороннего развития студентов.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {studentLifeItems.map((item) => (
                            <motion.div 
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-w-16 aspect-h-9 h-48">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <a href="#" className="text-blue-500 font-medium hover:text-blue-600 transition-colors">Узнать больше →</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Готовы присоединиться к Extra University?</h2>
                        <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                            Откройте для себя преимущества обучения в одном из самых инновационных и динамично развивающихся университетов.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/admission" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                Подать заявку
                            </Link>
                            <Link href="/contacts" className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                                Связаться с нами
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}