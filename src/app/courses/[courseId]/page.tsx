'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const courses = [
  {
    id: 1,
    title: "Веб-разработка на JavaScript",
    category: "programming",
    instructor: "Александр Иванов",
    duration: "3 месяца",
    schedule: "Вечерняя форма/онлайн",
    description: "Изучите современную веб-разработку с использованием JavaScript, React и Node.js. Создавайте интерактивные веб-приложения с нуля.",
    fullDescription: "Данный курс предназначен для тех, кто хочет освоить современную веб-разработку с использованием JavaScript, React и Node.js. В процессе обучения вы научитесь создавать интерактивные веб-приложения с нуля, разрабатывать пользовательские интерфейсы и работать с базами данных. Курс включает в себя теоретические материалы и практические задания, которые помогут вам закрепить полученные знания и навыки. По окончании курса вы сможете создавать полноценные веб-приложения и будете готовы к работе в качестве младшего веб-разработчика.",
    image: "/assets/images/courses/1c.png",
    price: "90 000 ₸",
    features: [
      "24 практических занятия",
      "Индивидуальные проекты",
      "Сертификат по окончании"
    ],
    modules: [
      {
        id: 1,
        title: "Введение в веб-разработку",
        topics: [
          {
            id: 1,
            title: "Основы HTML и CSS",
            description: "Изучение базовых элементов HTML и CSS для создания структуры и стилизации веб-страниц",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            duration: "45 минут",
            test: {
              questions: [
                {
                  id: 1,
                  question: "Какой тег используется для создания заголовка первого уровня?",
                  options: ["<h1>", "<header>", "<heading>", "<title>"],
                  correctAnswer: 0
                },
                {
                  id: 2,
                  question: "Какое свойство CSS используется для изменения цвета текста?",
                  options: ["text-color", "font-color", "color", "text-style"],
                  correctAnswer: 2
                },
                {
                  id: 3,
                  question: "Как обозначается идентификатор в CSS?",
                  options: [".", "#", "&", "*"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: 2,
            title: "Введение в JavaScript",
            description: "Основы языка JavaScript: переменные, типы данных, функции и основные операторы",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            duration: "60 минут",
            test: {
              questions: [
                {
                  id: 1,
                  question: "Как объявить переменную в JavaScript?",
                  options: ["var name;", "variable name;", "v name;", "let = name;"],
                  correctAnswer: 0
                },
                {
                  id: 2,
                  question: "Какой тип данных не является примитивным в JavaScript?",
                  options: ["String", "Number", "Boolean", "Object"],
                  correctAnswer: 3
                }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        title: "Работа с DOM",
        topics: [
          {
            id: 1,
            title: "Основы DOM",
            description: "Изучение объектной модели документа и взаимодействие с элементами веб-страницы",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            duration: "55 минут",
            test: {
              questions: [
                {
                  id: 1,
                  question: "Что такое DOM?",
                  options: [
                    "Document Object Model", 
                    "Data Object Model", 
                    "Document Oriented Model", 
                    "Dynamic Object Model"
                  ],
                  correctAnswer: 0
                }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        title: "Работа с React",
        topics: [
          {
            id: 1,
            title: "Введение в React",
            description: "Знакомство с библиотекой React, компонентным подходом и JSX",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            duration: "65 минут",
            test: {
              questions: [
                {
                  id: 1,
                  question: "Что такое JSX?",
                  options: [
                    "JavaScript XML", 
                    "JavaScript Extension", 
                    "Java Syntax Extension", 
                    "JavaScript Syntax"
                  ],
                  correctAnswer: 0
                }
              ]
            }
          }
        ]
      }
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
    fullDescription: "Курс Data Science и анализ данных предназначен для тех, кто хочет освоить современные методы анализа данных и машинного обучения. В ходе обучения вы научитесь работать с Python и его популярными библиотеками для анализа данных, такими как Pandas, NumPy, Matplotlib и Scikit-learn. Вы изучите основы статистики, методы очистки и предобработки данных, визуализацию, основные алгоритмы машинного обучения и их применение для решения практических задач.",
    image: "/assets/images/courses/2c.png",
    price: "120 000 ₸",
    features: [
      "30 лекций и практикумов",
      "Работа с реальными датасетами",
      "Менторская поддержка"
    ],
    modules: [
      {
        id: 1,
        title: "Введение в Data Science",
        topics: [
          {
            id: 1,
            title: "Основы Python для анализа данных",
            description: "Изучение основ Python и популярных библиотек для работы с данными",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            duration: "50 минут",
            test: {
              questions: [
                {
                  id: 1,
                  question: "Какая библиотека в Python наиболее часто используется для работы с табличными данными?",
                  options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
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

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string, 10);
  
  const [course, setCourse] = useState<(typeof courses)[0] | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [isWatchingVideo, setIsWatchingVideo] = useState(false);
  const [isTakingTest, setIsTakingTest] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      if (foundCourse.modules && foundCourse.modules.length > 0) {
        setSelectedModule(0);
      }
    } else {
      router.push('/courses');
    }
  }, [courseId, router]);

  const handleTopicSelect = (moduleIndex: number, topicIndex: number) => {
    setSelectedModule(moduleIndex);
    setSelectedTopic(topicIndex);
    setIsWatchingVideo(true);
    setIsTakingTest(false);
    setTestSubmitted(false);
    setUserAnswers([]);
  };

  const handleStartTest = () => {
    setIsWatchingVideo(false);
    setIsTakingTest(true);
    setTestSubmitted(false);
    setUserAnswers([]);
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmitTest = () => {
    if (!course || selectedModule === null || selectedTopic === null) return;
    
    const currentTopic = course.modules[selectedModule].topics[selectedTopic];
    const questions = currentTopic.test.questions;
    
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    const scorePercent = Math.round((correctCount / questions.length) * 100);
    setTestScore(scorePercent);
    setTestSubmitted(true);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-xl text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  const currentModule = selectedModule !== null ? course.modules[selectedModule] : null;
  const currentTopic = currentModule && selectedTopic !== null ? currentModule.topics[selectedTopic] : null;

  return (
    <div className="min-h-screen pb-16">
      <div className="bg-blue-500 pt-20 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mt-20 md:mt-24 mb-12 md:mb-16">
            <div>
              <Link href="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Назад к курсам
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                {course.title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 text-white rounded-full px-4 py-1.5 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="bg-white/20 text-white rounded-full px-4 py-1.5 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {course.instructor}
                </div>
                <div className="bg-white/20 text-white rounded-full px-4 py-1.5 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                </div>
                <div className="bg-white text-blue-600 rounded-full px-4 py-1.5 text-sm font-medium">
                  {course.price}
                </div>
              </div>
              <p className="text-white/90 text-lg max-w-3xl">
                {course.description}
              </p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900">Программа курса</h3>
                </div>
                <div className="p-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={module.id} className="mb-4 last:mb-0">
                      <button
                        onClick={() => setSelectedModule(selectedModule === moduleIndex ? null : moduleIndex)}
                        className={`w-full text-left p-3 rounded-md flex justify-between items-center ${
                          selectedModule === moduleIndex ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <span className="font-medium">{module.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform ${selectedModule === moduleIndex ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {selectedModule === moduleIndex && (
                        <div className="mt-2 ml-4 space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <button
                              key={topic.id}
                              onClick={() => handleTopicSelect(moduleIndex, topicIndex)}
                              className={`w-full text-left p-2 rounded flex items-center ${
                                selectedTopic === topicIndex && selectedModule === moduleIndex
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm">{topic.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              {currentTopic ? (
                <div>
                  {isWatchingVideo ? (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-black">
                        <iframe
                          src={currentTopic.videoUrl}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                          style={{ minHeight: "480px" }}
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentTopic.title}</h2>
                        <p className="text-gray-600 mb-6">{currentTopic.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{currentTopic.duration}</span>
                          </div>
                          <button
                            onClick={handleStartTest}
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                          >
                            Пройти тест
                          </button>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Комментарии</h3>
                        <div className="mb-6">
                          <textarea 
                            placeholder="Напишите комментарий или задайте вопрос..." 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                          ></textarea>
                          <div className="mt-2 flex justify-end">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                              Отправить
                            </button>
                          </div>
                        </div>  
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">АИ</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <h4 className="font-medium text-gray-900">Алексей Иванов</h4>
                                <span className="text-sm text-gray-500 ml-2">2 дня назад</span>
                              </div>
                              <p className="text-gray-700">Отличный урок! Я наконец-то понял, как правильно структурировать HTML-документ. Есть ли где-то дополнительные материалы по этой теме?</p>
                              <div className="mt-1 flex gap-4">
                                <button className="text-sm text-gray-500 hover:text-gray-700">Ответить</button>
                                <div className="flex items-center text-gray-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                  </svg>
                                  <span>8</span>
                                </div>
                              </div>                              
                              <div className="mt-3 ml-6 pt-3 border-t border-gray-100">
                                <div className="flex gap-4">
                                  <div className="flex-shrink-0">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                      <span className="text-blue-600 font-medium text-sm">АП</span>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center mb-1">
                                      <h4 className="font-medium text-gray-900">Александр Петров (преподаватель)</h4>
                                      <span className="text-sm text-gray-500 ml-2">1 день назад</span>
                                    </div>
                                    <p className="text-gray-700">Спасибо за вопрос! Дополнительные материалы будут доступны в разделе "Ресурсы" после завершения всех уроков по HTML.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>    
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">МС</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <h4 className="font-medium text-gray-900">Мария Сидорова</h4>
                                <span className="text-sm text-gray-500 ml-2">3 дня назад</span>
                              </div>
                              <p className="text-gray-700">Не могу пройти тест - на третий вопрос нет правильного ответа среди вариантов. Подскажите, пожалуйста.</p>
                              <div className="mt-1 flex gap-4">
                                <button className="text-sm text-gray-500 hover:text-gray-700">Ответить</button>
                                <div className="flex items-center text-gray-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                  </svg>
                                  <span>3</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-center">
                          <button className="text-blue-500 font-medium hover:text-blue-600">
                            Показать больше комментариев
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden p-6">
                      {!testSubmitted ? (
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Тест: {currentTopic.title}</h2>
                          <div className="space-y-8">
                            {currentTopic.test.questions.map((question, questionIndex) => (
                              <div key={question.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                  {questionIndex + 1}. {question.question}
                                </h3>
                                <div className="space-y-3">
                                  {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex items-center">
                                      <input
                                        type="radio"
                                        id={`question-${questionIndex}-option-${optionIndex}`}
                                        name={`question-${questionIndex}`}
                                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        checked={userAnswers[questionIndex] === optionIndex}
                                        onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                                      />
                                      <label
                                        htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                                        className="ml-3 block text-gray-700 cursor-pointer"
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 flex justify-end gap-4">
                            <button
                              onClick={() => setIsWatchingVideo(true)}
                              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              Вернуться к видео
                            </button>
                            <button
                              onClick={handleSubmitTest}
                              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                              disabled={userAnswers.length !== currentTopic.test.questions.length}
                            >
                              Отправить ответы
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className={`inline-flex items-center justify-center h-24 w-24 rounded-full mb-6 ${
                            testScore >= 70 ? 'bg-green-100' : testScore >= 40 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                            <span className={`text-3xl font-bold ${
                              testScore >= 70 ? 'text-green-600' : testScore >= 40 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {testScore}%
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {testScore >= 70 
                              ? 'Отличная работа!' 
                              : testScore >= 40 
                                ? 'Неплохой результат!'
                                : 'Стоит еще поработать'}
                          </h2>
                          <p className="text-gray-600 mb-8">
                            {testScore >= 70 
                              ? 'Вы успешно прошли тест! Можете продолжать обучение.' 
                              : 'Возможно, стоит пересмотреть видео и попробовать еще раз.'}
                          </p>
                          <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                              onClick={() => setIsWatchingVideo(true)}
                              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              Вернуться к видео
                            </button>
                            <button
                              onClick={() => {
                                setIsTakingTest(true);
                                setTestSubmitted(false);
                                setUserAnswers([]);
                              }}
                              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                              Пройти тест заново
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">О курсе</h2>
                  <p className="text-gray-600 mb-6">{course.fullDescription}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Особенности курса:</h3>
                  <ul className="mb-6 space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-gray-600 mb-6">Выберите модуль и тему в меню слева, чтобы начать обучение.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 