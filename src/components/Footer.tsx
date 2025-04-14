import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-blue-500 py-8 md:py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-auto">
                    <Image 
                        src="/assets/images/logo_footer.svg" 
                        alt="Extra University Logo" 
                        width={390} 
                        height={160}
                        className="mb-4 md:mb-6 w-[250px] sm:w-[300px] md:w-[390px]"
                    />
                    <p className="text-white text-base md:text-lg text-center md:text-left max-w-md">
                        Присоединяйтесь к нашей программе и начните <br className="hidden md:block"/>уже сегодня писать свою историю успеха, в<br className="hidden md:block"/> которой знания превращаются в инновации, а<br className="hidden md:block"/> образование – в мощный инструмент для<br className="hidden md:block"/> достижения амбициозных целей.
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[450px]">
                    <input 
                        type="text" 
                        placeholder="Ваше имя:" 
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                    />
                    <input 
                        type="tel" 
                        placeholder="Ваш телефон:" 
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                    />
                    <button className="shadow-[0_0_25px_#00f7ff] cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg transition-all duration-300">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}