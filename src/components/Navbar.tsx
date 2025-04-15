'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarItem{
    title: string;
    link: string;
}

const NavbarItems : NavbarItem[] = [
    {
        title: 'О нас',
        link: '/'
    },
    {
        title: 'Поступление',
        link: '/'
    },
    {
        title: 'Программы',
        link: '/'
    },
    {
        title: 'Преподаватели',
        link: '/'
    },
    {
        title: 'Новости',
        link: '/'
    },
    {
        title: 'Университет',
        link: '/'
    },
    {
        title: 'Контакты',
        link: '/'
    },
]

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="fixed top-0 left-0 right-0 z-10 flex flex-row px-4 sm:px-8 md:px-12 bg-white rounded-xl shadow-md shadow-blue-200 h-[70px] sm:h-[80px] md:h-[100px] justify-between items-center">
            <div className="scale-90 md:scale-95 hover:scale-100 transition-all duration-300">
                <Link href="/"><Image src="assets/images/logo.svg" width='182' height='75' alt="logo"/></Link>
            </div>
            
            {/* Мобильная кнопка меню */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Десктопное меню */}
            <div className="hidden md:flex flex-row gap-4 sm:gap-6 md:gap-8">
                {
                    NavbarItems.map((item, index) => (
                        <div key={index}> 
                            <Link href={item.link}>
                                <span className="text-gray-800 text-sm sm:text-base md:text-lg hover:text-blue-500 transition-all duration-300">
                                    {item.title}
                                </span>
                            </Link>
                        </div>
                    ))
                }
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="absolute top-[70px] sm:top-[80px] left-0 right-0 bg-white shadow-lg md:hidden">
                    <div className="flex flex-col p-4">
                        {NavbarItems.map((item, index) => (
                            <Link 
                                key={index} 
                                href={item.link}
                                className="py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}