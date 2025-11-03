import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import JsonInputSection from '@/components/jsonInputSection';
import JsonOutputSection from '@/components/jsonOutputSection';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
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
  );
}
