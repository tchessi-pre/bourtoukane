"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Palette, Glasses, Ruler } from 'lucide-react'
import { cn } from '@/lib/utils'

const frameStyles = [
  { id: 'aviator', name: { fr: 'Aviateur', en: 'Aviator' } },
  { id: 'wayfarer', name: { fr: 'Wayfarer', en: 'Wayfarer' } },
  { id: 'round', name: { fr: 'Rond', en: 'Round' } },
  { id: 'cat-eye', name: { fr: 'Oeil de chat', en: 'Cat Eye' } },
  { id: 'oversized', name: { fr: 'Oversize', en: 'Oversized' } },
]

const fabricPatterns = [
  { id: 'ankara-gold', name: { fr: 'Ankara Or', en: 'Ankara Gold' }, color: '#D4AF37' },
  { id: 'kente-green', name: { fr: 'Kente Vert', en: 'Kente Green' }, color: '#228B22' },
  { id: 'bogolan-earth', name: { fr: 'Bogolan Terre', en: 'Bogolan Earth' }, color: '#8B4513' },
  { id: 'adire-indigo', name: { fr: 'Adire Indigo', en: 'Adire Indigo' }, color: '#4B0082' },
  { id: 'kitenge-orange', name: { fr: 'Kitenge Orange', en: 'Kitenge Orange' }, color: '#FF6B35' },
  { id: 'wax-blue', name: { fr: 'Wax Bleu', en: 'Wax Blue' }, color: '#1E90FF' },
]

const previewByFrameStyle: Record<string, string> = {
  aviator: '/images/products/sahel-gold.jpg',
  wayfarer: '/images/products/wax-indigo.jpg',
  round: '/images/products/ankara-gold.jpg',
  'cat-eye': '/images/products/kitenge-sunset.png',
  oversized: '/images/products/faso-dan-fani.jpg',
}

export default function CustomizePage() {
  const { t, locale } = useI18n()
  const [frameStyle, setFrameStyle] = useState('aviator')
  const [fabricPattern, setFabricPattern] = useState('ankara-gold')
  const [lensType, setLensType] = useState('sun')
  const [notes, setNotes] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const selectedFrame = frameStyles.find(f => f.id === frameStyle)
  const selectedFabric = fabricPatterns.find(f => f.id === fabricPattern)
  const previewSrc = previewByFrameStyle[frameStyle] ?? '/images/customize-preview.jpg'

  const whatsappNumber = "+22500000000"
  const customMessage = encodeURIComponent(
    locale === 'fr'
      ? `Bonjour, je souhaite créer des lunettes personnalisées:\n- Monture: ${selectedFrame?.name.fr}\n- Tissu: ${selectedFabric?.name.fr}\n- Type de verres: ${lensType === 'sun' ? 'Solaires' : lensType === 'optical' ? 'Optiques' : 'Bleu lumière'}\n${notes ? `- Notes: ${notes}` : ''}`
      : `Hello, I would like to create custom eyewear:\n- Frame: ${selectedFrame?.name.en}\n- Fabric: ${selectedFabric?.name.en}\n- Lens type: ${lensType === 'sun' ? 'Sunglasses' : lensType === 'optical' ? 'Optical' : 'Blue light'}\n${notes ? `- Notes: ${notes}` : ''}`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${customMessage}`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pt-32 md:pt-40 pb-12">
        <div className="mx-auto w-full max-w-3xl">
          <p
            className={cn(
              "text-xs uppercase tracking-[0.3em] text-accent mb-3 transition-all duration-700",
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            )}
          >
            {t('customize.label')}
          </p>
          <h1
            className={cn(
              "font-serif text-5xl md:text-6xl text-balance text-foreground transition-all duration-700 delay-100",
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {locale === 'fr' ? 'Composez votre pièce unique.' : 'Compose your unique piece.'}
          </h1>
          <p
            className={cn(
              "mt-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {t('customize.subtitle')}
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="border-t border-foreground pt-4">
                <p className="font-serif text-4xl text-accent tabular-nums">
                  {String(step).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl mt-2">
                  {t(`customize.step${step}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {t(`customize.step${step}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Form */}
      <section className="bg-secondary py-20 px-4">
        <div className="mx-auto w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="bg-background aspect-square overflow-hidden border border-border shadow-sm">
              <Image
                key={previewSrc}
                src={previewSrc}
                alt={locale === 'fr' ? 'Aperçu de votre monture personnalisée' : 'Preview of your custom eyewear'}
                width={800}
                height={800}
                className="h-full w-full object-cover transition-opacity duration-300"
                priority
              />
            </div>

            <div className="pt-6 border-t border-border mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                {locale === 'fr' ? 'Votre composition' : 'Your selection'}
              </p>
              <p className="font-serif text-2xl text-foreground">
                {locale === 'fr' ? selectedFrame?.name.fr : selectedFrame?.name.en} · {locale === 'fr' ? selectedFabric?.name.fr : selectedFabric?.name.en}
              </p>
              <p className="text-sm text-muted-foreground">
                {locale === 'fr' ? 'À partir de 95 000 FCFA — Livraison sous 3 semaines' : 'From 95,000 FCFA — Delivery within 3 weeks'}
              </p>
              <p className="text-muted-foreground text-sm">
                {t('customize.previewNote')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Glasses className="h-4 w-4 text-accent" />
                <span>1. {t('customize.selectFrame')}</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {frameStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setFrameStyle(style.id)}
                    className={cn(
                      "px-4 py-3 text-sm uppercase tracking-widest border transition-all",
                      frameStyle === style.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border bg-background hover:border-foreground"
                    )}
                  >
                    {locale === 'fr' ? style.name.fr : style.name.en}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Palette className="h-4 w-4 text-accent" />
                <span>2. {t('customize.selectFabric')}</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {fabricPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    type="button"
                    onClick={() => setFabricPattern(pattern.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm uppercase tracking-widest border transition-all bg-background",
                      fabricPattern === pattern.id ? "border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    <span className="w-5 h-5 rounded-full border border-border" style={{ backgroundColor: pattern.color }} />
                    {locale === 'fr' ? pattern.name.fr : pattern.name.en}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Ruler className="h-4 w-4 text-accent" />
                <span>3. {t('customize.selectLens')}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 'sun', label: t('customize.sunglasses') },
                  { value: 'optical', label: t('customize.optical') },
                  { value: 'blue', label: t('customize.blueLight') },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLensType(option.value)}
                    className={cn(
                      "px-4 py-3 text-sm uppercase tracking-widest border transition-all bg-background",
                      lensType === option.value ? "border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest">
                {t('customize.notes')}
              </h3>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('customize.notesPlaceholder')}
                className="min-h-[120px] rounded-none bg-background"
              />
            </div>

            <Button
              asChild
              size="lg"
              className="w-full rounded-none bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" fill="currentColor" />
                {t('customize.submit')}
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              {t('customize.submitNote')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
