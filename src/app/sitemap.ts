import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://guest-house-alma.com',
      lastModified: new Date(),
      changeFrequency: 'weekly', // По-добре седмично, ако добавяш снимки често
      priority: 1,
    },
    // Ако имаш отделни страници като /rezervacia или /blog, добави ги тук БЕЗ #
  ]
}