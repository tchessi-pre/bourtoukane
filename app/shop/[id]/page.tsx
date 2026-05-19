"use client"

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight, Check } from 'lucide-react'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { t, locale } = useI18n()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const product = products.find(p => p.id === resolvedParams.id)

  if (!product) {
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

  const name = locale === 'fr' ? product.name.fr : product.name.en
  const description = locale === 'fr' ? product.description.fr : product.description.en
  const fabric = locale === 'fr' ? product.fabric.fr : product.fabric.en

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const orderMessage = encodeURIComponent(
    locale === 'fr'
      ? `Bonjour, je souhaite commander : ${name} (${product.price.toLocaleString('fr-FR')} FCFA)`
      : `Hello, I would like to order: ${name} (${product.price.toLocaleString('en-US')} FCFA)`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${orderMessage}`

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const setImageIndex = (index: number) => {
    setIsImageLoaded(false)
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('product.backToShop')}
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  key={product.images[currentImageIndex]}
                  src={product.images[currentImageIndex]}
                  alt={name}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsImageLoaded(true)}
                  priority
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded uppercase tracking-wide">
                    {t('product.new')}
                  </span>
                )}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setImageIndex((currentImageIndex - 1 + product.images.length) % product.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setImageIndex((currentImageIndex + 1) % product.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${idx === currentImageIndex ? 'border-accent' : 'border-transparent'
                        }`}
                    >
                      <Image src={img} alt={`${name} ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {name}
                </h1>
                <p className="text-2xl font-medium text-foreground">
                  {product.price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} FCFA
                </p>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed">{description}</p>
              </div>

              {/* Details */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">{t('product.fabric')}</span>
                  <span className="font-medium text-foreground">{fabric}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">{t('product.material')}</span>
                  <span className="font-medium text-foreground">{product.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">{t('product.origin')}</span>
                  <span className="font-medium text-foreground">{product.origin}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">{t('product.features')}</h3>
                <ul className="space-y-2">
                  {[
                    t('product.feature1'),
                    t('product.feature2'),
                    t('product.feature3'),
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Button */}
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
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {t('product.related')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
