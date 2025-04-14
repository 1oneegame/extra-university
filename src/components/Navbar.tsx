import Image from "next/image";
import Link from "next/link";

const NavbarItems = [
    {
        title: 'О нас',
        link: '/'
    },
    {
        title: 'Поступление',
        link: '/'
    },
    {
        title: 'Программы',
        link: '/'
    },
    {
        title: 'Преподаватели',
        link: '/'
    },
    {
        title: 'Новости',
        link: '/'
    },
    {
        title: 'Университет',
        link: '/'
    },
    {
        title: 'Контакты',
        link: '/'
    },
]

export default function Navbar(){
    return(
        <div className="fixed top-0 left-0 right-0 z-1 flex flex-row px-12 bg-white rounded-xl shadow-md shadow-blue-200 max-w-screen h-[100px] justify-between items-center">
            <div className="scale-95 hover:scale-100 transition-all duration-300">
                <Link href="/"><Image src="assets/images/logo.svg" width='182' height='75' alt="logo"/></Link>
            </div>
            <div className="flex flex-row gap-8 pr-20">
                {
                    NavbarItems.map((item, index) => (
                        <div key={index}> 
                            <Link href={item.link}><span className="text-gray-800 text-lg hover:text-blue-500 transition-all duration-300">{item.title}</span></Link>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}