'use client'
import { TypeAnimation } from "react-type-animation";

export default function Hero(){
    return(
        <div className="flex flex-col max-w-screen min-h-screen bg-white mt-[100px]">
            <div className="pt-20 text-9xl flex flex-col justify-center items-center font-bold">
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
            <div className="flex flex-row gap-4 justify-center items-center mt-20">
                <button className="text-2xl text-medium px-6 py-4 shadow-md bg-blue-500 border-1 text-white rounded-lg cursor-pointer scale-95 hover:scale-105 transition-all duration-500">Получить консультацию</button>
                <button className="text-2xl text-medium px-6 py-4 shadow-md shadow-blue-300 border-1 rounded-lg text-blue-500  cursor-pointer scale-95 hover:scale-105 transition-all duration-500">Узнать подробнее</button>
            </div>
        </div>
    );
}