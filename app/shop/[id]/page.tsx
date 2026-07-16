"use client"

import { useState, use } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { products } from '@/lib/products'
import {
  ProductBreadcrumb,
  ProductGallery,
  ProductInfo,
  ProductNotFound,
  RelatedProducts,
} from '@/components/product/ProductSections'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { t, locale } = useI18n()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const product = products.find(p => p.id === resolvedParams.id)

  if (!product) {
    return <ProductNotFound t={t} />
  }

  const name = locale === 'fr' ? product.name.fr : product.name.en
  const description = locale === 'fr' ? product.description.fr : product.description.en
  const fabric = locale === 'fr' ? product.fabric.fr : product.fabric.en

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const formattedPrice = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(product.price)
  const orderMessage = encodeURIComponent(
    locale === 'fr'
      ? `Bonjour, je souhaite commander : ${name} (${formattedPrice})`
      : `Hello, I would like to order: ${name} (${formattedPrice})`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${orderMessage}`

  const setImageIndex = (index: number) => {
    setIsImageLoaded(false)
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ProductBreadcrumb t={t} />

      {/* Product Details */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <ProductGallery
              name={name}
              images={product.images}
              isNew={Boolean(product.isNew)}
              newLabel={t('product.new')}
              currentImageIndex={currentImageIndex}
              isImageLoaded={isImageLoaded}
              onImageLoad={() => setIsImageLoaded(true)}
              onSetImageIndex={setImageIndex}
            />

            {/* Product Info */}
            <ProductInfo
              t={t}
              locale={locale}
              name={name}
              description={description}
              price={product.price}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </section>

      <RelatedProducts t={t} products={relatedProducts} />

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
