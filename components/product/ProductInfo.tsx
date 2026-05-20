"use client"

import { Button } from '@/components/ui/button'
import { Check, MessageCircle } from 'lucide-react'

type TFunction = (key: string) => string

export type ProductInfoProps = {
  t: TFunction
  locale: string
  name: string
  description: string
  price: number
  whatsappLink: string
}

export function ProductInfo({ t, locale, name, description, price, whatsappLink }: ProductInfoProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
          {name}
        </h1>
        <p className="text-2xl font-medium text-foreground">
          {price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} FCFA
        </p>
      </div>

      <div className="prose prose-lg text-muted-foreground">
        <p className="leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-foreground">{t('product.features')}</h3>
        <ul className="space-y-2">
          {[t('product.feature1'), t('product.feature2'), t('product.feature3')].map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 pt-4">
        <Button asChild size="lg" className="w-full text-base">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            {t('product.orderWhatsApp')}
          </a>
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          {t('product.orderNote')}
        </p>
      </div>
    </div>
  )
}

