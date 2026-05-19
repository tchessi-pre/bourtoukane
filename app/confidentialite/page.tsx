"use client"

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { useI18n } from '@/lib/i18n'

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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {locale === 'fr'
              ? "Cette politique explique comment BOURTOUKANE by Chez Ama's traite vos informations lorsque vous nous contactez depuis l’Afrique, notamment au Togo."
              : "This policy explains how BOURTOUKANE by Chez Ama's handles your information when you contact us from Africa, including Togo."}
          </p>

          <div className="mt-10 space-y-10">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Données collectées' : 'Data we collect'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous collectons uniquement les informations que vous choisissez de nous transmettre, par exemple via WhatsApp ou email : nom/prénom, coordonnées, préférences (tissu, monture, quantité), et tout message que vous envoyez."
                  : 'We only collect information you choose to share with us, for example via WhatsApp or email: name, contact details, preferences (fabric, frame, quantity), and any message you send.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Finalités' : 'Purpose'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous utilisons vos informations pour répondre à vos demandes, préparer un devis/une commande, organiser une personnalisation (événement, série), assurer la livraison et le service client."
                  : 'We use your information to respond to your requests, prepare a quote/order, handle customizations (events, batches), manage delivery, and provide customer support.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Partage & transferts' : 'Sharing & transfers'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous ne vendons pas vos données. Elles peuvent être partagées uniquement si nécessaire pour traiter votre demande (ex. transporteur, partenaire opticien/ophtalmologue agréé si vous le sollicitez). Lorsque vous contactez via WhatsApp, vos échanges sont aussi traités par WhatsApp/Meta selon leurs propres politiques."
                  : "We do not sell your data. We may share it only when needed to fulfill your request (e.g., carrier, licensed optician/ophthalmologist partner if you request it). When you contact us via WhatsApp, your messages are also processed by WhatsApp/Meta under their own policies."}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Conservation' : 'Retention'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous conservons vos informations le temps nécessaire pour traiter votre demande et assurer le suivi (commande, SAV)."
                  : 'We keep your information only as long as necessary to process your request and provide follow-up (order, support).'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === 'fr' ? 'Vos droits' : 'Your rights'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Vous pouvez demander l’accès, la correction ou la suppression de vos informations en nous contactant."
                  : 'You can request access, correction, or deletion of your information by contacting us.'}
              </p>
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
              <h2 className="font-serif text-2xl font-bold text-foreground">{locale === 'fr' ? 'Cookies' : 'Cookies'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? "Nous n’utilisons pas de cookies publicitaires. Des cookies techniques peuvent être utilisés par le navigateur pour le bon fonctionnement du site."
                  : 'We do not use advertising cookies. Technical cookies may be used by the browser to ensure the website works properly.'}
              </p>
            </section>

            <section className="pt-2">
              <Link href="/mentions-legales" className="text-accent hover:underline">
                {locale === 'fr' ? 'Voir les mentions légales' : 'See legal notice'}
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

