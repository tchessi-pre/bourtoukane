"use client"

type TFunction = (key: string) => string

export type ShopHeroProps = {
  t: TFunction
  locale: string
  isLoaded: boolean
}

export function ShopHero({ t, locale, isLoaded }: ShopHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-linear-to-br from-amber-50 via-orange-50/50 to-rose-50/30">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <span className="h-px w-8 bg-amber-600" />
          <span className="text-amber-700 font-medium uppercase tracking-[0.25em] text-xs">
            {locale === 'fr' ? 'Notre Collection' : 'Our Collection'}
          </span>
          <span className="h-px w-8 bg-amber-600" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          <span
            className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {locale === 'fr' ? 'Decouvrez' : 'Discover'}
          </span>
          <span
            className={`block text-amber-700 italic font-normal transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {locale === 'fr' ? "l'Excellence" : 'Excellence'}
          </span>
        </h1>

        <p
          className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {t('shop.subtitle')}
        </p>

        <div
          className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        </div>
      </div>
    </section>
  )
}

