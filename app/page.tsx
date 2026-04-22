"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Heart, Globe } from 'lucide-react'

export default function HomePage() {
  const { t, locale } = useI18n()
  const featuredProducts = products.slice(0, 4)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Modern Editorial Layout with Animations */}
      <section className="relative min-h-screen bg-background overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient background */}
          <div 
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary via-secondary/80 to-transparent hidden lg:block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          />
          
          {/* Floating geometric shapes inspired by African patterns */}
          <div 
            className={`absolute top-[15%] right-[5%] w-40 h-40 border-2 border-accent/10 rotate-45 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div 
            className={`absolute top-[60%] right-[15%] w-24 h-24 bg-accent/5 rotate-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ animation: 'float 6s ease-in-out infinite reverse' }}
          />
          <div 
            className={`absolute top-[30%] left-[3%] w-16 h-16 rounded-full border border-primary/10 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ animation: 'float 7s ease-in-out infinite' }}
          />
          <div 
            className={`absolute bottom-[20%] left-[8%] w-20 h-20 bg-primary/5 rotate-45 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ animation: 'float 9s ease-in-out infinite reverse' }}
          />
          
          {/* Kente-inspired animated lines */}
          <div className="absolute inset-0 opacity-[0.02]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-[3px] bg-foreground"
                style={{
                  left: `${12 + i * 12}%`,
                  transform: 'skewX(-20deg)',
                  animation: `pulse 3s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
          
          {/* Adinkra pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-screen items-center pt-24 lg:pt-0">
            {/* Left Content with staggered animations */}
            <div className="flex flex-col justify-center lg:pr-16 order-2 lg:order-1 pb-12 lg:pb-0">
              <div className="space-y-8">
                {/* Tagline */}
                <div 
                  className={`flex items-center gap-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                >
                  <div className="h-px w-12 bg-accent origin-left" style={{ animation: isLoaded ? 'scaleX 0.8s ease-out forwards' : 'none' }} />
                  <span className="text-accent font-medium uppercase tracking-[0.2em] text-xs">
                    {locale === 'fr' ? 'Collection 2024' : '2024 Collection'}
                  </span>
                </div>
                
                {/* Main Title with staggered reveal */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  <span 
                    className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {locale === 'fr' ? "L'Art de" : 'The Art of'}
                  </span>
                  <span 
                    className={`block text-accent transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {locale === 'fr' ? 'Voir' : 'Seeing'}
                  </span>
                  <span 
                    className={`block italic font-normal text-muted-foreground transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {locale === 'fr' ? 'Autrement' : 'Differently'}
                  </span>
                </h1>
                
                {/* Description */}
                <p 
                  className={`text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {t('hero.subtitle')}
                </p>
                
                {/* CTA Buttons */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <Button asChild size="lg" className="text-base px-8 h-14 rounded-none group">
                    <Link href="/shop">
                      {t('hero.shopNow')}
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300">
                    <Link href="/customize">
                      {t('hero.customize')}
                    </Link>
                  </Button>
                </div>
                
                {/* Stats with count-up animation effect */}
                <div 
                  className={`flex gap-12 pt-8 border-t border-border transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
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
            
            {/* Right Image with reveal animation */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <div 
                className={`relative w-full max-w-lg lg:max-w-none transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              >
                {/* Main Image with scale animation */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full lg:w-[90%] lg:ml-auto overflow-hidden group">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="African fashion eyewear"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Gradient overlay that fades in */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-background/20 to-transparent transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                
                {/* Floating accent card with slide-up animation */}
                <div 
                  className={`absolute -bottom-6 -left-6 lg:-left-12 bg-card p-6 shadow-xl border border-border max-w-[200px] transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <p className="font-serif text-sm text-muted-foreground italic leading-relaxed">
                    {locale === 'fr' 
                      ? '"Chaque monture raconte une histoire africaine"' 
                      : '"Every frame tells an African story"'}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-accent" />
                    <Sparkles className="h-4 w-4 text-accent" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                  </div>
                </div>
                
                {/* Decorative frame with scale animation */}
                <div 
                  className={`absolute top-8 -right-4 lg:top-12 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 border-2 border-accent/30 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ animation: 'float 10s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-xs uppercase tracking-widest">{locale === 'fr' ? 'Defiler' : 'Scroll'}</span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-accent" style={{ animation: 'scrollIndicator 1.5s ease-in-out infinite', height: '50%' }} />
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/brand-story.jpg"
                alt="Artisan crafting eyewear"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                {t('story.label')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                {t('story.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('story.description')}
              </p>
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

      {/* Featured Products */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              {t('featured.label')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              {t('featured.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/shop">
                {t('featured.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              {t('values.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {t('values.craftsmanship.title')}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t('values.craftsmanship.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {t('values.heritage.title')}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t('values.heritage.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {t('values.sustainability.title')}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t('values.sustainability.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/editorial-banner.jpg"
            alt="Editorial fashion shot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            {t('editorial.title')}
          </h2>
          <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
            <Link href="/customize">
              {t('editorial.cta')}
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
