"use client"

export type ConfidentialiteCookiesProps = {
  locale: string
}

export function ConfidentialiteCookies({ locale }: ConfidentialiteCookiesProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        {locale === 'fr' ? 'Cookies' : 'Cookies'}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {locale === 'fr'
          ? "Nous n’utilisons pas de cookies publicitaires. Des cookies techniques peuvent être utilisés par le navigateur pour le bon fonctionnement du site."
          : 'We do not use advertising cookies. Technical cookies may be used by the browser to ensure the website works properly.'}
      </p>
    </section>
  )
}

