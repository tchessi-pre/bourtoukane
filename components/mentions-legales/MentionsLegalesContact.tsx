"use client"

export type MentionsLegalesContactProps = {
  locale: string
  contactEmail: string
  whatsappNumber: string
  whatsappLink: string
}

export function MentionsLegalesContact({ locale, contactEmail, whatsappNumber, whatsappLink }: MentionsLegalesContactProps) {
  const normalizedEmail = contactEmail.trim().replace(/^mailto:/i, '').trim()

  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        {locale === 'fr' ? 'Contact' : 'Contact'}
      </h2>
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

