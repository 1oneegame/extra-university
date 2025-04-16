import React from "react";

const universityInfo = {
    name: "Extra University",
    address: "Almaty",
    description:
        "Загород анау мынау",
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46255.588282381716!2d77.02074756183933!3d43.565419289106664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388304ea7948b71d%3A0xfa53b98182586241!2sAli!5e0!3m2!1sen!2skz!4v1744820167288!5m2!1sen!2skz",
};

export default function UniversityPage() {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-25">
            <h1 className="text-3xl font-bold mb-2">{universityInfo.name}</h1>
            <p className="text-gray-600 mb-1">{universityInfo.address}</p>
            <p className="mb-6">{universityInfo.description}</p>
            <div className="h-100 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border">
                <iframe
                    src={universityInfo.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University Map"
                ></iframe>
            </div>
        </div>
    );
}