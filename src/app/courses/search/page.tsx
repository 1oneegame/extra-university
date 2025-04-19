'use client'
import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const courses = [
  {
    id: 1,
    title: "Веб-разработка на JavaScript",
    category: "programming",
    instructor: "Александр Иванов",
    duration: "3 месяца",
    schedule: "Вечерняя форма/онлайн",
    description: "Изучите современную веб-разработку с использованием JavaScript, React и Node.js. Создавайте интерактивные веб-приложения с нуля.",
    image: "/assets/images/extrauniversity-hall.svg",
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
    image: "/assets/images/extrauniversity-outside.svg",
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
    image: "/assets/images/extrauniversity-hall.svg",
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
    image: "/assets/images/extrauniversity-outside.svg",
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
    image: "/assets/images/extrauniversity-hall.svg",
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
    image: "/assets/images/extrauniversity-hall.svg",
    price: "110 000 ₸",
    features: [
      "18 лекций и 12 лабораторных работ",
      "Современное оборудование",
      "Научные дискуссии"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<typeof courses>([]);

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = (query: string) => {
    const filtered = courses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) || 
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="bg-blue-500 pt-20 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mt-20 md:mt-24 mb-12 md:mb-16">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Поиск курсов
              </h1>
              <div className="mt-8 max-w-3xl mx-auto">
                <p className="text-white/90 text-lg">
                  {initialQuery 
                    ? `Результаты поиска для "${initialQuery}"`
                    : "Найдите курс, который подходит именно вам"}
                </p>
              </div>
              <div className="mt-8">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row w-full max-w-xl mx-auto gap-4">
                  <input
                    type="text"
                    placeholder="Поиск курсов..."
                    className="px-4 py-3 border border-white/20 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
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
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <rect width="1440" height="100" fill="#ffffff" />
          </svg>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {results.length > 0 
              ? `Найдено ${results.length} ${results.length === 1 ? 'курс' : results.length < 5 ? 'курса' : 'курсов'}`
              : 'Курсы не найдены'}
          </h2>
          {results.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ничего не найдено</h3>
              <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска или выбрать другие ключевые слова</p>
              <Link href="/courses" className="px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-block">
                Вернуться к курсам
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((course) => (
                <motion.div 
                  key={course.id}
                  variants={itemVariants}
                  className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-100 relative flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
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
                  </div>
                  <div className="px-6 pb-6">
                    <Link href={`/courses/${course.id}`} className="block w-full">
                      <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                        Подробнее
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function SearchLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <svg className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-xl text-gray-600">Загрузка результатов...</p>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
} 