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

const newsCategories = [
    { id: "all", name: "Все новости" },
    { id: "university", name: "Университет" },
    { id: "research", name: "Исследования" },
    { id: "students", name: "Студенческая жизнь" },
    { id: "events", name: "События" }
];

const newsArticles = [
    {
        id: 1,
        title: "Открытие нового центра искусственного интеллекта",
        excerpt: "Extra University открывает передовой исследовательский центр ИИ с использованием суперкомпьютера последнего поколения для разработки инновационных решений в области машинного обучения и нейронных сетей.",
        content: "Extra University с гордостью объявляет об открытии нового Центра искусственного интеллекта, оснащенного самым современным оборудованием и суперкомпьютером последнего поколения. Центр станет домом для междисциплинарных исследований в области машинного обучения, глубоких нейронных сетей и прикладного ИИ.\n\nПроект, стоимостью более 15 миллионов долларов, реализован благодаря сотрудничеству с ведущими технологическими компаниями и грантам от исследовательских фондов. Центр будет работать над решением сложных задач в областях здравоохранения, климатических изменений, робототехники и других направлениях.\n\n«Этот центр станет катализатором инноваций не только для нашего университета, но и для всего региона, — заявил ректор университета. — Мы создаем среду, где студенты и исследователи могут работать вместе с индустриальными партнерами над реальными проблемами».",
        date: "12 мая 2024",
        image: "/assets/images/extrauniversity-hall.svg",
        category: "research",
        author: "Пресс-служба Extra University"
    },
    {
        id: 2,
        title: "Студенты Extra University победили в международном хакатоне",
        excerpt: "Команда студентов факультета информационных технологий заняла первое место на престижном международном хакатоне по кибербезопасности, опередив более 200 команд из 45 стран.",
        content: "Команда студентов факультета информационных технологий Extra University, известная как 'ExtraSecure', одержала убедительную победу на международном хакатоне по кибербезопасности 'CyberForce 2024', проходившем в Сингапуре.\n\nВ составе команды – пять студентов 3-4 курсов программы 'Кибербезопасность и защита данных'. На протяжении 48 часов непрерывных соревнований они демонстрировали навыки в обнаружении уязвимостей, защите систем от атак и расследовании киберинцидентов.\n\nФинальный этап соревнований включал задачу по защите виртуальной инфраструктуры финансовой организации от атак команд конкурентов, с чем наши студенты справились блестяще.\n\n«Мы готовились к этому соревнованию около года, — рассказывает капитан команды Алексей Морозов. — Практически каждые выходные мы собирались для тренировок и изучения новых техник кибербезопасности. Эта победа открывает перед нами двери в ведущие компании отрасли».\n\nПобеда принесла команде не только международное признание, но и денежный приз в размере $50,000, а также предложения о стажировке от ведущих технологических компаний.",
        date: "3 мая 2024",
        image: "/assets/images/extrauniversity-outside.svg",
        category: "students",
        author: "Иван Петров, редактор студенческого портала"
    },
    {
        id: 3,
        title: "Extra University вошел в топ-100 университетов мира по версии QS World University Rankings",
        excerpt: "Согласно престижному международному рейтингу, наш университет значительно улучшил свои позиции, поднявшись на 27 пунктов по сравнению с прошлым годом.",
        content: "Extra University достиг исторического результата, войдя в первую сотню лучших высших учебных заведений мира согласно престижному рейтингу QS World University Rankings. По сравнению с прошлым годом наш университет поднялся на 27 позиций и теперь занимает 87 место.\n\nОсобенно высокие оценки университет получил по критериям «Академическая репутация», «Репутация среди работодателей» и «Цитируемость научных работ». Количество иностранных студентов также значительно увеличилось за последний год.\n\n«Этот результат – признание нашей стратегии развития и упорного труда всего коллектива, — комментирует ректор. — Мы последовательно инвестировали в исследовательскую инфраструктуру, привлекали ведущих специалистов со всего мира и развивали международное сотрудничество».\n\nПо словам проректора по стратегическому развитию, университет не собирается останавливаться на достигнутом и ставит амбициозную цель – войти в топ-50 в течение следующих пяти лет.",
        date: "28 апреля 2024",
        image: "/assets/images/extrauniversity-hall.svg",
        category: "university",
        author: "Пресс-служба Extra University"
    },
    {
        id: 4,
        title: "Международная конференция по устойчивому развитию пройдет в Extra University",
        excerpt: "В сентябре этого года наш университет примет более 500 участников из 60 стран для обсуждения актуальных вопросов устойчивого развития и экологии.",
        content: "С 15 по 18 сентября 2024 года Extra University станет центром обсуждения глобальных вызовов в области устойчивого развития. Международная конференция 'Устойчивое будущее: наука, экономика, общество' соберет ведущих исследователей, представителей бизнеса, политиков и активистов со всего мира.\n\nПрограмма конференции включает более 200 докладов, 25 тематических секций, круглые столы и мастер-классы. Ключевыми темами станут борьба с изменением климата, циркулярная экономика, социальная устойчивость и образование для устойчивого развития.\n\nСреди подтвержденных спикеров – лауреаты Нобелевской премии, руководители международных организаций и представители крупнейших технологических компаний.\n\n«Эта конференция подчеркивает лидирующую роль нашего университета в области устойчивого развития, — отмечает председатель организационного комитета, профессор Елена Соколова. — Мы не только обсуждаем теории, но и предлагаем конкретные решения для реальных проблем».\n\nРегистрация для участников открыта до 30 июля на официальном сайте конференции.",
        date: "15 апреля 2024",
        image: "/assets/images/extrauniversity-outside.svg",
        category: "events",
        author: "Оргкомитет конференции"
    },
    {
        id: 5,
        title: "Запуск новой образовательной программы по квантовым вычислениям",
        excerpt: "В следующем учебном году Extra University начинает подготовку специалистов в перспективной области квантовых вычислений и квантовых коммуникаций.",
        content: "Факультет физики и современных технологий Extra University объявляет о запуске новой магистерской программы «Квантовые вычисления и квантовые коммуникации». Программа разработана в сотрудничестве с ведущими исследовательскими центрами и технологическими компаниями, работающими в области квантовых технологий.\n\nСтуденты программы получат фундаментальные знания в области квантовой механики, информатики и математики, а также практические навыки работы с квантовыми компьютерами и симуляторами. Программа включает обязательные стажировки в лабораториях квантовых вычислений в России и за рубежом.\n\n«Квантовые технологии – это будущее информационных систем, которое уже наступает сегодня, — говорит руководитель программы, профессор Андрей Волков. — Мы готовим специалистов, которые будут создавать квантовые алгоритмы, разрабатывать квантовые протоколы связи и системы квантовой криптографии».\n\nПрием документов на программу начнется 1 марта 2025 года. Планируется набор 25 студентов, для которых предусмотрены как бюджетные места, так и гранты от компаний-партнеров.",
        date: "5 апреля 2024",
        image: "/assets/images/extrauniversity-hall.svg",
        category: "university",
        author: "Учебный департамент"
    },
    {
        id: 6,
        title: "Исследователи университета разработали новый метод диагностики заболеваний с помощью ИИ",
        excerpt: "Группа ученых из медицинского факультета создала алгоритм искусственного интеллекта, способный выявлять редкие заболевания на ранних стадиях с точностью до 94%.",
        content: "Группа исследователей из медицинского факультета Extra University под руководством профессора Натальи Ивановой разработала инновационный алгоритм на основе искусственного интеллекта, способный диагностировать редкие генетические заболевания на ранних стадиях.\n\nАлгоритм анализирует комбинацию данных из генетических тестов, медицинских изображений и истории болезни пациента, выявляя неочевидные связи и закономерности, которые могут указывать на наличие редкого заболевания.\n\nВ ходе клинических испытаний, проведенных совместно с пятью медицинскими центрами, система продемонстрировала точность диагностики 94%, что значительно превышает средние показатели традиционных методов (около 60%).\n\n«Для многих редких заболеваний критически важна ранняя диагностика, но из-за их нетипичных проявлений на начальных стадиях это часто представляет серьезную проблему для врачей, — объясняет профессор Иванова. — Наша система может стать важным инструментом поддержки принятия решений для медицинских специалистов».\n\nРезультаты исследования опубликованы в престижном журнале Nature Medicine. В настоящее время команда работает над получением разрешений для внедрения системы в клиническую практику.",
        date: "28 марта 2024",
        image: "/assets/images/extrauniversity-outside.svg",
        category: "research",
        author: "Научный отдел Extra University"
    }
];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
    
    const filteredNews = activeCategory === "all" 
        ? newsArticles
        : newsArticles.filter(article => article.category === activeCategory);
        
    const toggleArticle = (id: number) => {
        if (expandedArticle === id) {
            setExpandedArticle(null);
        } else {
            setExpandedArticle(id);
        }
    };
    
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
                                Новости и события
                            </motion.h1>
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 max-w-3xl mx-auto"
                            >
                                <p className="text-white/90 text-lg">
                                    Узнайте о последних достижениях, мероприятиях и важных событиях из жизни Extra University
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
            <motion.div variants={itemVariants} className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3 my-8">
                        {newsCategories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>
            {activeCategory === "all" && (
                <motion.div variants={itemVariants} className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="md:flex gap-8 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="md:w-1/2">
                                <img 
                                    src={newsArticles[0].image} 
                                    alt={newsArticles[0].title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <div className="rounded-full bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 inline-block mb-4 w-fit">
                                    {newsCategories.find(cat => cat.id === newsArticles[0].category)?.name || newsArticles[0].category}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{newsArticles[0].title}</h2>
                                <p className="text-gray-600 mb-6">{newsArticles[0].excerpt}</p>
                                <div className="text-sm text-gray-500 mb-6">{newsArticles[0].date} • {newsArticles[0].author}</div>
                                <button 
                                    onClick={() => toggleArticle(newsArticles[0].id)}
                                    className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600"
                                >
                                    {expandedArticle === newsArticles[0].id ? "Свернуть" : "Читать полностью"}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ml-1 transition-transform ${expandedArticle === newsArticles[0].id ? "rotate-180" : ""}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                {expandedArticle === newsArticles[0].id && (
                                    <div className="mt-6 text-gray-700 border-t pt-6 border-gray-100">
                                        {newsArticles[0].content.split("\n\n").map((paragraph, index) => (
                                            <p key={index} className="mb-4">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {activeCategory === "all" 
                            ? "Последние новости" 
                            : newsCategories.find(cat => cat.id === activeCategory)?.name}
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.slice(activeCategory === "all" ? 1 : 0).map((article) => (
                            <motion.div 
                                key={article.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="rounded-full bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 inline-block mb-3 w-fit">
                                        {newsCategories.find(cat => cat.id === article.category)?.name || article.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-1">{article.excerpt}</p>
                                    <div className="text-sm text-gray-500 mb-4">{article.date} • {article.author}</div>
                                    <button 
                                        onClick={() => toggleArticle(article.id)}
                                        className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 mt-auto"
                                    >
                                        {expandedArticle === article.id ? "Свернуть" : "Читать полностью"}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ml-1 transition-transform ${expandedArticle === article.id ? "rotate-180" : ""}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                    {expandedArticle === article.id && (
                                        <div className="mt-6 text-gray-700 border-t pt-6 border-gray-100">
                                            {article.content.split("\n\n").map((paragraph, index) => (
                                                <p key={index} className="mb-4">{paragraph}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="h-full w-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(300,300)">
                                    <path d="M125.6,-88.3C154.8,-37.1,164.6,28.8,144.2,84.5C123.7,140.2,72.9,185.8,16.4,178.8C-40.1,171.8,-102.5,112.2,-131.6,46.8C-160.8,-18.6,-156.6,-90,-121.1,-138.5C-85.6,-187,-42.8,-212.5,2.6,-214.3C48,-216.1,96.4,-139.4,125.6,-88.3Z" fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                        <div className="lg:w-2/3 relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Будьте в курсе наших новостей</h2>
                            <p className="text-white/90 text-lg mb-8">
                                Подпишитесь на нашу рассылку, чтобы получать актуальные новости, анонсы событий и истории успеха наших студентов и выпускников.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Ваш email" 
                                    className="px-4 py-3 rounded-lg text-gray-700 w-full sm:w-auto sm:flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    Подписаться
                                </button>
                            </div>
                            <p className="mt-4 text-white/80 text-sm">
                                Мы уважаем вашу приватность и никогда не будем отправлять спам.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Предстоящие события</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Не пропустите интересные мероприятия, которые пройдут в ближайшее время
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-blue-500 text-white p-4 text-center">
                                <div className="text-3xl font-bold">15</div>
                                <div className="text-white/90">Июня</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">День открытых дверей</h3>
                                <p className="text-gray-600 mb-4">
                                    Узнайте о наших программах обучения, познакомьтесь с преподавателями и студентами, и получите ответы на все вопросы.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    10:00 - 16:00
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Главный корпус университета
                                </div>
                                <Link href="/contacts" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600">
                                    Зарегистрироваться
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-purple-500 text-white p-4 text-center">
                                <div className="text-3xl font-bold">22-24</div>
                                <div className="text-white/90">Июня</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Летняя школа программирования</h3>
                                <p className="text-gray-600 mb-4">
                                    Интенсивный трехдневный курс для старшеклассников и абитуриентов, желающих развить навыки в программировании.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-purple-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    9:00 - 17:00
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-purple-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    IT-центр, 3 корпус
                                </div>
                                <Link href="/contacts" className="inline-flex items-center text-purple-500 font-semibold hover:text-purple-600">
                                    Зарегистрироваться
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-green-500 text-white p-4 text-center">
                                <div className="text-3xl font-bold">5</div>
                                <div className="text-white/90">Июля</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Научная конференция «Города будущего»</h3>
                                <p className="text-gray-600 mb-4">
                                    Междисциплинарная конференция, посвященная устойчивому развитию городов, урбанистике и экологическим инновациям.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    11:00 - 18:00
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Конференц-центр
                                </div>
                                <Link href="/contacts" className="inline-flex items-center text-green-500 font-semibold hover:text-green-600">
                                    Зарегистрироваться
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link href="/events" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                            Все события
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
        </div>
            </motion.div>
        </motion.div>
    );
}