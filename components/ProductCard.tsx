"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale, t } = useI18n()

  const name = locale === 'fr' ? product.name.fr : product.name.en
  const description = locale === 'fr' ? product.description.fr : product.description.en

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-lg mb-4">
        <Image
          src={product.images[0]}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded uppercase tracking-wide">
            {t('product.new')}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <p className="text-lg font-medium text-foreground mt-2">
          {product.price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} FCFA
        </p>
      </div>
    </Link>
  )
}
