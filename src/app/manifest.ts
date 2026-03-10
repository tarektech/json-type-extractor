import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Type Extractor - JSON to TypeScript Converter",
    short_name: "Type Extractor",
    description:
      "Convert JSON to TypeScript interfaces and types instantly with a free online developer tool.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    categories: ["developer tools", "utilities", "productivity"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
