"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'

export function FeaturedProductsSection() {
  const { t } = useI18n()
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">{t('featured.label')}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">{t('featured.title')}</h2>
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
  )
}

