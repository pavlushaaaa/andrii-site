import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://andriilisovyi.com'),
  alternates: { canonical: '/' },
  title: 'Андрій Лісовий — маркетинг та комунікації',
  description: 'Андрій Лісовий — маркетолог і експерт із комунікацій, персонального бренду та розвитку комʼюніті. Head of Marketing & Communications у Mission Possible, викладач Projector, автор подкасту sip&talk.',
  openGraph: {
    title: 'Андрій Лісовий — маркетинг та комунікації',
    description: 'Андрій Лісовий — маркетолог і експерт із комунікацій, персонального бренду та розвитку комʼюніті. Head of Marketing & Communications у Mission Possible, викладач Projector, автор подкасту sip&talk.',
    type: 'website',
    url: '/',
    images: [{ url: '/assets/images/andrii-hero.jpg', width: 1152, height: 2048, alt: 'Андрій Лісовий' }],
    locale: 'uk_UA'
  },
  robots: { index: true, follow: true }
};

const SITE_URL = 'https://andriilisovyi.com/';
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Андрій Лісовий',
  alternateName: 'Andrii Lisovyi',
  url: SITE_URL,
  logo: 'https://andriilisovyi.com/assets/images/andrii-hero.jpg',
  sameAs: [
    'https://www.linkedin.com/in/andrii-lisovyi-450849228/',
    'https://www.instagram.com/_lesikkk/',
    'https://www.tiktok.com/@_lesikkk',
    'https://t.me/lissovyi'
  ]
};
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Андрій Лісовий — маркетинг та комунікації',
  alternateName: 'Andrii Lisovyi',
  url: SITE_URL
};
const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationJsonLd)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} />
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKRFCP6M" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
    {children}
    <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KKRFCP6M');`}</Script>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-XSLK8FYZL7" strategy="afterInteractive" />
    <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XSLK8FYZL7');`}</Script>
  </body></html>;
}
