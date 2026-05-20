"use client"

import Image from 'next/image'
import { Heart, Sparkles, Users } from 'lucide-react'

type TFunction = (key: string) => string

export type AboutHeroProps = {
  t: TFunction
  locale: string
  isLoaded: boolean
}

export function AboutHero({ t, locale, isLoaded }: AboutHeroProps) {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-linear-to-br from-emerald-50 via-teal-50/50 to-cyan-50/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <div className="h-px w-10 bg-emerald-600" />
              <span className="text-emerald-700 font-medium uppercase tracking-[0.25em] text-xs">
                {t('about.label')}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] text-balance">
              <span
                className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {t('about.title')}
              </span>
              <span
                className={`block text-emerald-700 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {t('about.storyTitle')}
              </span>
              <span
                className={`block italic font-normal text-muted-foreground text-3xl md:text-4xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {locale === 'fr' ? 'et votre pièce unique.' : 'and your unique piece.'}
              </span>
            </h1>

            <p
              className={`text-muted-foreground text-lg leading-relaxed max-w-xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {t('about.intro')}
            </p>

            <div
              className={`flex flex-wrap items-center gap-3 pt-2 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-white/60 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-emerald-700" />
                {locale === 'fr' ? "Animatrice d'événements" : 'Event host'}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/60 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur-sm">
                <Users className="h-4 w-4 text-teal-700" />
                {locale === 'fr' ? 'Comédienne' : 'Actress'}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-white/60 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur-sm">
                <Heart className="h-4 w-4 text-cyan-700" />
                {locale === 'fr' ? 'Coach Positive Mindset' : 'Positive mindset coach'}
              </span>
            </div>

            <div
              className={`grid sm:grid-cols-2 gap-4 pt-4 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            ></div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent" />
              <Image
                src="/images/about-hero.png"
                alt={locale === 'fr' ? "Portrait de Ama Béatrice Alovor" : 'Portrait of Ama Béatrice Alovor'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
            </div>

            <div
              className={`absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white/95 p-4 rounded-xl shadow-lg max-w-[220px] border border-foreground/10 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
                  {locale === 'fr' ? 'Créatrice de bonheur' : 'Creator of happiness'}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {locale === 'fr'
                  ? 'Multitalents · Afrique & diaspora'
                  : 'Multi-talented · Africa & diaspora'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

