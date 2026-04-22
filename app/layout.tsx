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

export const metadata: Metadata = {
  title: 'BOURTOUKANE | Luxury African Eyewear',
  description: 'Découvrez nos lunettes artisanales uniques, ornées de tissus wax africains authentiques. Handcrafted eyewear celebrating African heritage.',
  keywords: ['African eyewear', 'wax fabric glasses', 'luxury sunglasses', 'handmade eyewear', 'African fashion'],
  openGraph: {
    title: 'BOURTOUKANE | Luxury African Eyewear',
    description: 'Handcrafted eyewear celebrating African heritage with authentic wax fabrics.',
    type: 'website',
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
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
