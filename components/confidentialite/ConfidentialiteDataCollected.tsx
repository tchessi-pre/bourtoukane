"use client"

export type ConfidentialiteDataCollectedProps = {
  locale: string
}

export function ConfidentialiteDataCollected({ locale }: ConfidentialiteDataCollectedProps) {
  return (
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
  )
}

