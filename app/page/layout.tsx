import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Weather Hub',
  description: 'Weather Hub - Your modern weather application with real-time updates, dark mode support, and beautiful UI.',
  keywords: ['weather', 'weather app', 'next.js', 'react', 'dark mode', 'typescript'],
  openGraph: {
    title: 'Weather Hub - Modern Weather Application',
    description: 'Your modern weather application with real-time updates, dark mode support, and beautiful UI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Hub - Modern Weather Application',
    description: 'Your modern weather application with real-time updates, dark mode support, and beautiful UI.',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

