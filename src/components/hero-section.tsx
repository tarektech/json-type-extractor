import React from "react";

export default function HeroSection() {
  return (
    <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-2">
        JSON to TypeScript Converter
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
        Convert JSON into clean TypeScript interfaces and types instantly.
        Format rough payloads, infer nested objects and arrays, and copy the
        generated output directly into your app.
      </p>
    </div>
  );
}
