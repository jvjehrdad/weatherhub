import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'Weather Hub - Modern Weather Application',
    template: '%s | Weather Hub',
  },
  description: 'A modern weather application built with Next.js 14, featuring real-time weather updates, dark mode support, and a beautiful responsive UI.',
  keywords: ['weather', 'weather app', 'next.js', 'react', 'typescript', 'dark mode', 'tailwind css'],
  authors: [{ name: 'Weather Hub Team' }],
  creator: 'Weather Hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weather-hub.example.com',
    siteName: 'Weather Hub',
    title: 'Weather Hub - Modern Weather Application',
    description: 'A modern weather application built with Next.js 14, featuring real-time weather updates and dark mode support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Hub - Modern Weather Application',
    description: 'A modern weather application built with Next.js 14, featuring real-time weather updates and dark mode support.',
    creator: '@weatherhub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
