import React from 'react'
import { attractions } from '@/lib/attractions/data'
import Image from 'next/image'
const Attractions = () => {
  return (
    <section id="забележителности" className="w-full py-20 bg-gradient-to-b from-white to-gray-100">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Забележителности
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Разгледайте близките забележителности и дейности около Vila Alma
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto px-4">
        {attractions.map((attraction, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <div className="absolute inset-0 z-10 bg-black/20 hover:bg-black/5 transition-colors duration-300" />
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {attraction.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {attraction.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Attractions