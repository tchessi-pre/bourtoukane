"use client"

import Image from 'next/image'

type TFunction = (key: string) => string

export type AboutCraftsmanshipProps = {
  t: TFunction
}

export function AboutCraftsmanship({ t }: AboutCraftsmanshipProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/craftsmanship.png"
              alt="Artisan at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              {t('about.craftLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              {t('about.craftTitle')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.craft1')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.craft2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

