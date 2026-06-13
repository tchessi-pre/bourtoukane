"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale, t } = useI18n()

  const name = locale === 'fr' ? product.name.fr : product.name.en
  const description = locale === 'fr' ? product.description.fr : product.description.en
  const fabric = locale === 'fr' ? product.fabric.fr : product.fabric.en

  const categoryLabel =
    product.category === 'sunglasses'
      ? t('shop.sunglasses')
      : product.category === 'optical'
        ? t('shop.optical')
        : t('shop.limited')

  const formattedPrice = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US').format(product.price)
  const categoryPillClass = cn(
    'rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide backdrop-blur-sm',
    product.category === 'limited'
      ? 'border-accent/30 bg-accent/15 text-foreground'
      : product.category === 'optical'
        ? 'border-sky-200/60 bg-sky-50/70 text-sky-950 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-100'
        : 'border-amber-200/70 bg-amber-50/70 text-amber-950 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100'
  )

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-foreground/15">
        <div className="relative aspect-3/4 overflow-hidden bg-muted ring-1 ring-inset ring-foreground/5">
          <Image
            src={product.images[0]}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/0 via-background/0 to-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            {product.isNew && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-foreground shadow-sm">
                {t('product.new')}
              </span>
            )}
            {product.isBestseller && (
              <span className="rounded-full border border-border/70 bg-background/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-foreground backdrop-blur-sm shadow-sm">
                {locale === 'fr' ? 'Best-seller' : 'Bestseller'}
              </span>
            )}
          </div>
          {/* 
          <div className="absolute top-3 right-3">
            <span className={categoryPillClass}>{categoryLabel}</span>
          </div> */}

          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm">
              {locale === 'fr' ? 'Voir le produit' : 'View product'}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-accent text-balance">
              {name}
            </h3>
            <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="text-xs text-muted-foreground line-clamp-1">
              <span className="text-foreground/70">{locale === 'fr' ? 'Tissu' : 'Fabric'}</span>
              <span className="mx-2 text-border">•</span>
              {fabric}
            </p>
          </div>

          <div className="flex items-end justify-between gap-3 pt-1">
            <p className={cn("text-lg font-semibold text-foreground tabular-nums", locale === 'fr' ? 'tracking-tight' : '')}>
              {formattedPrice} FCFA<sup>*</sup>
            </p>
            <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {locale === 'fr' ? 'Détails' : 'Details'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
