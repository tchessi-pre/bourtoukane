"use client"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TFunction = (key: string) => string

export type ProductNotFoundProps = {
  t: TFunction
}

export function ProductNotFound({ t }: ProductNotFoundProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-2xl font-bold text-foreground mb-4">
          {t('product.notFound')}
        </h1>
        <Button asChild>
          <Link href="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('product.backToShop')}
          </Link>
        </Button>
      </div>
    </div>
  )
}

