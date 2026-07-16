"use client"

import { Facebook, Globe, Instagram, ArrowUpRight } from 'lucide-react'

type TFunction = (key: string) => string

export type AboutRepresentativesProps = {
  t: TFunction
  locale: 'fr' | 'en'
}

export function AboutRepresentatives({ t, locale }: AboutRepresentativesProps) {
  const representatives = [
    {
      id: 'divine-optic',
      city: locale === 'fr' ? 'Guadeloupe' : 'Guadeloupe',
      name: 'Divine Optic',
      description: t('about.representative1Desc'),
      links: [
        { href: 'https://www.divineoptic.fr/', icon: Globe, label: locale === 'fr' ? 'Site web' : 'Website' },
        { href: 'https://www.facebook.com/p/Divine-OPTIC-100063496539649/', icon: Facebook, label: 'Facebook' },
        { href: 'https://www.instagram.com/divineoptic?igsh=MXQzMzlqZ2VjYndwZQ%3D%3D', icon: Instagram, label: 'Instagram' },
      ],
    },
    {
      id: 'glam-ethnik',
      city: locale === 'fr' ? 'Paris' : 'Paris',
      name: 'Glam Ethnik',
      description: t('about.representative2Desc'),
      links: [
        { href: 'https://www.glamethnik.com/', icon: Globe, label: locale === 'fr' ? 'Site web' : 'Website' },
        { href: 'https://www.facebook.com/glamethnik/', icon: Facebook, label: 'Facebook' },
        { href: 'https://www.instagram.com/glamethnik/', icon: Instagram, label: 'Instagram' },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent mb-4">
            {t('about.representativesLabel')}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t('about.representativesTitle')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t('about.representativesDesc')}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {representatives.map((representative) => (
            <article
              key={representative.name}
              id={representative.id}
              className="scroll-mt-28 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                {representative.city}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                {representative.name}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {representative.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {representative.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
