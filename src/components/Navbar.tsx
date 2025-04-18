'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavbarItem{
    title: string;
    link: string;
    sectionId?: string;
}

const NavbarItems : NavbarItem[] = [
    {
        title: 'О нас',
        link: '/about',
        sectionId: 'hero'
    },
    {
        title: 'Поступление',
        link: '/admission',
        sectionId: 'about'
    },
    {
        title: 'Программы',
        link: '/programs',
        sectionId: 'programs'
    },
    {
        title: 'Преподаватели',
        link: '/teachers',
        sectionId: 'professors'
    },
    {
        title: 'Новости',
        link: '/news',
        sectionId: 'news'
    },
    {
        title: 'Университет',
        link: '/university',
        sectionId: 'introduce'
    },
    {
        title: 'Контакты',
        link: '/contacts',
        sectionId: 'contact'
    },
]

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return(
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 
                ${scrolled 
                    ? "bg-white/90 backdrop-blur-md shadow-lg" 
                    : "bg-white/80 backdrop-blur-sm"} 
                transition-all duration-300`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-[70px] sm:h-[80px] md:h-[100px]">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    <Link href="/">
                        <Image 
                            src="/assets/images/logo.svg" 
                            width={182} 
                            height={75} 
                            alt="Extra University Logo" 
                            className="w-auto h-[50px] md:h-[60px]"
                            priority
                        />
                    </Link>
                </motion.div>
                
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {NavbarItems.map((item, index) => {
                        const isActive = pathname === item.link || 
                            (pathname === '/' && item.link === '/') ||
                            (pathname.startsWith(item.link) && item.link !== '/');
                            
                        return (
                            <Link 
                                key={index}
                                href={item.link}
                                className="relative px-3 py-2 group"
                            >
                                <motion.span 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`text-sm font-medium relative z-10 
                                        ${isActive ? 'text-blue-600' : 'text-gray-700'}
                                        group-hover:text-blue-600 transition-colors duration-200`}
                                >
                                    {item.title}
                                </motion.span>
                                
                                {isActive && (
                                    <motion.span
                                        layoutId="navbar-active-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                                <span className="absolute inset-0 rounded-md bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                        );
                    })}
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                        <Link href="/admission">
                            Хочу поступить!
                        </Link>
                    </motion.button>
                </div>

                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-100 bg-white"
                    >
                        <div className="p-4 space-y-1">
                            {NavbarItems.map((item, index) => {
                                const isActive = pathname === item.link || 
                                    (pathname === '/' && item.link === '/') ||
                                    (pathname.startsWith(item.link) && item.link !== '/');
                                    
                                return (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Link 
                                            href={item.link}
                                            className={`block py-2 px-4 rounded-md transition-colors duration-200
                                                ${isActive 
                                                    ? 'bg-blue-50 text-blue-600 font-medium' 
                                                    : 'text-gray-700 hover:bg-gray-50'}`}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: NavbarItems.length * 0.05 }}
                                className="pt-2 mt-2 border-t border-gray-100"
                            >
                                <Link 
                                    href="/admission"
                                    className="block py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-center font-medium transition-colors duration-200"
                                >
                                    Хочу поступить!
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}