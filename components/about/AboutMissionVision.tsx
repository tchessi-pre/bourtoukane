"use client"

import { Heart, Sparkles } from 'lucide-react'

type TFunction = (key: string) => string

export type AboutMissionVisionProps = {
  t: TFunction
}

export function AboutMissionVision({ t }: AboutMissionVisionProps) {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold">
              {t('about.missionTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10">
              <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold">
              {t('about.visionTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {t('about.vision')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

