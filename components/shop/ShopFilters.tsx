"use client"

import type { ProductCategory } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type TFunction = (key: string) => string

export type ShopFiltersProps = {
  t: TFunction
  category: ProductCategory | 'all'
  setCategory: (value: ProductCategory | 'all') => void
  sortBy: 'newest' | 'price-asc' | 'price-desc'
  setSortBy: (value: 'newest' | 'price-asc' | 'price-desc') => void
}

export function ShopFilters({ t, category, setCategory, sortBy, setSortBy }: ShopFiltersProps) {
  const categories: { value: ProductCategory | 'all'; label: string }[] = [
    { value: 'all', label: t('shop.allCategories') },
    { value: 'sunglasses', label: t('shop.sunglasses') },
    { value: 'optical', label: t('shop.optical') },
    { value: 'limited', label: t('shop.limited') },
  ]

  return (
    <section className="py-8 px-4 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
  )
}

