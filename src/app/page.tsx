// import { Suspense } from 'react';
import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import JsonInputSection from '@/components/jsonInputSection';
import JsonOutputSection from '@/components/jsonOutputSection';
import Footer from '@/components/footer';
// import PurchaseSuccessHandler from '@/components/purchase-success-handler';

export default function HomePage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Type Extractor',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description:
      'Free online tool to instantly convert JSON objects into valid, formatted TypeScript interfaces and types. A lightweight developer tool for rapid type generation with syntax highlighting and real-time conversion.',
    url: 'https://json-type-extractor.vercel.app',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'tarektech',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    featureList: [
      'Real-time JSON to TypeScript conversion',
      'Syntax highlighting',
      'Copy to clipboard',
      'Dark mode support',
      'Free and open source',
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* <Suspense fallback={null}>
        <PurchaseSuccessHandler />
      </Suspense> */}
      <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
          <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
            {/* Hero Section */}
            <HeroSection />

            {/* Two Column Layout */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              {/* Input Section */}
              <JsonInputSection />

              {/* Output Section */}
              <JsonOutputSection />
            </div>

            {/* Features Section */}
            <FeaturesSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
