"use client"

import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/lib/products'

type TFunction = (key: string) => string

export type ShopGridProps = {
  t: TFunction
  products: ReadonlyArray<Product>
}

export function ShopGrid({ t, products }: ShopGridProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {t('shop.noProducts')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

