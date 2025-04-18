'use client'

import Image from 'next/image'

type Props = {
  photo: string
  name: string
  position: string
  description: string[]
}

export const TeacherCard = ({ photo, name, position, description }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 w-full max-w-xs">
      <div className="w-40 h-40 mx-auto relative mb-4">
        <Image
          src={photo}
          alt={`Фото преподавателя ${name}`}
          fill
          className="rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-blue-600 mb-2">{position}</p>

      <div className="text-sm text-gray-600 space-y-1 text-left mt-3">
        {description.map((line, index) => (
          <p key={index}>• {line}</p>
        ))}
      </div>
    </div>
  )
}
