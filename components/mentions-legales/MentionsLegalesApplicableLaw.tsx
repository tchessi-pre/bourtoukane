"use client"

export type MentionsLegalesApplicableLawProps = {
  locale: string
}

export function MentionsLegalesApplicableLaw({ locale }: MentionsLegalesApplicableLawProps) {
  return (
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
  )
}

