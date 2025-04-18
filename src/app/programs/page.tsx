'use client'
import React, { useState } from "react";
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

const programCategories = [
    {
        id: "bachelor",
        title: "Бакалавриат",
        description: "4-летние программы для получения базового высшего образования",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        )
    },
    {
        id: "master",
        title: "Магистратура",
        description: "2-летние программы для углубленной специализации и исследовательской деятельности",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        )
    },
    {
        id: "phd",
        title: "Докторантура",
        description: "3-4-летние программы для подготовки научных и педагогических кадров высшей квалификации",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
        )
    },
    {
        id: "courses",
        title: "Курсы и сертификационные программы",
        description: "Кратковременные программы для повышения квалификации и получения новых навыков",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
        )
    }
];

const programs = [
    {
        id: 1,
        title: "Компьютерные науки и искусственный интеллект",
        category: "bachelor",
        faculty: "Факультет информационных технологий",
        duration: "4 года",
        schedule: "Дневная форма обучения",
        description: "Программа включает изучение алгоритмов, структур данных, методов машинного обучения, нейронных сетей и обработки естественного языка.",
        image: "/assets/images/extrauniversity-hall.svg",
        features: [
            "Практические проекты с реальными данными",
            "Стажировки в ведущих IT-компаниях",
            "Возможность участия в международных соревнованиях"
        ]
    },
    {
        id: 2,
        title: "Цифровой бизнес и электронная коммерция",
        category: "bachelor",
        faculty: "Экономический факультет",
        duration: "4 года",
        schedule: "Дневная форма обучения",
        description: "Программа сочетает основы бизнеса с цифровыми технологиями, электронной коммерцией, маркетингом и управлением проектами.",
        image: "/assets/images/extrauniversity-outside.svg",
        features: [
            "Бизнес-симуляции и стартап-проекты",
            "Изучение современных бизнес-моделей",
            "Практика в компаниях электронной коммерции"
        ]
    },
    {
        id: 3,
        title: "Анализ данных и принятие решений",
        category: "master",
        faculty: "Факультет математики и аналитики",
        duration: "2 года",
        schedule: "Дневная/вечерняя форма обучения",
        description: "Магистерская программа для подготовки специалистов в области анализа данных, статистики и принятия решений на основе данных.",
        image: "/assets/images/extrauniversity-hall.svg",
        features: [
            "Углубленное изучение статистических методов",
            "Работа с большими данными",
            "Исследовательские проекты с партнерами-работодателями"
        ]
    },
    {
        id: 4,
        title: "Устойчивое развитие и экологический менеджмент",
        category: "master",
        faculty: "Факультет экологии и устойчивого развития",
        duration: "2 года",
        schedule: "Дневная форма обучения",
        description: "Программа направлена на подготовку специалистов в области устойчивого развития, экологического менеджмента и зеленой экономики.",
        image: "/assets/images/extrauniversity-outside.svg",
        features: [
            "Международные стажировки",
            "Проекты с экологическими организациями",
            "Возможность двойного диплома"
        ]
    },
    {
        id: 5,
        title: "Информационные технологии в образовании",
        category: "phd",
        faculty: "Факультет информационных технологий",
        duration: "3 года",
        schedule: "Гибкий график",
        description: "Докторская программа, исследующая применение информационных технологий в образовательном процессе и их влияние на обучение.",
        image: "/assets/images/extrauniversity-hall.svg",
        features: [
            "Исследовательская работа в области EdTech",
            "Возможность международных публикаций",
            "Участие в образовательных инновационных проектах"
        ]
    },
    {
        id: 6,
        title: "Разработка веб-приложений",
        category: "courses",
        faculty: "Центр дополнительного образования",
        duration: "6 месяцев",
        schedule: "Вечерняя форма/онлайн",
        description: "Интенсивный курс по разработке современных веб-приложений с использованием актуальных технологий и фреймворков.",
        image: "/assets/images/extrauniversity-hall.svg",
        features: [
            "Практический подход к обучению",
            "Итоговый проект для портфолио",
            "Помощь в трудоустройстве"
        ]
    },
    {
        id: 7,
        title: "Управление проектами в IT",
        category: "courses",
        faculty: "Центр дополнительного образования",
        duration: "4 месяца",
        schedule: "Вечерняя форма/онлайн",
        description: "Курс для тех, кто хочет освоить методологии управления проектами в сфере информационных технологий.",
        image: "/assets/images/extrauniversity-outside.svg",
        features: [
            "Сертификация PMI",
            "Кейсы от ведущих IT-компаний",
            "Networking с профессионалами отрасли"
        ]
    }
];

const testimonials = [
    {
        id: 1,
        text: "Программа 'Компьютерные науки и ИИ' превзошла все мои ожидания. Практические проекты и поддержка преподавателей помогли мне найти работу своей мечты еще до выпуска.",
        author: "Артем Соколов",
        role: "Выпускник 2023 года",
        program: "Бакалавриат"
    },
    {
        id: 2,
        text: "Магистратура по анализу данных дала мне глубокие знания и навыки, которые сразу же нашли применение в моей работе. Исследовательские проекты с реальными данными - это бесценный опыт.",
        author: "Елена Кузнецова",
        role: "Выпускница 2022 года",
        program: "Магистратура"
    },
    {
        id: 3,
        text: "Курс по веб-разработке помог мне полностью сменить профессию. За 6 месяцев я получил знания, которые уже применяю в новой работе веб-разработчиком.",
        author: "Максим Иванов",
        role: "Выпускник курса 2023 года",
        program: "Курсы"
    }
];

export default function ProgramsPage() {
    const [activeCategory, setActiveCategory] = useState("bachelor");
    
    const filteredPrograms = programs.filter(program => program.category === activeCategory);
    
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
                                Программы обучения
                            </motion.h1>
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 max-w-3xl mx-auto"
                            >
                                <p className="text-white/90 text-lg">
                                    Выбирайте из широкого спектра современных программ, разработанных в сотрудничестве с ведущими специалистами и компаниями
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
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Образовательные возможности</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            В Extra University вы найдете программы, соответствующие вашим целям и амбициям
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programCategories.map((category) => (
                            <motion.div 
                                key={category.id}
                                className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-50'}`}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <div className={`w-12 h-12 ${activeCategory === category.id ? 'bg-blue-400 text-white' : 'bg-blue-100 text-blue-500'} rounded-full flex items-center justify-center mb-4`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                <p className={activeCategory === category.id ? 'text-white/90' : 'text-gray-600'}>
                                    {category.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {programCategories.find(cat => cat.id === activeCategory)?.title || "Программы"}
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Изучите детали программ и выберите наиболее подходящую для вас
                        </p>
                    </div>
                    
                    <div className="grid gap-12">
                        {filteredPrograms.map((program) => (
                            <motion.div 
                                key={program.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0 md:w-1/3">
                                        <img 
                                            src={program.image} 
                                            alt={program.title} 
                                            className="h-48 w-full object-cover md:h-full"
                                        />
                                    </div>
                                    <div className="p-8 md:w-2/3">
                                        <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold mb-1">
                                            {program.faculty}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {program.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                {program.duration}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                {program.schedule}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            {program.description}
                                        </p>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 mb-2">Ключевые особенности:</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                {program.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-6">
                                            <Link href="/admission" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                                                Подробнее о программе
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы студентов</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Узнайте, что говорят наши выпускники о своем опыте обучения
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <motion.div 
                                key={testimonial.id}
                                className="bg-white rounded-xl shadow-md p-8 relative"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg className="text-blue-100 absolute top-6 left-6 w-16 h-16 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
                                    <path fill="currentColor" d="M33.594 0C15.032 0 0 15.032 0 33.594c0 12.056 6.344 22.646 15.876 28.625c-5.978 20.27-3.637 29.322 4.407 37.366c8.047 8.044 19.368 9.982 32.886 5.25c-3.355-11.946-4.526-24.042-3.5-36.312h-16.063c-9.281 0-16.812-7.531-16.812-16.81c0-9.282 7.531-16.814 16.812-16.814h33.595v38.688c0 18.562-15.032 33.594-33.595 33.594c-3.107 0-6.102-0.444-8.969-1.219c1.219 2.906 1.969 6.061 1.969 9.408c0 2.217-0.29 4.36-0.813 6.406c2.57 0.398 5.2 0.625 7.906 0.625c33.41 0 60.47-27.059 60.47-60.47c0-33.408-27.06-60.468-60.47-60.468L33.593 0zm67.186 0c-3.108 0-6.102 0.444-8.968 1.219c1.219 2.906 1.969 6.061 1.969 9.406c0 2.219-0.29 4.363-0.812 6.406c2.56 0.397 5.188 0.625 7.905 0.625c2.105 0 4.143-0.145 6.156-0.376c-1.427 17.434-15.855 31.157-33.625 31.157h-16.062c-3.354 11.944-4.526 24.04-3.5 36.312h16.062c33.408 0 60.47-27.06 60.47-60.47c0-15.052-5.516-28.808-14.595-39.374c-7.865-9.143-19.412-15.029-32.405-15.093L100.78 0z" />
                                </svg>
                                <p className="text-gray-700 mb-6 relative z-10">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <div className="text-lg font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                        <div className="text-sm font-medium text-blue-500">{testimonial.program}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600 mb-6">Подайте заявку сегодня</h2>
                            <p className="text-gray-700 text-lg mb-8">
                                Сделайте первый шаг к получению качественного образования, которое откроет перед вами новые возможности.
                                Наша команда готова помочь вам на каждом этапе процесса поступления.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/admission" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    Подать заявку
                                </Link>
                                <Link href="/contacts" className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                                    Связаться с нами
                                </Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-gray-900">
                                <h3 className="text-2xl font-bold mb-4">Ключевые даты</h3>
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="text-blue-500 font-bold md:w-1/2">15 февраля - 30 июня</div>
                                        <div className="font-medium md:w-1/2">Прием документов на бакалавриат</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="text-blue-500 font-bold md:w-1/2">15 марта - 15 июля</div>
                                        <div className="font-medium md:w-1/2">Прием документов в магистратуру</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="text-blue-500 font-bold md:w-1/2">1 апреля - 31 июля</div>
                                        <div className="font-medium md:w-1/2">Прием документов в докторантуру</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="text-blue-500 font-bold md:w-1/2">Круглый год</div>
                                        <div className="font-medium md:w-1/2">Запись на курсы и сертификационные программы</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}