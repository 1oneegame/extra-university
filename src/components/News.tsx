'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  title: string;
  image: string;
  link: string;
}

interface Event {
  date: string;
  description: string;
}

export default function News() {
  const newsItems: NewsItem[] = [
    {
      title: 'Extra объявляет о наборе на летнюю исследовательскую программу для старшеклассников',
      image: '/assets/images/extrauniversity-outside.svg',
      link: '/summer-research'
    },
    {
      title: 'В Extra пройдет знаковая международная конференция в сфере машинного обучения',
      image: '/assets/images/extrauniversity-hall.svg',
      link: '/ml-conference'
    }
  ];

  const events: Event[] = [
    {
      date: '15 мая 2025:',
      description: 'День открытых дверей "Extra University" для старшеклассников и их родителей.'
    },
    {
      date: '1 июня 2025:',
      description: 'Старт летней исследовательской программы "Extra" для старшеклассников.'
    },
    {
      date: '15 июня 2025:',
      description: 'Онлайн-вебинар "Карьерные перспективы в IT и бизнесе" с участием преподавателей "Extra University" и выпускников-предпринимателей.'
    },
    {
      date: '1 июля 2025:',
      description: 'Мастер-класс по робототехнике для школьников на базе лаборатории "Extra University".'
    }
  ];

  return (
    <div className="container mt-48  mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12">
        <div className="w-full">
            <div className='flex flex-row justify-center items-center'>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">Новости / <span className='text-blue-500'>Мероприятия</span></h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {newsItems.map((item, index) => (
              <Link href={item.link} key={index} className="group">
                <div className="relative h-[280px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl md:text-2xl font-medium leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="space-y-4 sm:space-y-6 bg-blue-500 rounded-lg p-12">
            {events.map((event, index) => (
              <div key={index} className=" transition-colors duration-300 text-white text-lg">
                <span className="font-bold">{event.date}</span>{' '}
                <span >{event.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="inline-flex items-center justify-center px-6 py-4 text-lg font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
          Другие новости и мероприятия
        </button>
      </div>
    </div>
  );
}