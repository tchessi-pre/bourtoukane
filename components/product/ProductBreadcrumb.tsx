"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type TFunction = (key: string) => string

export type ProductBreadcrumbProps = {
  t: TFunction
}

export function ProductBreadcrumb({ t }: ProductBreadcrumbProps) {
  return (
    <section className="pt-24 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('product.backToShop')}
        </Link>
      </div>
    </section>
  )
}

