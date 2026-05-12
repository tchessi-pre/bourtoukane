"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function BrandStoryTeaser() {
  const { t } = useI18n()

  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-4/5 rounded-lg overflow-hidden">
            <Image src="/images/brand-story.jpg" alt="Artisan crafting eyewear" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">{t('story.label')}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t('story.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t('story.description')}</p>
            <Button asChild variant="link" className="px-0 text-accent hover:text-accent/80">
              <Link href="/about">
                {t('story.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

