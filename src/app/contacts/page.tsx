import React from 'react';

const ContactsPage: React.FC = () => {
    return (
        <main className="mt-30 mb-0 min-h-screen flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Контакты</h1>
                <section className="mb-8">
                    <p className="mb-4 text-gray-700 text-center">
                        По всем вопросам обращайтесь:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <span className="font-semibold">Email:</span>{' '}
                            <a href="mailto:info@extra-university.edu" className="text-blue-600 hover:underline">
                                info@extra-university.edu
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">Телефон:</span>{' '}
                            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                                +7 (777) 777 77 77
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">Адрес:</span> Almaty
                        </li>
                    </ul>
                </section>
                <form className="space-y-4">
                    <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">Связаться с нами</h2>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Ваш email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                    />
                    <textarea
                        placeholder="Ваше сообщение"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows={4}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ContactsPage;