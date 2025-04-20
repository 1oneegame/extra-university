'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const courseCategories = [
  {
    id: "programming",
    title: "Программирование",
    description: "Курсы по различным языкам программирования и технологиям разработки",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    id: "business",
    title: "Бизнес и управление",
    description: "Курсы по менеджменту, маркетингу и предпринимательству",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    id: "design",
    title: "Дизайн и творчество",
    description: "Курсы по графическому дизайну, UI/UX и цифровому искусству",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    )
  },
  {
    id: "science",
    title: "Наука и исследования",
    description: "Курсы по научным дисциплинам и методологии исследований",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  }
];

const courses = [
  {
    id: 1,
    title: "Веб-разработка на JavaScript",
    category: "programming",
    instructor: "Александр Иванов",
    duration: "3 месяца",
    schedule: "Вечерняя форма/онлайн",
    description: "Изучите современную веб-разработку с использованием JavaScript, React и Node.js. Создавайте интерактивные веб-приложения с нуля.",
    image: "/assets/images/courses/1c.png",
    price: "90 000 ₸",
    features: [
      "24 практических занятия",
      "Индивидуальные проекты",
      "Сертификат по окончании"
    ]
  },
  {
    id: 2,
    title: "Data Science и анализ данных",
    category: "programming",
    instructor: "Мария Петрова",
    duration: "4 месяца",
    schedule: "Онлайн, гибкий график",
    description: "Освойте навыки анализа данных, статистики и машинного обучения. Научитесь использовать Python и библиотеки для работы с данными.",
    image: "/assets/images/courses/2c.png",
    price: "120 000 ₸",
    features: [
      "30 лекций и практикумов",
      "Работа с реальными датасетами",
      "Менторская поддержка"
    ]
  },
  {
    id: 3,
    title: "Цифровой маркетинг",
    category: "business",
    instructor: "Екатерина Сидорова",
    duration: "2 месяца",
    schedule: "Вечерние занятия/выходные",
    description: "Изучите стратегии цифрового маркетинга, SMM, SEO, контент-маркетинг и аналитику для развития бизнеса в онлайн-среде.",
    image: "/assets/images/courses/3c.png",
    price: "75 000 ₸",
    features: [
      "16 интенсивных занятий",
      "Разработка маркетинговой стратегии",
      "Бизнес-кейсы от партнеров"
    ]
  },
  {
    id: 4,
    title: "UI/UX дизайн",
    category: "design",
    instructor: "Дмитрий Новиков",
    duration: "3 месяца",
    schedule: "Гибкий график, онлайн",
    description: "Научитесь создавать интуитивно понятные и эстетически привлекательные интерфейсы. Освойте принципы UX-исследований и UI-дизайна.",
    image: "/assets/images/courses/4c.png",
    price: "95 000 ₸",
    features: [
      "24 практических занятия",
      "Разработка портфолио",
      "Отзывы профессионалов"
    ]
  },
  {
    id: 5,
    title: "Управление проектами",
    category: "business",
    instructor: "Игорь Семенов",
    duration: "2.5 месяца",
    schedule: "Вечерняя форма/онлайн",
    description: "Изучите методологии управления проектами (Agile, Scrum, Kanban) и инструменты для эффективной организации рабочих процессов.",
    image: "/assets/images/courses/5c.png",
    price: "85 000 ₸",
    features: [
      "20 интерактивных занятий",
      "Практика на реальных проектах",
      "Подготовка к PMI сертификации"
    ]
  },
  {
    id: 6,
    title: "Основы молекулярной биологии",
    category: "science",
    instructor: "Наталья Васильева",
    duration: "3 месяца",
    schedule: "Выходные дни, смешанный формат",
    description: "Курс охватывает фундаментальные принципы молекулярной биологии, генетики и биохимии с практическими лабораторными занятиями.",
    image: "/assets/images/courses/6c.png",
    price: "110 000 ₸",
    features: [
      "18 лекций и 12 лабораторных работ",
      "Современное оборудование",
      "Научные дискуссии"
    ]
  }
];

const testimonials = [
  {
    id: 1,
    text: "Курс веб-разработки полностью изменил мою карьеру. Преподаватель уделял внимание каждому студенту и помогал решать возникающие проблемы. Настоятельно рекомендую!",
    author: "Алексей Морозов",
    role: "Выпускник курса 2023",
    program: "Веб-разработка"
  },
  {
    id: 2,
    text: "Data Science курс превзошел мои ожидания. Практические задания с реальными данными дали мне необходимые навыки для работы аналитиком. Огромное спасибо за качественное обучение!",
    author: "Анна Климова",
    role: "Выпускница курса 2023",
    program: "Data Science"
  },
  {
    id: 3,
    text: "UI/UX дизайн открыл для меня новые горизонты. Формат обучения был удобным, а обратная связь от преподавателя помогла значительно улучшить мои навыки дизайна.",
    author: "Виктор Лебедев",
    role: "Выпускник курса 2022",
    program: "Дизайн"
  }
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses/search?q=${encodeURIComponent(searchQuery)}`);
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
                Онлайн-курсы
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-3xl mx-auto"
              >
                <p className="text-white/90 text-lg">
                  Расширьте свои профессиональные навыки с помощью наших специализированных курсов.
                  От программирования до бизнеса и науки — найдите курс, который поможет достичь ваших целей.
                </p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
              >
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row w-full max-w-xl mx-auto gap-4">
                  <input
                    type="text"
                    placeholder="Поиск курсов..."
                    className="px-4 py-3 border border-white/20 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 w-full:ring-white/50 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-white/90 transition-colors font-medium"
                  >
                    Найти
                  </button>
                </form>
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
      <motion.div 
        variants={itemVariants}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Категории курсов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category) => (
              <div 
                key={category.id} 
                className={`p-6 rounded-lg border cursor-pointer transition-all hover:border-blue-500 hover:shadow-md ${selectedCategory === category.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
              >
                <div className="mb-4 text-blue-500">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Доступные курсы</h2>
            {selectedCategory && (
              <button 
                className="text-blue-500 flex items-center font-medium"
                onClick={() => setSelectedCategory(null)}
              >
                <span>Сбросить фильтр</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Курсы не найдены</h3>
              <p className="text-gray-600">Попробуйте изменить параметры поиска или выбрать другую категорию.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-100 relative flex items-center justify-center">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <span className="text-blue-500 font-medium whitespace-nowrap ml-2">{course.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-5">{course.description}</p>
                    
                    <div className="flex items-center gap-2 mb-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm text-gray-700">{course.instructor}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2 text-gray-900">Особенности курса:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link href={`/courses/${course.id}`} className="block w-full">
                      <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                        Записаться на курс
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Отзывы студентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-4 text-gray-700">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Готовы начать обучение?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Наши курсы разработаны экспертами в своих областях и помогут вам достичь ваших профессиональных целей.
                Запишитесь сегодня и начните свой путь к успеху!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts" className="px-6 py-2.5 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
                  Связаться с нами
                </Link>
                <button className="px-6 py-2.5 border border-white text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                  Скачать каталог курсов
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 