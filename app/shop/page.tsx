"use client"

import { useState, useMemo, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { products, type ProductCategory } from '@/lib/products'
import { ShopFilters, ShopGrid, ShopHero } from '@/components/shop/ShopSections'

export default function ShopPage() {
  const { t, locale } = useI18n()
  const [category, setCategory] = useState<ProductCategory | 'all'>('all')
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return result
  }, [category, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShopHero t={t} locale={locale} isLoaded={isLoaded} />
      <ShopFilters
        t={t}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ShopGrid t={t} products={filteredProducts} />

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
