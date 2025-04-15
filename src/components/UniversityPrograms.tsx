import Image from "next/image";

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

    return (
        <div className="w-full mt-48 ">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center px-4 md:px-8 lg:px-16">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    <h1>Получи образование в <span className="text-blue-500">Extra University</span></h1>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
                    {programs.map((program, index) => (
                        <div key={index} className="relative aspect-[1/1] rounded-lg overflow-hidden group">
                            <Image 
                                src={program.image} 
                                fill 
                                alt={program.alt}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                                    {program.title}
                                </h3>
                                <button className="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-base sm:text-lg font-medium">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
