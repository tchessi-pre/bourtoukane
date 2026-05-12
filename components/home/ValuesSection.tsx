"use client"

import { Sparkles, Heart, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function ValuesSection() {
  const { t } = useI18n()

  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">{t('values.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">{t('values.craftsmanship.title')}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">{t('values.craftsmanship.description')}</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">{t('values.heritage.title')}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">{t('values.heritage.description')}</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">{t('values.sustainability.title')}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">{t('values.sustainability.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

