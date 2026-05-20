"use client"

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { useI18n } from '@/lib/i18n'
import {
  ConfidentialiteCookies,
  ConfidentialiteDataCollected,
  ConfidentialiteHero,
  ConfidentialiteLegalLink,
  ConfidentialitePurpose,
  ConfidentialiteRetention,
  ConfidentialiteRights,
  ConfidentialiteSharing,
} from '@/components/confidentialite/ConfidentialiteSections'

export default function ConfidentialitePage() {
  const { locale } = useI18n()

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'alvoramabeatrice@gmail.com'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ConfidentialiteHero locale={locale} />

          <div className="mt-10 space-y-10">
            <ConfidentialiteDataCollected locale={locale} />
            <ConfidentialitePurpose locale={locale} />
            <ConfidentialiteSharing locale={locale} />
            <ConfidentialiteRetention locale={locale} />
            <ConfidentialiteRights
              locale={locale}
              contactEmail={contactEmail}
              whatsappNumber={whatsappNumber}
              whatsappLink={whatsappLink}
            />
            <ConfidentialiteCookies locale={locale} />
            <ConfidentialiteLegalLink locale={locale} />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
