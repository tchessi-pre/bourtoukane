"use client"

export type MentionsLegalesIntellectualPropertyProps = {
  locale: string
}

export function MentionsLegalesIntellectualProperty({ locale }: MentionsLegalesIntellectualPropertyProps) {
  return (
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
  )
}

