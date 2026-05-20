"use client"

export type ConfidentialitePurposeProps = {
  locale: string
}

export function ConfidentialitePurpose({ locale }: ConfidentialitePurposeProps) {
  return (
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
  )
}

