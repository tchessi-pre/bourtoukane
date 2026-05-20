"use client"

export type MentionsLegalesLiabilityProps = {
  locale: string
}

export function MentionsLegalesLiability({ locale }: MentionsLegalesLiabilityProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        {locale === 'fr' ? 'Responsabilité' : 'Liability'}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {locale === 'fr'
          ? "Nous faisons de notre mieux pour fournir des informations exactes et à jour. Toutefois, des erreurs ou omissions peuvent survenir. L’utilisation du site se fait sous votre responsabilité."
          : 'We do our best to provide accurate and up-to-date information. However, errors or omissions may occur. Use of the website is at your own risk.'}
      </p>
    </section>
  )
}

