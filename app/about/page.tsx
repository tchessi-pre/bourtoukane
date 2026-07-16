"use client"

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import {
  AboutHero,
  AboutStory,
  AboutMissionVision,
  AboutCraftsmanship,
  AboutValues,
  AboutRepresentatives,
  AboutCta,
} from '@/components/about/AboutSections'

export default function AboutPage() {
  const { t, locale } = useI18n()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero t={t} locale={locale} isLoaded={isLoaded} />
      <AboutStory t={t} isLoaded={isLoaded} />
      <AboutMissionVision t={t} />
      <AboutCraftsmanship t={t} />
      <AboutValues t={t} />
      <AboutRepresentatives t={t} locale={locale} />
      <AboutCta t={t} />

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
