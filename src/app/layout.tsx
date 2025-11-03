import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ConvertTypeProvider } from '@/components/convertProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Type Extractor - JSON to TypeScript Converter',
  description:
    'Instantly convert JSON objects into valid, formatted TypeScript interfaces and types. A lightweight developer tool for rapid type generation.',
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

  ],
  authors: [{ name: 'tarektech' }],
  openGraph: {
    title: 'Type Extractor - JSON to TypeScript Converter',
    description:
      'Instantly convert JSON objects into valid TypeScript type definitions',
    type: 'website',
  },
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
        </ThemeProvider>
      </body>
    </html>
  );
}
