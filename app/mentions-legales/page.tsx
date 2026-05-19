"use client"

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { useI18n } from '@/lib/i18n'

export default function MentionsLegalesPage() {
  const { locale } = useI18n()

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'alvoramabeatrice@gmail.com'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            {locale === 'fr' ? 'Mentions légales' : 'Legal Notice'}
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {locale === 'fr'
              ? "Ces informations sont fournies à titre indicatif pour le site BOURTOUKANE by Chez Ama's, destiné à une clientèle en Afrique, notamment au Togo."
              : "This information is provided for the BOURTOUKANE by Chez Ama's website, intended for customers in Africa, including Togo."}
          </p>

          <div className="mt-10 space-y-10">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Éditeur' : 'Publisher'}
              </h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">BOURTOUKANE by Chez Ama&apos;s</p>
                <p>{locale === 'fr' ? 'Zone d’activité : Afrique (Togo)' : 'Operating area: Africa (Togo)'}</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">{locale === 'fr' ? 'Contact' : 'Contact'}</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Email :{' '}
                  <a className="text-foreground hover:underline" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </p>
                <p>
                  WhatsApp :{' '}
                  <a className="text-foreground hover:underline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    {whatsappNumber}
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Propriété intellectuelle' : 'Intellectual property'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Les contenus présents sur ce site (textes, visuels, logos, photos, créations) sont protégés. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite."
                  : 'Content on this website (texts, visuals, logos, photos, creations) is protected. Any reproduction, distribution or use without prior authorization is prohibited.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">{locale === 'fr' ? 'Responsabilité' : 'Liability'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous faisons de notre mieux pour fournir des informations exactes et à jour. Toutefois, des erreurs ou omissions peuvent survenir. L’utilisation du site se fait sous votre responsabilité."
                  : 'We do our best to provide accurate and up-to-date information. However, errors or omissions may occur. Use of the website is at your own risk.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Droit applicable' : 'Applicable law'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Sauf dispositions contraires, ces mentions et l’utilisation du site sont régies par les lois applicables au Togo. En cas de litige, une solution amiable sera privilégiée."
                  : 'Unless otherwise provided, these notices and the use of the website are governed by the laws applicable in Togo. In case of dispute, an amicable solution will be preferred.'}
              </p>
            </section>

            <section className="pt-2">
              <Link href="/confidentialite" className="text-accent hover:underline">
                {locale === 'fr' ? 'Voir la politique de confidentialité' : 'See the privacy policy'}
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

