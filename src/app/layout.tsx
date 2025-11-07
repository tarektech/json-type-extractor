import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ConvertTypeProvider } from '@/components/convertProvider';
import ToasterWrapper from '@/components/toaster-wrapper';
import { Databuddy } from '@databuddy/sdk/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://json-type-extractor.vercel.app'),
  title: {
    default: 'Type Extractor - JSON to TypeScript Converter | Free Online Tool',
    template: '%s | Type Extractor',
  },
  description:
    'Free online tool to instantly convert JSON objects into valid, formatted TypeScript interfaces and types. A lightweight developer tool for rapid type generation with syntax highlighting and real-time conversion.',
  keywords: [
    'TypeScript',
    'JSON',
    'type converter',
    'developer tools',
    'interface generator',
    'object to type',
    'json to typescript',
    'json to type',
    'object converter',
    'typescript interface generator',
    'json parser',
    'online typescript tool',
    'free typescript converter',
    'typescript type definition',
    'typescript utility',
    'typescript generator',
    'json schema to typescript',
    'typescript interface',
    'web developer tools',
    'frontend development',
  ],
  authors: [
    { name: 'tarektech', url: 'https://json-type-extractor.vercel.app' },
  ],
  creator: 'tarektech',
  publisher: 'tarektech',
  category: 'technology',
  applicationName: 'Type Extractor',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://json-type-extractor.vercel.app',
    siteName: 'Type Extractor',
    title: 'Type Extractor - JSON to TypeScript Converter | Free Online Tool',
    description:
      'Free online tool to instantly convert JSON objects into valid, formatted TypeScript interfaces and types. Real-time conversion with syntax highlighting.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Type Extractor - Convert JSON to TypeScript Types',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type Extractor - JSON to TypeScript Converter',
    description:
      'Free online tool to instantly convert JSON objects into valid TypeScript types. Real-time conversion with syntax highlighting.',
    creator: '@tarektech',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvertTypeProvider>{children}</ConvertTypeProvider>
          <ToasterWrapper />
          <Databuddy
            clientId={process.env.DATABUDDY_CLIENT_ID!}
            trackInteractions={true}
            trackEngagement={true}
            trackErrors={true}
            enableBatching={true}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
