"use client";
import { useState, useEffect } from "react";

interface newsArticle {
  title: string;
  date: string;
  description: string;
  content: string;
}

export default function NewsProvider() {
  const [news, setNews] = useState<newsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("assets/data/news.json");
      const data = await response.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div className="w-full max-w-6xl min-h-screen flex flex-col justify-center items-center mb-10">
      <h1 className="text-4xl md:text-6xl text-blue-500 font-bold">Новости:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 ">
        {news.map((article, index) => (
          <div
            key={index}
            className="w-full max-w-xs shadow-md hover:scale-105 hover:shadow-blue-300 transition-all duration-300 shadow-blue-200 border-1 rounded-lg flex flex-col gap-8 relative px-6 py-4"
          >
            <h1 className="text-xl md:text-2xl text-bold text-black font-medium">
              {article.title}
            </h1>
            <div className="flex flex-col justify-between items-center text-start mb-28">
              <p className="text-md md:text-lg text-gray-800 line-clamp-2 md:line-clamp-4">
                {article.description}
              </p>
              <p className="text-md text-gray-500 absolute bottom-[calc(20%)] left-1/2 -translate-x-1/2 ">
                {article.date}
              </p>
            </div>
            <button className="cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300 absolute bottom-[calc(5%)] left-1/2 -translate-x-1/2 w-[calc(90%)] bg-blue-500 text-white rounded-xl text-base sm:text-lg font-medium p-2">
              Посмотреть...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
