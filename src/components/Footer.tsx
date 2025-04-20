import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-r from-blue-600 to-blue-500 pt-12 pb-6"
      data-oid="_jkp9p7"
    >
      <div className="container mx-auto px-4 md:px-6" data-oid="0a5rb5v">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10"
          data-oid="jj-.53g"
        >
          <div className="space-y-6" data-oid="wt9776u">
            <Image
              src="/assets/images/logo_footer.svg"
              alt="Extra University Logo"
              width={250}
              height={100}
              className="mb-4"
              data-oid="6-qkrsw"
            />

            <p
              className="text-white/90 text-sm leading-relaxed"
              data-oid="yodjr1p"
            >
              Присоединяйтесь к нашей программе и начните уже сегодня писать
              свою историю успеха, в которой знания превращаются в инновации, а
              образование – в мощный инструмент для достижения амбициозных
              целей.
            </p>
            <div className="flex space-x-4 pt-2" data-oid="7:1k.8p">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <Link
                    key={social}
                    href={`https://${social}.com`}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={`${social} link`}
                    data-oid="_uix4l6"
                  >
                    <span className="text-white text-xl" data-oid="lul3jec">
                      {social === "facebook" && "f"}
                      {social === "twitter" && "X"}
                      {social === "instagram" && "IG"}
                      {social === "linkedin" && "in"}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="space-y-6" data-oid="15jhvph">
            <h3
              className="text-white font-semibold text-xl mb-4"
              data-oid="62q6612"
            >
              Навигация
            </h3>
            <div className="grid grid-cols-2 gap-2" data-oid="bmqj65-">
              {[
                { name: "Главная", href: "/" },
                { name: "О нас", href: "/about" },
                { name: "Программы", href: "/programs" },
                { name: "Поступление", href: "/admission" },
                { name: "Преподаватели", href: "/teachers" },
                { name: "Новости", href: "/news" },
                { name: "Университет", href: "/university" },
                { name: "Контакты", href: "/contacts" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors py-1.5"
                  data-oid="gi7i6eo"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6" data-oid="6vw78mj">
            <h3
              className="text-white font-semibold text-xl mb-4"
              data-oid="s0yu03_"
            >
              Связаться с нами
            </h3>
            <div className="space-y-3" data-oid="e2q2co5">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder:text-white/60 border border-white/20"
                data-oid="88_95cl"
              />

              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder:text-white/60 border border-white/20"
                data-oid="op36x0z"
              />

              <button
                className="w-full bg-white hover:bg-opacity-90 text-blue-600 font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                data-oid="wwj2-gg"
              >
                Отправить
              </button>
            </div>
            <div className="pt-4" data-oid="2t0ru6h">
              <p
                className="text-white/80 text-sm flex items-center gap-2 mb-2"
                data-oid="m43:-6h"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  data-oid="g8nlycn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    data-oid="iy6-hp7"
                  />
                </svg>
                +7 (777) 123-45-67
              </p>
              <p
                className="text-white/80 text-sm flex items-center gap-2 mb-2"
                data-oid="ge_mbgj"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  data-oid="t701.nm"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    data-oid="8-.esyx"
                  />
                </svg>
                info@extrauniversity.kz
              </p>
              <p
                className="text-white/80 text-sm flex items-center gap-2"
                data-oid="ex99o1_"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  data-oid="blqtgao"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    data-oid="fxo4xng"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    data-oid="3qg71uy"
                  />
                </svg>
                г. Алматы
              </p>
            </div>
          </div>
        </div>
        <div
          className="pt-6 mt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center"
          data-oid="jjc:ce7"
        >
          <p className="text-white/70 text-sm" data-oid="9ptt62j">
            © {currentYear} Extra University. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0" data-oid="w2-_6:e">
            <Link
              href="/privacy"
              className="text-white/70 hover:text-white text-sm transition-colors"
              data-oid="o-de6g1"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms"
              className="text-white/70 hover:text-white text-sm transition-colors"
              data-oid=".hddf.v"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
