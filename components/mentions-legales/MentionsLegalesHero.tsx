"use client"

export type MentionsLegalesHeroProps = {
  locale: string
}

export function MentionsLegalesHero({ locale }: MentionsLegalesHeroProps) {
  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
        {locale === 'fr' ? 'Mentions légales' : 'Legal Notice'}
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {locale === 'fr'
          ? "Ces informations sont fournies à titre indicatif pour le site BOURTOUKANE by Chez Ama's, destiné à une clientèle en Afrique, notamment au Togo."
          : "This information is provided for the BOURTOUKANE by Chez Ama's website, intended for customers in Africa, including Togo."}
      </p>
    </>
  )
}

