"use client"

export type ConfidentialiteSharingProps = {
  locale: string
}

export function ConfidentialiteSharing({ locale }: ConfidentialiteSharingProps) {
  return (
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
  )
}

