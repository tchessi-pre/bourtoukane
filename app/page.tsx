"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HomeHero } from '@/components/HomeHero'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Heart, Globe } from 'lucide-react'

export default function HomePage() {
  const { t, locale } = useI18n()
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HomeHero />

      {/* Brand Story Teaser */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/5 rounded-lg overflow-hidden">
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
