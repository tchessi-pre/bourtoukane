"use client"

export type ConfidentialiteRetentionProps = {
  locale: string
}

export function ConfidentialiteRetention({ locale }: ConfidentialiteRetentionProps) {
  return (
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
  )
}

