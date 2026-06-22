import type { Metadata } from 'next';
import { Quicksand, Inter } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tucson Twinkle | Christmas Light Installation in Tucson, AZ',
  description:
    'Professional Christmas and holiday light installation in Tucson, AZ. From budget-friendly setups to premium year-round architectural lighting. Free estimates, professional install, and takedown included.',
  keywords:
    'Christmas lights Tucson, holiday light installation, Christmas light installer Tucson AZ, holiday decorating, permanent outdoor lighting',
  openGraph: {
    title: 'Tucson Twinkle | Christmas Light Installation in Tucson, AZ',
    description:
      'Make your home sparkle. Professional holiday light installation and takedown in Tucson, AZ.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Tucson Twinkle',
    description:
      'Professional Christmas and holiday light installation in Tucson, AZ.',
    url: 'https://tucsontwinkle.com',
    telephone: '(520) 555-GLOW',
    email: 'hello@tucsontwinkle.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tucson',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Tucson',
      containedInPlace: {
        '@type': 'State',
        name: 'Arizona',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
    },
    priceRange: '$199 - $1499+',
  };

  return (
    <html lang="en" className={`${quicksand.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
