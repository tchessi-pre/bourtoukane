"use client"

type LanguageToggleProps = {
  locale: 'fr' | 'en'
  setLocale: (locale: 'fr' | 'en') => void
}

export function LanguageToggle({ locale, setLocale }: LanguageToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
      aria-label={locale === 'fr' ? 'Passer le site en anglais' : 'Switch site to French'}
      className="inline-flex relative px-3 py-2 text-sm font-medium uppercase tracking-wider overflow-hidden group"
    >
      <span className="relative z-10 transition-colors duration-300 text-muted-foreground group-hover:text-foreground">
        {locale === 'fr' ? 'FR' : 'EN'}
      </span>
      <span className="absolute inset-0 bg-secondary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-sm" />
    </button>
  )
}
