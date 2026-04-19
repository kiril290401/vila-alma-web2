import React from 'react'
import { IoLogoFacebook, IoLogoWhatsapp, IoMdPhonePortrait } from 'react-icons/io'
import { telephoneNumber, emailAddress, physicalAddress, contacts, mapsLink } from '@/lib/contact/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-center md:text-left bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#8b7355]">Vila Alma</h3>
            <div className="space-y-2 text-gray-300 flex flex-col items-center md:items-start">
              <Link href={`tel:${telephoneNumber}`} className="flex items-center gap-2">
                {telephoneNumber}
              </Link>
              <Link href={`mailto:${emailAddress}`} className="flex items-center gap-2">
                {emailAddress}
              </Link>
              <Link href={mapsLink} className="flex items-start gap-2">
                <span className="text-sm leading-5">{physicalAddress}</span>
              </Link>
            </div>
          </div>

          {/* Enlaces sociales */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className="text-xl font-semibold mb-4 text-[#8b7355]">Свържете се с нас</h3>
            <div className="flex gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8b7355]/20 hover:bg-[#8b7355]/40 transition-colors"
                  title={contact.name}
                >
                  <contact.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#8b7355]">Информация</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Открийте спокойствието на Черноморието в нашия уютен комплекс.</p>
              <p>Резервирайте своето място за незабравими моменти.</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Vila Alma. Всички права запазени.
            </p>
            <p className="text-gray-400 text-sm">
              Създадено от Кирил Кръстев. Дизайн и разработка на уебсайта.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer