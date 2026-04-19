import React from 'react'

const JsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Къща за гости „Алма“ Сопот",
    "description": "Модерен комфорт, спокойствие и природа в подножието на Стара планина",
    "url": "https://guest-house-alma.com",
    "telephone": "+359878901846",
    "email": "guest.house.almaa@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. „Генерал Андреев“ 22",
      "addressLocality": "Сопот",
      "postalCode": "4330",
      "addressCountry": "BG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.65202267961657",
      "longitude": "24.763880981670574"
    },
    "priceRange": "€€",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Безплатен Wi-Fi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Паркинг",
        "value": "true"
      }
    ],
    "image": [
      "https://guest-house-alma.com/header.webp",
      "https://guest-house-alma.com/gallery-img1.webp",
      "https://guest-house-alma.com/gallery-img3.webp"
    ],
    "sameAs": [
      "https://www.facebook.com/share/1KgDWmzTwv/",
      "https://www.instagram.com/vilaalma"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}

export default JsonLd