"use client"

import Link from 'next/link'

export type ConfidentialiteLegalLinkProps = {
  locale: string
}

export function ConfidentialiteLegalLink({ locale }: ConfidentialiteLegalLinkProps) {
  return (
    <section className="pt-2">
      <Link href="/mentions-legales" className="text-accent hover:underline">
        {locale === 'fr' ? 'Voir les mentions légales' : 'See legal notice'}
      </Link>
    </section>
  )
}

