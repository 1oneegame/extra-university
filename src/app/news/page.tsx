import React from 'react';

export default function NewsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">University News & Updates</h1>
            <div className="grid gap-6">
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Latest Campus Updates</h2>
                    <p className="text-gray-600 mb-4">
                        Stay informed about the latest news and events happening at our university.
                    </p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
                    <p className="text-gray-600 mb-4">
                        Check out our calendar for upcoming academic and social events.
                    </p>
                </article>
            </div>
        </div>
    );
}