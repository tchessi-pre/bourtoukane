import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const metadataBase =
  process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL('http://localhost:3000')

const siteName = "BOURTOUKANE by Chez Ama's"
const defaultTitle = 'BOURTOUKANE | Montures artisanales en tissus africain'
const defaultDescription =
  "BOURTOUKANE by Chez Ama's est une marque portée par Ama Béatrice Alovor : animatrice d'événements, comédienne, traductrice Français - Anglais et coach en positive mindset. Entre l'Afrique et la diaspora, elle crée des montures et accessoires uniques, en valorisant des chutes de tissus récupérées chez les couturières."
const ogImage = '/images/editorial-banner.png'

export const metadata: Metadata = {
  metadataBase,
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'BOURTOUKANE',
    "Chez Ama's",
    "Ama Beatrice Alovor",
    'montures en wax',
    'lunettes artisanales',
    'lunettes africaines',
    'montures personnalisées',
    'luxury eyewear',
    'African eyewear',
    'wax fabric glasses',
  ],
  category: 'shopping',
  creator: siteName,
  publisher: siteName,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'gPxMi9b-KNswMCPZAzkcc15hoS3ooGkb4ms_kaA56s4',
  },
  icons: {
    icon: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    siteName,
    locale: 'fr_FR',
    url: '/',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} — Lunettes artisanales en wax`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: '#3d2817',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: metadataBase?.href,
    logo: metadataBase ? new URL('/icon.svg', metadataBase).href : undefined,
    sameAs: [
      'https://www.instagram.com/chez_ama_s',
      'https://www.tiktok.com/@amaalovor',
      'https://www.facebook.com/ama.alovor',
      'https://www.google.com/maps/place/Totsivi,+Lom%C3%A9,+Togo/@6.19234,1.1634081,15z/data=!3m1!4b1!4m10!1m2!2m1!1sTotsi+Lom%C3%A9+Togo!3m6!1s0x102158f9cfbce889:0xf2f6c6fd7a33927!8m2!3d6.1931615!4d1.1806651!15sChBUb3RzaSBMb23DqSBUb2dvkgEMc3VibG9jYWxpdHkx4AEA!16s%2Fg%2F120jx06q?hl=fr&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
    ],
  }

  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var n=History&&History.prototype&&History.prototype.pushState;var r=History&&History.prototype&&History.prototype.replaceState;if(!n||!r||!window||!window.history)return;var p=window.history.pushState;var q=window.history.replaceState;window.history.pushState=function(a,b,c){try{return p.call(this,a,b,c)}catch(e){return n.call(this,a,b,c)}};window.history.replaceState=function(a,b,c){try{return q.call(this,a,b,c)}catch(e){return r.call(this,a,b,c)}}}catch(_){}})();',
          }}
        />
        <I18nProvider>
          {children}
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
