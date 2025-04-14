import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-blue-500 py-12">
            <div className="container mx-auto px-4 flex flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-start">
                    <Image 
                        src="/assets/images/logo_footer.svg" 
                        alt="Extra University Logo" 
                        width={390} 
                        height={160}
                        className="mb-6"
                    />
                    <p className="text-white max-w-md text-lg">
                        Присоединяйтесь к нашей программе и начните <br/>уже сегодня писать свою историю успеха, в<br/> которой знания превращаются в инновации, а<br/> образование – в мощный инструмент для<br/> достижения амбициозных целей.<br/>
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-[450px]">
                    <input 
                        type="text" 
                        placeholder="Ваше имя:" 
                        className="w-full px-6 py-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                    />
                    <input 
                        type="tel" 
                        placeholder="Ваш телефон:" 
                        className="w-full px-6 py-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                    />
                    <button className="shadow-[0_0_25px_#00f7ff] cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg text-lg transition-all duration-300">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}