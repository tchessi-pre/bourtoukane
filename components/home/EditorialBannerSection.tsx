"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function EditorialBannerSection() {
  const { t } = useI18n()

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/editorial-banner.jpg" alt="Editorial fashion shot" fill className="object-contain" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{t('editorial.title')}</h2>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
        >
          <Link href="/customize">{t('editorial.cta')}</Link>
        </Button>
      </div>
    </section>
  )
}

