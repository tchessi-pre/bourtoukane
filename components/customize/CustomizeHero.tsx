"use client"

import { cn } from '@/lib/utils'

type TFunction = (key: string) => string

export type CustomizeHeroProps = {
  t: TFunction
  locale: string
  isLoaded: boolean
}

export function CustomizeHero({ t, locale, isLoaded }: CustomizeHeroProps) {
  return (
    <section className="px-4 pt-32 md:pt-40 pb-12">
      <div className="mx-auto w-full max-w-3xl text-center md:text-left">
        <p
          className={cn(
            "text-xs uppercase tracking-[0.3em] text-accent mb-3 transition-all duration-700",
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          )}
        >
          {t('customize.label')}
        </p>
        <h1
          className={cn(
            "font-serif text-5xl md:text-6xl text-balance text-foreground transition-all duration-700 delay-100",
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {locale === 'fr' ? 'Composez votre pièce unique.' : 'Compose your unique piece.'}
        </h1>
        <p
          className={cn(
            "mt-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {t('customize.subtitle')}
        </p>
      </div>
    </section>
  )
}

