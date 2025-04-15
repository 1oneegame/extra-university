import Image from "next/image";

export default function UniversityIntroduce(){
    return(
        <div id='introduce' className="w-full mt-48 ">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                    <h1>Познакомься с <span className="text-blue-500">Extra University</span></h1>
                </div>
                <div className="relative w-full max-w-6xl md:w-full px-4">
                    <div className="h-[300px] sm:h-[400px] md:h-[600px] relative overflow-hidden rounded-lg">
                        <Image src="/assets/images/university-introduce.svg" fill alt="introduce-picture" className="object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="absolute text-base sm:text-lg md:text-2xl font-medium text-white bg-blue-500 hover:bg-blue-600 w-full sm:w-1/2 hover:scale-105 transition-all duration-500 cursor-pointer bottom-5 px-4 py-2 md:px-6 md:py-4 rounded-lg shadow-md">
                            Запишись на экскурсию по кампусу
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}