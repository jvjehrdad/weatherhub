import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weather Dashboard | Weather Hub',
  description: 'Real-time weather updates from major cities around the world. View temperature, humidity, wind speed, and more.',
  keywords: ['weather', 'dashboard', 'real-time weather', 'world weather', 'temperature', 'forecast'],
  openGraph: {
    title: 'Weather Dashboard | Weather Hub',
    description: 'Real-time weather updates from major cities around the world. View temperature, humidity, wind speed, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Dashboard | Weather Hub',
    description: 'Real-time weather updates from major cities around the world.',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

