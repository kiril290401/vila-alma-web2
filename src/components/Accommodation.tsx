import { amenities } from '@/lib/accommodation/data'
import { FaCheck } from "react-icons/fa6";

const Accommodation = () => {
  return (
    <section id="настаняване-и-удобства" className="w-full py-20 bg-gradient-to-b from-white to-gray-100 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Настаняване и удобства
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Къща за гости „Алма“ предлага комфортно настаняване в нова и модерно обзаведена къща, разположена в тиха и спокойна част на Сопот.
            <br/>Гостите разполагат изцяло със самостоятелен първи етаж, което гарантира лично пространство, удобство и спокойствие по време на престоя. Мястото е създадено с внимание към детайла, за да се почувствате като у дома си.
          </p>
        </div>
        {/* Удобства */}
        <div className='text-center text-gray-600 text-lg max-w-2xl mx-auto'>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Удобства
                </h3>
                <p className='mb-6'>
                    Вашият престой включва напълно оборудван и уютен първи етаж, подходящ както за семейства, така и за двойки или малки компании.
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className=''>
                {amenities.map((amenity, index) => (
                    <div key={index} className='flex items-center justify-center gap-2'>
                        <div className="text-principal text-2xl">
                            <FaCheck />
                        </div>
                        <p className="text-gray-600 text-lg max-w-2xl ">{amenity}</p>
                    </div>
                ))}
            </div>
           
        </div>

      
      </div>
    </section>
  )
}

export default Accommodation