"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Sparkles, Users, Leaf } from 'lucide-react'

export default function AboutPage() {
  const { t, locale } = useI18n()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Elegant Earthy Green Gradient */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50/30">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content with staggered animations */}
            <div className="space-y-6">
              {/* Label */}
              <div 
                className={`flex items-center gap-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              >
                <div className="h-px w-10 bg-emerald-600" />
                <span className="text-emerald-700 font-medium uppercase tracking-[0.25em] text-xs">
                  {t('about.label')}
                </span>
              </div>
              
              {/* Title with word-by-word reveal */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                <span 
                  className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {locale === 'fr' ? 'Notre' : 'Our'}
                </span>
                <span 
                  className={`block text-emerald-700 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {locale === 'fr' ? 'Histoire' : 'Story'}
                </span>
                <span 
                  className={`block italic font-normal text-muted-foreground text-3xl md:text-4xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {locale === 'fr' ? '& Heritage' : '& Heritage'}
                </span>
              </h1>
              
              {/* Description */}
              <p 
                className={`text-muted-foreground text-lg leading-relaxed max-w-xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {t('about.intro')}
              </p>
              
              {/* Decorative colored dots */}
              <div 
                className={`flex items-center gap-3 pt-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="w-3 h-3 rounded-full bg-teal-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>
            </div>
            
            {/* Image with reveal animation */}
            <div 
              className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden group shadow-xl">
                <Image
                  src="/images/about-hero.png"
                  alt="Our founder"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Accent card */}
              <div 
                className={`absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 rounded-xl shadow-lg max-w-[180px] transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
                    {locale === 'fr' ? 'Depuis 2020' : 'Since 2020'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {locale === 'fr' 
                    ? 'Celebrant la beaute africaine' 
                    : 'Celebrating African beauty'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">
              {t('about.storyTitle')}
            </h2>
            <p className="leading-relaxed">{t('about.story1')}</p>
            <p className="leading-relaxed">{t('about.story2')}</p>
            <p className="leading-relaxed">{t('about.story3')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Craftsmanship */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/craftsmanship.jpg"
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

      {/* Values */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              {t('about.valuesTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg">
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
            <div className="bg-card p-8 rounded-lg">
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
            <div className="bg-card p-8 rounded-lg">
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

      {/* CTA */}
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

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
