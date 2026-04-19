import {IoLogoFacebook, IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";

export const telephoneNumber = "+1234567890";
export const phoneNUmberFormatted = "+359 55 123 456";
export const emailAddress = "info@vila-alma.com"
export const physicalAddress = "ул. „Георги Димитров“ 1, 8270 Синеморец, България"
export const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.341780499687!2d27.64850767511878!3d42.66112397918477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6987d1f1b6e9d%3A0x23e9ea86b2b0f6db!2sNessebar%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1719267342930!5m2!1sen!2sbg"

export const contacts = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/vilaalma",
    description: "Посетете нашата Facebook страница за повече информация и актуални новини.",
    icon: IoLogoFacebook,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${telephoneNumber}`,
    description: "Свържете се с нас директно чрез WhatsApp за бързи отговори на вашите въпроси.",
    icon: IoLogoWhatsapp,
  },
  {
    name: "Phone",
    href: `tel:${telephoneNumber}`,
    description: "Позвънете ни за директна комуникация и резервации.",
    icon: IoMdPhonePortrait,
  }
];




