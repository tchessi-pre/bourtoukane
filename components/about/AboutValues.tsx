"use client"

import { Leaf, Sparkles, Users } from 'lucide-react'

type TFunction = (key: string) => string

export type AboutValuesProps = {
  t: TFunction
}

export function AboutValues({ t }: AboutValuesProps) {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t('about.valuesTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-6">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              {t('about.value1Title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.value1Desc')}
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              {t('about.value2Title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.value2Desc')}
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-6">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              {t('about.value3Title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.value3Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

