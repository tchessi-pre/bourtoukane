"use client"

import { useState, useMemo, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ProductCard } from '@/components/ProductCard'
import { products, type ProductCategory } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

  const categories: { value: ProductCategory | 'all'; label: string }[] = [
    { value: 'all', label: t('shop.allCategories') },
    { value: 'sunglasses', label: t('shop.sunglasses') },
    { value: 'optical', label: t('shop.optical') },
    { value: 'limited', label: t('shop.limited') },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Elegant Warm Gradient */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-rose-50/30">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Animated label */}
          <div 
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <span className="h-px w-8 bg-amber-600" />
            <span className="text-amber-700 font-medium uppercase tracking-[0.25em] text-xs">
              {locale === 'fr' ? 'Notre Collection' : 'Our Collection'}
            </span>
            <span className="h-px w-8 bg-amber-600" />
          </div>
          
          {/* Main title with staggered animation */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span 
              className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {locale === 'fr' ? 'Decouvrez' : 'Discover'}
            </span>
            <span 
              className={`block text-amber-700 italic font-normal transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {locale === 'fr' ? "l'Excellence" : 'Excellence'}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {t('shop.subtitle')}
          </p>
          
          {/* Decorative colored dots */}
          <div 
            className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={category === cat.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategory(cat.value)}
                  className="text-sm"
                >
                  {cat.label}
                </Button>
              ))}
            </div>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as typeof sortBy)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('shop.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t('shop.newest')}</SelectItem>
                <SelectItem value="price-asc">{t('shop.priceLowHigh')}</SelectItem>
                <SelectItem value="price-desc">{t('shop.priceHighLow')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {t('shop.noProducts')}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
