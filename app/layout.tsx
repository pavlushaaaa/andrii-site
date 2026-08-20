import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Андрій Лісовий — маркетинг та комунікації',
  description: 'Андрій Лісовий — маркетинг- і комунікаційний лідер із Києва. Head of Marketing & Communications у Mission Possible. Стратегія, контент, LinkedIn, стартапи, освіта та персональне позиціонування.',
  openGraph: {
    title: 'Андрій Лісовий — маркетинг та комунікації',
    description: 'Маркетинг, комунікації, позиціонування, контент і системи, які перетворюють увагу на репутацію та можливості.',
    type: 'website',
    locale: 'uk_UA'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}</body></html>;
}
