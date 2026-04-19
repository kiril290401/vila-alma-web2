"use client"
import { contacts, emailAddress, mapsLink, phoneNUmberFormatted, physicalAddress } from '@/lib/contact/data'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section id="контакти" className="relative w-full bg-[#f4ece3] py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,_rgba(139,115,85,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.75),_transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b7355] mb-4">Контакти</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
            Свържете се с нас
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-8">
            Ние сме тук, за да Ви помогнем. Изпратете запитване или посетете нашия адрес.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {contacts.map((contact, i) => (
            <Link key={i} href={contact.href} className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-200/70 backdrop-blur-sm transition hover:-translate-y-1 flex flex-col items-center text-center gap-4">
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b7355]/10 text-[#8b7355] shadow-md shadow-[#8b7355]/10">
                {React.createElement(contact.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{contact.name}</h3>
              <p className="text-gray-600 leading-7">
                {contact.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-slate-300/30">
          <iframe
            title="Vila Alma location"
            src={mapsLink}
            className="h-[360px] w-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact