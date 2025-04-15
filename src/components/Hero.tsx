'use client'
import { TypeAnimation } from "react-type-animation";

export default function Hero(){
    return(
        <div id="hero" className="flex flex-col max-w-screen bg-white mt-[70px] sm:mt-[80px] md:mt-[100px]">
            <div className="mt-48 text-4xl sm:text-6xl md:text-8xl lg:text-9xl flex flex-col justify-center items-center font-bold px-4 text-center">
                <h1>Extra University:</h1>
                <TypeAnimation
                    sequence={[
                        'Традиции...',
                        1000,
                        'Инновации...',
                        1000,
                        'Трансформация...',
                        1000,
                    ]}
                    wrapper="h1"
                    speed={10}
                    className="text-blue-500"
                    repeat={Infinity}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8 md:mt-12 px-4">
                <button className="w-full sm:w-auto text-lg sm:text-2xl text-medium px-6 py-4 shadow-md bg-blue-500 border-1 text-white rounded-lg cursor-pointer scale-95 hover:scale-105 transition-all duration-500">Получить консультацию</button>
                <button className="w-full sm:w-auto text-lg sm:text-2xl text-medium px-6 py-4 shadow-md shadow-blue-300 border-1 rounded-lg text-blue-500 cursor-pointer scale-95 hover:scale-105 transition-all duration-500">Узнать подробнее</button>
            </div>
        </div>
    );
}