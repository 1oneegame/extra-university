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

const teamMembers = [
    {
        id: 1,
        name: "Александр Петров",
        position: "Ректор",
        bio: "Доктор технических наук, профессор с 20-летним опытом управления образовательными учреждениями.",
        image: "/assets/images/extrauniversity-rector.svg"
    },
    {
        id: 2,
        name: "Елена Смирнова",
        position: "Проректор по учебной работе",
        bio: "Кандидат педагогических наук, автор инновационных образовательных методик и программ.",
        image: "/assets/images/extrauniversity-hall.svg"
    },
    {
        id: 3,
        name: "Михаил Иванов",
        position: "Проректор по науке",
        bio: "Доктор физико-математических наук, руководитель множества успешных научных проектов.",
        image: "/assets/images/extrauniversity-outside.svg"
    },
    {
        id: 4,
        name: "Ольга Козлова",
        position: "Декан IT факультета",
        bio: "Доктор компьютерных наук, эксперт в области искусственного интеллекта и машинного обучения.",
        image: "/assets/images/extrauniversity-hall.svg"
    }
];

const historyMilestones = [
    {
        year: "2005",
        title: "Основание университета",
        description: "Extra University был основан группой энтузиастов с целью создания инновационного образовательного учреждения."
    },
    {
        year: "2010",
        title: "Открытие первого факультета",
        description: "Начал работу факультет информационных технологий, положивший начало стремительному развитию университета."
    },
    {
        year: "2015",
        title: "Международное признание",
        description: "Extra University вошел в топ-500 лучших университетов мира по версии QS World University Rankings."
    },
    {
        year: "2020",
        title: "Расширение кампуса",
        description: "Открытие нового современного кампуса с передовой инфраструктурой и оборудованием."
    },
    {
        year: "2023",
        title: "Инновационные программы",
        description: "Запуск уникальных междисциплинарных программ на стыке технологий, бизнеса и гуманитарных наук."
    }
];

const achievements = [
    {
        id: "achievement-1",
        title: "5 звезд QS Stars",
        description: "Высший рейтинг качества образования от международной рейтинговой системы QS Stars.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        )
    },
    {
        id: "achievement-2",
        title: "Лучший IT университет",
        description: "Признан лучшим университетом в области информационных технологий по версии Tech Education Awards.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
        )
    },
    {
        id: "achievement-3",
        title: "Научная премия",
        description: "Награда за выдающиеся исследования в области искусственного интеллекта и машинного обучения.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
        )
    },
    {
        id: "achievement-4",
        title: "Экологическая инициатива",
        description: "Признание за реализацию экологически устойчивых практик и зеленую инфраструктуру кампуса.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        )
    }
];

export default function AboutPage() {
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
                                О нас
                            </motion.h1>
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 max-w-3xl mx-auto"
                            >
                                <p className="text-white/90 text-lg">
                                    Extra University — это место, где традиции высшего образования сочетаются с инновациями и современными технологиями.
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
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Миссия Extra University — предоставлять высококачественное образование, которое вдохновляет студентов 
                                и дает им навыки и знания, необходимые для решения глобальных проблем и создания позитивных изменений в обществе.
                            </p>
                            <p className="text-lg text-gray-600">
                                Мы стремимся подготовить следующее поколение лидеров, которые смогут эффективно справляться с вызовами будущего, 
                                применяя междисциплинарный подход к решению проблем.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наше видение</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Мы видим Extra University как ведущий инновационный университет, признанный во всем мире 
                                за академическое превосходство, исследовательскую деятельность и вклад в общество.
                            </p>
                            <p className="text-lg text-gray-600">
                                Мы стремимся создать образовательную среду, которая отражает разнообразие мирового сообщества, 
                                поощряет критическое мышление и способствует междисциплинарному сотрудничеству.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* History Timeline */}
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">История университета</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Более 18 лет инноваций и академического превосходства
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
                        
                        {/* Timeline items */}
                        {historyMilestones.map((milestone, index) => (
                            <motion.div 
                                key={milestone.year}
                                className={`mb-12 md:mb-0 relative ${index % 2 === 0 ? 'md:pb-20' : 'md:pt-20'}`}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`flex md:justify-between items-center ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}>
                                    <div className="md:w-5/12 p-6 bg-white rounded-xl shadow-md">
                                        <div className="text-blue-500 font-bold text-xl mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                    
                                    <div className="hidden md:block w-2/12 relative">
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                                    </div>
                                    
                                    <div className="md:w-5/12"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Опытные специалисты и профессионалы своего дела, преданные идее развития образования
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <motion.div 
                                key={member.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-w-16 aspect-h-9 h-48">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                    <p className="text-blue-500 font-medium mb-3">{member.position}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Достижения и награды</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Extra University получил признание за высокое качество образования и инновационный подход
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement) => (
                            <motion.div 
                                key={achievement.id}
                                className="bg-white rounded-xl shadow-md p-6"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">Станьте частью нашей истории</h2>
                        <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                            Присоединяйтесь к Extra University и внесите свой вклад в создание будущего образования.
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