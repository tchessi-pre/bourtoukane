"use client"

export type ConfidentialiteRightsProps = {
  locale: string
  contactEmail: string
  whatsappNumber: string
  whatsappLink: string
}

export function ConfidentialiteRights({ locale, contactEmail, whatsappNumber, whatsappLink }: ConfidentialiteRightsProps) {
  const normalizedEmail = contactEmail.trim().replace(/^mailto:/i, '').trim()

  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        {locale === 'fr' ? 'Vos droits' : 'Your rights'}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {locale === 'fr'
          ? "Vous pouvez demander l’accès, la correction ou la suppression de vos informations en nous contactant."
          : 'You can request access, correction, or deletion of your information by contacting us.'}
      </p>
      <div className="text-muted-foreground leading-relaxed">
        <p>
          Email :{' '}
          <a className="text-foreground hover:underline" href={`mailto:${normalizedEmail}`}>
            {normalizedEmail}
          </a>
        </p>
        <p>
          WhatsApp :{' '}
          <a className="text-foreground hover:underline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {whatsappNumber}
          </a>
        </p>
      </div>
    </section>
  )
}

