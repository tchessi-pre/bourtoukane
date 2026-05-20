"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type TFunction = (key: string) => string

export type AboutCtaProps = {
  t: TFunction
}

export function AboutCta({ t }: AboutCtaProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
          {t('about.ctaTitle')}
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          {t('about.ctaDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/shop">
              {t('about.ctaShop')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/customize">
              {t('about.ctaCustomize')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

