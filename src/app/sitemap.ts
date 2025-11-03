
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Sitemap {
    const baseUrl = 'https://json-type-extractor.vercel.app/';
  return [
    {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'never',
        priority: 1,
    }
  ];
}
