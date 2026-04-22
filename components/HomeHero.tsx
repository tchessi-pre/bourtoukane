"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HeroSocialSidebar } from '@/components/HeroSocialSidebar'

export function HomeHero() {
  const { t, locale } = useI18n()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute top-[14%] right-[6%] h-40 w-40 rotate-45 border-2 border-accent/10 transition-all duration-1000",
          "animate-float",
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )} />
        <div className={cn(
          "absolute top-[62%] right-[14%] h-24 w-24 rotate-12 bg-accent/5 transition-all duration-1000 delay-200",
          "animate-float",
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )} style={{ animationDuration: '7s', animationDirection: 'reverse' }} />
        <div className={cn(
          "absolute top-[30%] left-[4%] h-16 w-16 rounded-full border border-primary/10 transition-all duration-1000 delay-300",
          "animate-float",
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )} style={{ animationDuration: '8s' }} />
        <div className={cn(
          "absolute bottom-[18%] left-[10%] h-20 w-20 rotate-45 bg-primary/5 transition-all duration-1000 delay-150",
          "animate-float",
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )} style={{ animationDuration: '9s', animationDirection: 'reverse' }} />

        <div className="absolute inset-0 opacity-[0.02]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-[3px] bg-foreground"
              style={{
                left: `${12 + i * 12}%`,
                transform: 'skewX(-20deg)',
                animation: `subtlePulse 3s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        <svg className="absolute inset-0 h-full w-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="adinkra-home" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              <path d="M35 35 L65 65 M65 35 L35 65" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adinkra-home)" />
        </svg>
      </div>

      <HeroSocialSidebar isVisible={isLoaded} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
        <div className="grid min-h-screen items-center gap-10 lg:grid-cols-2 lg:gap-0 pt-24 lg:pt-0">
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:pr-16 pb-12 lg:pb-0">
            <div className="space-y-8">
              <div className={cn(
                "flex items-center gap-3 transition-all duration-700",
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              )}>
                <div className={cn("h-px w-12 bg-accent", isLoaded ? 'animate-scale-x' : '')} />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {locale === 'fr' ? "Artisanat · Togo" : 'Artisanat · Togo'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-accent animate-subtle-pulse" />
                  {locale === 'fr' ? 'Fait main' : 'Handcrafted'}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] tracking-tight">
                <span className={cn(
                  "block transition-all duration-700 delay-100",
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}>
                  {locale === 'fr' ? "L'élégance" : 'The Art of'}
                </span>
                <span className={cn(
                  "block text-accent transition-all duration-700 delay-200",
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}>
                  {locale === 'fr' ? 'africaine' : 'Seeing'}
                </span>
                <span className={cn(
                  "block italic font-normal text-muted-foreground transition-all duration-700 delay-300",
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}>
                  {locale === 'fr' ? 'au bout du regard.' : 'Differently'}
                </span>
              </h1>

              <p className={cn(
                "text-lg md:text-xl leading-relaxed max-w-md text-muted-foreground transition-all duration-700 delay-400",
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                {t('hero.subtitle')}
              </p>

              <div className={cn(
                "flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-700 delay-500",
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                <Button
                  asChild
                  size="lg"
                  className="text-base px-8 h-14 group bg-primary text-primary-foreground shadow-lg shadow-foreground/10 hover:bg-primary/90 focus-visible:ring-primary/30"
                >
                  <Link href="/shop">
                    {t('hero.shopNow')}
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-14 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Link href="/customize">{t('hero.customize')}</Link>
                </Button>
              </div>

              <div className={cn(
                "flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-border transition-all duration-700 delay-600",
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                <div className="group cursor-default">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-110">8+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{locale === 'fr' ? 'Tissus Africains' : 'African Fabrics'}</p>
                </div>
                <div className="group cursor-default">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-110">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{locale === 'fr' ? 'Fait Main' : 'Handcrafted'}</p>
                </div>
                <div className="group cursor-default">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-110">1</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{locale === 'fr' ? 'Vision Unique' : 'Unique Vision'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className={cn(
              "relative w-full max-w-lg lg:max-w-none transition-all duration-1000 delay-200",
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}>
              <div className="relative aspect-3/4 lg:aspect-4/5 w-full lg:w-[90%] lg:ml-auto overflow-hidden rounded-3xl group shadow-2xl shadow-foreground/10">
                <div className="absolute inset-0 bg-foreground/5" />
                <Image
                  src="/images/hero-bg.jpg"
                  alt={locale === 'fr' ? 'Lunettes artisanales africaines' : 'African artisanal eyewear'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 dark:ring-white/5" />
              </div>

              <div className={cn(
                "absolute -bottom-7 -left-6 lg:-left-12 bg-card/80 p-6 shadow-xl border border-border/60 max-w-[240px] backdrop-blur-md transition-all duration-700 delay-700",
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                <p className="font-serif text-sm text-muted-foreground italic leading-relaxed">
                  {locale === 'fr' ? '"Chaque monture raconte une histoire africaine"' : '"Every frame tells an African story"'}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-accent" />
                  <Sparkles className="h-4 w-4 text-accent animate-subtle-pulse" />
                </div>
              </div>

              <div className={cn(
                "absolute top-8 -right-4 lg:top-12 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 border-2 border-accent/30 transition-all duration-700 delay-500",
                "animate-float",
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              )} style={{ animationDuration: '10s' }} />
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 delay-1000",
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}>
        <span className="text-xs uppercase tracking-widest">{locale === 'fr' ? 'Défiler' : 'Scroll'}</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-accent h-1/2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
