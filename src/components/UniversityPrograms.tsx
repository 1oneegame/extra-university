'use client'
import Image from "next/image";
import { motion } from "framer-motion";

interface ProgramCard {
    title: string;
    image: string;
    alt: string;
}

export default function UniversityPrograms() {
    const programs : ProgramCard[] = [
        {
            title: "Образовательные курсы",
            image: "/assets/images/educational-courses.svg",
            alt: "educational-courses"
        },
        {
            title: "Программы Бакалавриата",
            image: "/assets/images/bachelor-programs.svg",
            alt: "bachelor-programs"
        },
        {
            title: "Программы Магистратуры",
            image: "/assets/images/master-programs.svg",
            alt: "master-programs"
        }
    ];

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="programs" 
            className="w-full mt-48"
        >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center px-4 md:px-8 lg:px-16">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                >
                    <h1>Получи образование в <span className="text-blue-500">Extra University</span></h1>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl"
                >
                    {programs.map((program, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-[1/1] rounded-lg overflow-hidden group"
                        >
                            <Image 
                                src={program.image} 
                                fill 
                                alt={program.alt}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" 
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                                <motion.h3 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4"
                                >
                                    {program.title}
                                </motion.h3>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 text-base sm:text-lg font-medium"
                                >
                                    Подробнее
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
