import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvertTypeProvider } from "@/components/convertProvider";
import ToasterWrapper from "@/components/toaster-wrapper";
import { DataBuddyProvider } from "@/components/data-buddy-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://json-type-extractor.vercel.app"),
  title: {
    default: "JSON to TypeScript Converter - Free Online Tool | Type Extractor",
    template: "%s | Type Extractor",
  },
  description:
    "Convert JSON to TypeScript interfaces and types instantly with a free online converter. Format JSON, handle nested objects and arrays, and copy clean TypeScript output.",
  keywords: [
    "json to typescript",
    "json to typescript converter",
    "typescript interface generator",
    "json to ts",
    "json to typescript interface",
    "convert json to type",
    "typescript type generator",
  ],
  authors: [
    { name: "tarektech", url: "https://json-type-extractor.vercel.app" },
  ],
  creator: "tarektech",
  publisher: "tarektech",
  category: "technology",
  applicationName: "Type Extractor",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://json-type-extractor.vercel.app",
    siteName: "Type Extractor",
    title: "JSON to TypeScript Converter - Free Online Tool | Type Extractor",
    description:
      "Convert JSON to TypeScript interfaces and types instantly with a free online converter built for nested objects, arrays, and fast copy-paste workflows.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Type Extractor - Convert JSON to TypeScript Types",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON to TypeScript Converter | Type Extractor",
    description:
      "Free JSON to TypeScript converter for interfaces, types, nested objects, and arrays.",
    creator: "@tarektech",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  // Verification meta tags for search consoles
  // To add verification codes, uncomment and replace with your actual verification codes:
  // other: {
  //   'google-site-verification': 'your-google-verification-code',
  //   'msvalidate.01': 'your-bing-verification-code',
  // },
  other: {},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvertTypeProvider>{children}</ConvertTypeProvider>
          <Analytics />
          <ToasterWrapper />
          <DataBuddyProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
