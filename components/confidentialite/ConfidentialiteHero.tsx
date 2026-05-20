"use client"

export type ConfidentialiteHeroProps = {
  locale: string
}

export function ConfidentialiteHero({ locale }: ConfidentialiteHeroProps) {
  return (
    <>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
        {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {locale === 'fr'
          ? "Cette politique explique comment BOURTOUKANE by Chez Ama's traite vos informations lorsque vous nous contactez depuis l’Afrique, notamment au Togo."
          : "This policy explains how BOURTOUKANE by Chez Ama's handles your information when you contact us from Africa, including Togo."}
      </p>
    </>
  )
}
