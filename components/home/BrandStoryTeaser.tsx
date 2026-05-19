"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Leaf, Users } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function BrandStoryTeaser() {
  const { t, locale } = useI18n()

  return (
    <section className="relative overflow-hidden py-24 px-4 bg-secondary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-foreground/5" />
              <Image
                src="/images/brand-story.jpg"
                alt={locale === 'fr' ? 'Artisan façonnant une monture' : 'Artisan crafting eyewear'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5" />
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-background/80 px-5 py-4 backdrop-blur-md shadow-lg">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {locale === 'fr' ? "Une pièce = une histoire" : 'One piece = one story'}
              </p>
              <p className="mt-1 font-serif text-lg text-foreground">
                {locale === 'fr' ? 'Chutes de tissus revalorisées' : 'Upcycled fabric scraps'}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent font-medium uppercase tracking-[0.25em] text-xs">
                {t('story.label')}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-[1.1]">
              {t('story.title')}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {locale === 'fr'
                ? "Chez Ama Béatrice Alovor, chaque monture BOURTOUKANE raconte une histoire : tissus africains, finitions à la main et pièces uniques créées à partir de chutes récupérées chez les couturières."
                : "With Ama Béatrice Alovor, each BOURTOUKANE frame tells a story: African textiles, handcrafted finishing, and unique pieces made from upcycled fabric scraps collected from seamstresses."}
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                {
                  icon: Sparkles,
                  label: locale === 'fr' ? 'Fait main' : 'Handcrafted',
                },
                {
                  icon: Leaf,
                  label: locale === 'fr' ? 'Recyclage' : 'Upcycling',
                },
                {
                  icon: Users,
                  label: locale === 'fr' ? 'Pour tous' : 'For everyone',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-background/60 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild className="h-12 rounded-none px-6">
                <Link href="/about" className="inline-flex items-center justify-center gap-2">
                  {t('story.learnMore')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className={cn('h-12 rounded-none px-6 bg-background/40 backdrop-blur-sm')}>
                <Link href="/customize" className="inline-flex items-center justify-center gap-2">
                  {locale === 'fr' ? 'Personnaliser' : 'Customize'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
