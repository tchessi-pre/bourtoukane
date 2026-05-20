"use client"

import Link from 'next/link'

export type MentionsLegalesPrivacyLinkProps = {
  locale: string
}

export function MentionsLegalesPrivacyLink({ locale }: MentionsLegalesPrivacyLinkProps) {
  return (
    <section className="pt-2">
      <Link href="/confidentialite" className="text-accent hover:underline">
        {locale === 'fr' ? 'Voir la politique de confidentialité' : 'See the privacy policy'}
      </Link>
    </section>
  )
}

