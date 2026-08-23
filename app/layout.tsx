import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Андрій Лісовий — маркетинг та комунікації',
  description: 'Андрій Лісовий — Marketing & Communications Leader. Personal brands, community-centered marketing, LinkedIn, освіта та консалтинг.',
  openGraph: {
    title: 'Андрій Лісовий — маркетинг та комунікації',
    description: 'Андрій Лісовий — Marketing & Communications Leader. Personal brands, community-centered marketing, LinkedIn, освіта та консалтинг.',
    type: 'website',
    locale: 'uk_UA'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}</body></html>;
}
