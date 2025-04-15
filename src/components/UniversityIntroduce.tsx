'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function UniversityIntroduce(){
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id='introduce' 
            className="w-full mt-48"
        >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4"
                >
                    <h1>Познакомься с <span className="text-blue-500">Extra University</span></h1>
                </motion.div>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-6xl md:w-full px-4"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="h-[300px] sm:h-[400px] md:h-[600px] relative overflow-hidden rounded-lg"
                    >
                        <Image src="/assets/images/university-introduce.svg" fill alt="introduce-picture" className="object-cover"/>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" 
                        />
                    </motion.div>
                    <div className="flex justify-center items-center">
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            className="hover:scale-105 absolute text-base sm:text-lg md:text-2xl font-medium text-white bg-blue-500 hover:bg-blue-600 w-full sm:w-1/2 transition-all duration-300 cursor-pointer bottom-5 px-4 py-2 md:px-6 md:py-4 rounded-lg shadow-md"
                        >
                            Запишись на экскурсию по кампусу
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}