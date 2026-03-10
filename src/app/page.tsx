import type { Metadata } from "next";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import JsonInputSection from "@/components/jsonInputSection";
import JsonOutputSection from "@/components/jsonOutputSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

const baseUrl = "https://json-type-extractor.vercel.app";

const faqItems = [
  {
    question: "Does the JSON to TypeScript conversion run in the browser?",
    answer:
      "Yes. The converter runs client-side in the browser, so the JSON you paste into the tool is processed locally instead of being uploaded to an external API.",
  },
  {
    question: "Can the tool handle nested objects and arrays?",
    answer:
      "Yes. It infers nested object shapes, array item types, primitive unions, and safe quoted keys when JSON property names are not valid TypeScript identifiers.",
  },
  {
    question: "What kind of TypeScript output does it generate?",
    answer:
      "The generator produces interfaces for objects and type aliases for arrays or primitive roots. It is designed for fast copy-paste into frontend apps, APIs, and shared type packages.",
  },
  {
    question: "Can I format invalid or JavaScript-like object input first?",
    answer:
      "Yes. The formatter normalizes common object-literal input such as unquoted keys, single quotes, and trailing commas before generating formatted JSON or TypeScript output.",
  },
];

export const metadata: Metadata = {
  title: "Convert JSON to TypeScript Interfaces Online",
  description:
    "Free JSON to TypeScript converter for interfaces and types. Paste JSON, format it, infer nested objects and arrays, and copy clean TypeScript output instantly.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Type Extractor",
    url: baseUrl,
    logo: `${baseUrl}/apple-icon`,
    sameAs: ["https://github.com/tarektech/json-type-extractor"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Technical Support",
      url: baseUrl,
    },
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Type Extractor",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    description:
      "Free online JSON to TypeScript converter for generating interfaces and types from nested objects, arrays, and primitive values.",
    url: baseUrl,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "tarektech",
    },
    featureList: [
      "Client-side JSON to TypeScript conversion",
      "Nested object and array inference",
      "Format JSON before conversion",
      "Copy generated TypeScript output",
      "Light and dark theme support",
    ],
    potentialAction: {
      "@type": "UseAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: baseUrl,
      },
      "action-accessibility-requirement": {
        "@type": "ActionAccessSpecification",
        category: "free",
      },
    },
    screenshot: `${baseUrl}/opengraph-image.png`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
        <Navbar />
        <main
          id="main-content"
          className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12"
          role="main"
          aria-label="Main content"
        >
          <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
            <section aria-label="Hero section">
              <HeroSection />
            </section>
            <section
              aria-label="JSON converter tool"
              className="grid gap-4 sm:gap-6 lg:grid-cols-2"
            >
              <JsonInputSection />
              <JsonOutputSection />
            </section>
            <section aria-label="Features">
              <FeaturesSection />
            </section>

            <section className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <article className="rounded-2xl border bg-card/60 p-5 sm:p-6">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  JSON to TypeScript converter built for real app data
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  Use this free JSON to TypeScript converter to generate
                  interfaces and type aliases from API responses, mock payloads,
                  fixtures, CMS objects, and config files. The tool works well
                  for nested objects, arrays, primitive roots, and mixed data
                  structures that usually show up in frontend and backend work.
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  Conversion runs in the browser, so you can inspect and convert
                  sample JSON locally before copying the generated TypeScript
                  into your Next.js, React, Node.js, or shared package codebase.
                </p>
              </article>
              <aside className="rounded-2xl border bg-card/60 p-5 sm:p-6">
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Best for
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
                  <li>Frontend API typing</li>
                  <li>Schema prototyping</li>
                  <li>Mock response cleanup</li>
                  <li>Fast contract exploration</li>
                  <li>Copy-paste TypeScript generation</li>
                </ul>
              </aside>
            </section>

            <section className="rounded-2xl border bg-card/60 p-5 sm:p-6">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                How to convert JSON to TypeScript
              </h2>
              <ol className="mt-4 grid gap-4 md:grid-cols-3">
                <li className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">1. Paste your JSON</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Drop in an API payload, mock file, or object sample from
                    your app.
                  </p>
                </li>
                <li className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">2. Format and inspect</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Normalize object-like input and make the structure readable
                    before generating types.
                  </p>
                </li>
                <li className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">3. Copy the output</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Use the generated interfaces or type aliases directly in
                    your TypeScript code.
                  </p>
                </li>
              </ol>
            </section>

            <section className="rounded-2xl border bg-card/60 p-5 sm:p-6">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                What the generator handles
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">Nested objects</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Infer inline object shapes for deeply nested API responses
                    and config objects.
                  </p>
                </article>
                <article className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">Arrays and unions</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Generate array item interfaces and primitive unions from
                    mixed lists.
                  </p>
                </article>
                <article className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">Unsafe keys</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Quote property names that would otherwise break TypeScript
                    syntax.
                  </p>
                </article>
                <article className="rounded-xl border bg-background/70 p-4">
                  <h3 className="font-medium">Quick cleanup</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Format rough object input before conversion to reduce parse
                    errors.
                  </p>
                </article>
              </div>
            </section>

            <section className="rounded-2xl border bg-card/60 p-5 sm:p-6">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                FAQ
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-4 rounded-xl border bg-background/70 px-4"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-item-${index + 1}`}
                  >
                    <AccordionTrigger className="text-sm sm:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-6 text-muted-foreground sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
