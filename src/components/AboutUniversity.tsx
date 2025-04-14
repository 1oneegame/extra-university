import { Search } from "lucide-react";
import Image from "next/image";

export default function AboutUniversity(){
    return(
        <div className="max-w-screen min-h-screen">
            <div className="flex flex-col justify-center items-center pt-20">
                <div className="text-5xl font-bold">
                    <h1 className="text-black">«<span className="text-blue-500">Extra University</span>» – это больше, чем просто ВУЗ</h1>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center mt-12">
                    <div className="bg-blue-500 text-white shadow-md rounded-lg w-[37%] px-10 py-6 border-1 text-xl font-normal">
                        <p>
                            Мы создаём сообщество 
                            единомышленников, где каждый 
                            студент получает возможность 
                            воплотить свои идеи в жизнь.
                        </p>
                    </div>
                    <div className="bg-white text-black shadow-md shadow-blue-300 rounded-lg w-[37%] px-10 py-6 border-1 text-xl font-normal">
                        <p>
                            <span className="font-bold">Наша миссия</span> – прививать любовь 
                            к знаниям, развивать практический
                            склад ума и вдохновлять на 
                            достижение амбициозных целей.
                        </p>
                    </div>
                </div>
                <div className="border-1 shadow-lg shadow-blue-200 rounded-lg w-[75%] my-12 flex flex-row gap-8">
                    <div className="ml-8">
                        <Image className="scale-110 mb-6" src="assets/images/student.svg" width="283" height="415" alt="student"/>
                    </div>
                    <div className="flex flex-col justify-between py-12 ml-4">
                        <h1 className="text-8xl font-bold text-black">
                            Найдите вашу <br />
                            программу
                        </h1>
                        <div className="relative mt-8">
                            <input 
                                type="text" 
                                placeholder="Поиск академических программ..."
                                className="w-[100%] px-6 py-4 text-lg border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="absolute right-[2%] top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 cursor-pointer hover:scale-105 transition-all duration-500">
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}