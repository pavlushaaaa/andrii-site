import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Андрій Лісовий — маркетинг та комунікації',
  description: 'Андрій Лісовий — маркетолог і експерт із комунікацій, персонального бренду та розвитку комʼюніті. Head of Marketing & Communications у Mission Possible, викладач Projector, автор подкасту sip&talk.',
  openGraph: {
    title: 'Андрій Лісовий — маркетинг та комунікації',
    description: 'Андрій Лісовий — маркетолог і експерт із комунікацій, персонального бренду та розвитку комʼюніті. Head of Marketing & Communications у Mission Possible, викладач Projector, автор подкасту sip&talk.',
    type: 'website',
    locale: 'uk_UA'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}</body></html>;
}
