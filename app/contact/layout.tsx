import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Weather Hub',
  description: 'Get in touch with us. Fill out our contact form and we\'ll respond as soon as possible.',
  keywords: ['contact', 'weather hub', 'get in touch', 'customer service'],
  openGraph: {
    title: 'Contact Us | Weather Hub',
    description: 'Get in touch with us. Fill out our contact form and we\'ll respond as soon as possible.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Weather Hub',
    description: 'Get in touch with us. Fill out our contact form and we\'ll respond as soon as possible.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

