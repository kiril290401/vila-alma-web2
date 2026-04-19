import {IoLogoFacebook, IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";

export const telephoneNumber = "+359878901846";
export const phoneNUmberFormatted = "+359 878 901 846";
export const emailAddress = "guest.house.almaa@gmail.com";
export const physicalAddress = " ул. „Генерал Андреев“ 22, Сопот"
export const mapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.582594447255!2d24.763923899999998!3d42.651857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9972072a0314b%3A0x1f6f69d4aed79478!2sul.%20%22Gen.%20Andreev%22%2022%2C%204330%20Sopot%2C%20Bulgaria!5e1!3m2!1sen!2ses!4v1776588951537!5m2!1sen!2ses"

export const contacts = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1KgDWmzTwv/",
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




