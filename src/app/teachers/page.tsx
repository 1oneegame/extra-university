import { TeacherCard } from "@/components/ui/TeacherCard";

const teachers = [
  {
    photo: "/assets/images/aigul-sadykova.svg",
    name: "Айгуль Садыкова",
    position: "Профессор кафедры искусственного интеллекта.",
    description: [
      "15 лет преподавательского стажа, включая опыт работы в международных университетах ",
      "Докторская степень в области компьютерных наук (PhD in Computer Science) ",
      'Соосновательница стартапа "MedAI" (диагностика заболеваний на ранней стадии с использованием ИИ)',
    ],
  },
  {
    photo: "/assets/images/damir-ahmetov.svg",
    name: "Дамир Испаев",
    position: "Доцент кафедры предпринимательства и инноваций.",
    description: [
      "10 лет опыта в бизнес-образовании и консультировании стартапов.",
      "Докторская степень в области управления бизнесом (DBA).",
      "Ментор в университетском бизнес-инкубаторе, помог запустить более 10 стартапов.",
    ],
  },
  {
    photo: "/assets/images/john-mitchell.png",
    name: "Джон Митчелл",
    position: "Профессор искусственного интеллекта",
    description: [
      "Экс-руководитель отдела AI в Google, автор 50+ научных статей.",
      "PhD в Стэнфорде, специализация — нейронные сети и deep learning.",
      "Консультант стартапов в Silicon Valley, включая OpenAI и NVIDIA.",
    ],
  },
  {
    photo: "/assets/images/hiroshi-tanaka.png",
    name: "Хироши Танака",
    position: "Профессор робототехники",
    description: [
      "Разработал хирургических роботов для клиник Японии и Южной Кореи.",
      "Лауреат премии «Инноватор года» в области медицинских технологий.",
      "Член IEEE, курирует студенческие проекты по биоинженерии.",
    ],
  },
  {
    photo: "/assets/images/rajesh-kumar.png",
    name: "Раджеш Кумар",
    position: "Профессор IT и кибербезопасности",
    description: [
      "Эксперт по блокчейну, работал над защитой данных для правительства Индии.",
      "Основатель платформы для обучения Ethical Hacking.",
      "Спикер на DEF CON и Black Hat.",
    ],
  },
  {
    photo: "/assets/images/sophie-martin.png",
    name: "Софи Мартен",
    position: "Старший преподаватель финтеха",
    description: [
      "Разработала алгоритмы для European Central Bank.",
      "Соучредитель платежной системы с 10 млн пользователей.",
      "Ведет курс по криптовалютам и DeFi.",
    ],
  },
  {
    photo: "/assets/images/lucas-wagner.png",
    name: "Лукас Вагнер",
    position: "Профессор цифровой экономики",
    description: [
      "Автор модели прогнозирования кризисов для ЕС.",
      "Консультант Deutsche Bank и SAP.",
      "Курирует студенческие проекты по устойчивому развитию.",
    ],
  },
  {
    photo: "/assets/images/anna-kowalski.png",
    name: "Анна Ковальски",
    position: "Доцент машинного обучения",
    description: [
      "Разработала алгоритмы для автономных автомобилей Tesla.",
      "PhD в MIT, фокус на reinforcement learning.",
      "Ментор Kaggle-соревнований.",
    ],
  },
  {
    photo: "/assets/images/ji-hoon-kim.png",
    name: "Джи Хун Ким",
    position: "Лектор робототехники",
    description: [
      "Создатель дронов для мониторинга стихийных бедствий.",
      "Победитель RoboCup в категории «Промышленные роботы».",
      "Партнер Samsung в проекте Smart Factory.",
    ],
  },
  {
    photo: "/assets/images/pierre-leblanc.png",
    name: "Пьер Леблан",
    position: "Профессор квантового машинного обучения",
    description: [
      "Эксперт в области квантовых алгоритмов, участник проекта IBM Quantum.",
      "Автор исследований, опубликованных в Nature и Science, по применению ИИ в квантовых вычислениях.",
      "Консультант CERN в разработке моделей для анализа данных Большого адронного коллайдера.",
    ],
  },
  {
    photo: "/assets/images/arina-volkova.png",
    name: "Арина Волкова",
    position: "Профессор IT-разработки",
    description: [
      "Эксперт в веб-технологиях, автор курса по React и Node.js.",
      "Сооснователь IT-школы для детей «CodeNomads».",
      "Победитель хакатонов от Yandex и Tinkoff.",
    ],
  },
  {
    photo: "/assets/images/ruslan-ibragimov.png",
    name: "Руслан Ибрагимов",
    position: "Профессор робототехники",
    description: [
      "Разработал роботизированную линию для ТОО «КазМунайГаз».",
      "Доктор технических наук, специализация — промышленная автоматизация.",
      "Член Академии наук РК.",
    ],
  },
  {
    photo: "/assets/images/aslan-nurmagambetov.png",
    name: "Аслан Нурмагамбетов",
    position: "Старший преподаватель ИИ",
    description: [
      "Разработал систему распознавания лиц для аэропорта Алматы.",
      "Победитель конкурса AI Journey от Сбербанка.",
      "Автор курса по компьютерному зрению на Coursera.",
    ],
  },
  {
    photo: "/assets/images/darya-smirnova.png",
    name: "Дарья Смирнова",
    position: "Лектор мобильной разработки",
    description: [
      "Создала приложение для Astana Motors с 500k+ пользователей.",
      "Эксперт JetBrains по Kotlin и Swift.",
      "Организатор Mobile Dev Conference в Нур-Султане.",
    ],
  },
  {
    photo: "/assets/images/alibek-zhanibekov.png",
    name: "Алибек Жанибеков",
    position: "Доцент управления проектами",
    description: [
      "PM в крупных стройпроектах (EXPO-2017, LRT Алматы).",
      "Сертифицированный Scrum Master (PSM I).",
      "Автор методики Agile для образовательных программ.",
    ],
  },
];

export default function TeachersPage() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-12 mt-20 flex flex-col items-center"
      data-oid="dygqfw2"
    >
      <div className="text-center mb-12" data-oid="044i50u">
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          data-oid="0ekh82i"
        >
          Наши преподаватели
        </h1>
        <p className="text-lg md:text-2xl text-gray-600" data-oid="ib-ifzn">
          В команде{" "}
          <span className="text-blue-500 font-medium" data-oid="md4sr2p">
            Extra University
          </span>{" "}
          — лучшие эксперты в своих областях
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        data-oid="7wi_h3c"
      >
        {teachers.map((t, i) => (
          <TeacherCard
            key={i}
            photo={t.photo}
            name={t.name}
            position={t.position}
            description={t.description}
            data-oid="5nn-8_y"
          />
        ))}
      </div>
    </div>
  );
}
