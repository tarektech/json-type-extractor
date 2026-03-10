import { MetadataRoute } from "next";

const baseUrl = "https://json-type-extractor.vercel.app";
const lastModified = new Date("2026-03-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
