'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarItem{
    title: string;
    link: string;
    sectionId?: string;
}

const NavbarItems : NavbarItem[] = [
    {
        title: 'О нас',
        link: '/#hero',
        sectionId: 'hero'
    },
    {
        title: 'Поступление',
        link: '/#about',
        sectionId: 'about'
    },
    {
        title: 'Программы',
        link: '/#programs',
        sectionId: 'programs'
    },
    {
        title: 'Преподаватели',
        link: './teachers',
        sectionId: 'professors'
    },
    {
        title: 'Новости',
        link: '/#news',
        sectionId: 'news'
    },
    {
        title: 'Университет',
        link: '/#introduce',
        sectionId: 'introduce'
    },
    {
        title: 'Контакты',
        link: '/',
        sectionId: 'contact'
    },
]

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return(
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-10 flex flex-row px-4 sm:px-8 md:px-12 bg-white rounded-xl shadow-md shadow-blue-200 h-[70px] sm:h-[80px] md:h-[100px] justify-between items-center"
        >
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="scale-80 md:scale-95 transition-all duration-300"
            >
                <Link href="/"><Image src="assets/images/logo.svg" width='182' height='75' alt="logo" className="mt-2"/></Link>
            </motion.div>
            
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <div className="hidden md:flex flex-row gap-4 sm:gap-6 md:gap-8">
                {
                    NavbarItems.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        > 
                            <motion.button
                                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                                className="text-gray-800 text-sm sm:text-base md:text-lg transition-all duration-300"
                            >
                                {item.title}
                            </motion.button>
                        </motion.div>
                    ))
                }
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[70px] sm:top-[80px] left-0 right-0 bg-white shadow-lg md:hidden"
                    >
                        <div className="flex flex-col p-4">
                            {NavbarItems.map((item, index) => (
                                <motion.button 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                                    className="py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 text-left"
                                >
                                    {item.title}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}