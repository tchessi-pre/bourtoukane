"use client"

export type MentionsLegalesPublisherProps = {
  locale: string
}

export function MentionsLegalesPublisher({ locale }: MentionsLegalesPublisherProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        {locale === 'fr' ? 'Éditeur' : 'Publisher'}
      </h2>
      <div className="text-muted-foreground leading-relaxed">
        <p className="font-medium text-foreground">BOURTOUKANE by Chez Ama&apos;s</p>
        <p>{locale === 'fr' ? 'Zone d’activité : Afrique (Togo)' : 'Operating area: Africa (Togo)'}</p>
      </div>
    </section>
  )
}

