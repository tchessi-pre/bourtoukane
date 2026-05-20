"use client"

import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/lib/products'

type TFunction = (key: string) => string

export type RelatedProductsProps = {
  t: TFunction
  products: ReadonlyArray<Product>
}

export function RelatedProducts({ t, products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          {t('product.related')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

