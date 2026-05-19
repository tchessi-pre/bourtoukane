"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CalendarDays, MessageCircle, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomizePage() {
  const { t, locale } = useI18n()
  type Audience = 'adult' | 'kids' | 'family'
  type Occasion = 'none' | 'birthday' | 'wedding' | 'corporate' | 'other'

  const [audience, setAudience] = useState<Audience>('adult')
  const [occasion, setOccasion] = useState<Occasion>('none')
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const previewSrc = '/images/customize-preview.jpg'

  const audienceOptions: ReadonlyArray<{ value: Audience; label: string }> = [
    { value: 'adult', label: locale === 'fr' ? 'Adultes' : 'Adults' },
    { value: 'kids', label: locale === 'fr' ? 'Enfants' : 'Kids' },
    { value: 'family', label: locale === 'fr' ? 'Famille' : 'Family' },
  ]

  const audienceLabel =
    audience === 'kids'
      ? locale === 'fr'
        ? 'Enfants'
        : 'Kids'
      : audience === 'family'
        ? locale === 'fr'
          ? 'Hommes · Femmes · Enfants'
          : 'Men · Women · Kids'
        : locale === 'fr'
          ? 'Adultes'
          : 'Adults'

  const occasionLabel =
    occasion === 'birthday'
      ? locale === 'fr'
        ? 'Anniversaire'
        : 'Birthday'
      : occasion === 'wedding'
        ? locale === 'fr'
          ? 'Mariage'
          : 'Wedding'
        : occasion === 'corporate'
          ? locale === 'fr'
            ? "Fête d'entreprise"
            : 'Company event'
          : occasion === 'other'
            ? locale === 'fr'
              ? 'Autre'
              : 'Other'
            : locale === 'fr'
              ? 'Aucun'
              : 'None'

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const customMessage = encodeURIComponent(
    locale === 'fr'
      ? `Bonjour, je souhaite créer des lunettes personnalisées:\n- Pour: ${audienceLabel}\n- Occasion: ${occasionLabel}\n- Quantité: ${quantity}\n${notes ? `- Notes: ${notes}` : ''}`
      : `Hello, I would like to create custom eyewear:\n- For: ${audienceLabel}\n- Occasion: ${occasionLabel}\n- Quantity: ${quantity}\n${notes ? `- Notes: ${notes}` : ''}`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${customMessage}`

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
                {audienceLabel} · {occasionLabel} · {quantity}
              </p>
              <p className="text-sm text-muted-foreground">
                {locale === 'fr' ? 'Livraison sous 3 semaines' : 'Delivery within 3 weeks'}
              </p>
              <p className="text-muted-foreground text-sm">
                {t('customize.previewNote')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" />
                <span>1. {locale === 'fr' ? 'Événement & quantité' : 'Occasion & quantity'}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { value: 'none' as const, label: locale === 'fr' ? 'Aucun' : 'None' },
                  { value: 'birthday' as const, label: locale === 'fr' ? 'Anniversaire' : 'Birthday' },
                  { value: 'wedding' as const, label: locale === 'fr' ? 'Mariage' : 'Wedding' },
                  { value: 'corporate' as const, label: locale === 'fr' ? "Entreprise" : 'Company' },
                  { value: 'other' as const, label: locale === 'fr' ? 'Autre' : 'Other' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setOccasion(option.value)}
                    className={cn(
                      "px-4 py-3 text-sm uppercase tracking-widest border transition-all bg-background",
                      occasion === option.value ? "border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Quantity */}
                <div className="border border-border bg-background p-4 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <label
                      htmlFor="quantity-input"
                      className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer"
                    >
                      {locale === 'fr' ? 'Quantité' : 'Quantity'}
                    </label>
                    <span className="text-xs tabular-nums text-muted-foreground">{quantity}</span>
                  </div>

                  <div className="flex items-stretch">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="h-11 w-11 shrink-0 border border-border bg-background text-sm transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={locale === 'fr' ? 'Diminuer la quantité' : 'Decrease quantity'}
                    >
                      −
                    </button>
                    <Input
                      id="quantity-input"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      step={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value || 1)))}
                      className="h-11 rounded-none border-x-0 text-center tabular-nums bg-background focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="h-11 w-11 shrink-0 border border-border bg-background text-sm transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={locale === 'fr' ? 'Augmenter la quantité' : 'Increase quantity'}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Audience (as semantic radio group) */}
                <fieldset className="border border-border bg-background p-4 space-y-3">
                  <legend className="sr-only">{locale === 'fr' ? 'Pour qui ?' : 'For who?'}</legend>

                  <div className="w-full text-xs uppercase tracking-widest text-muted-foreground flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>{locale === 'fr' ? 'Pour qui ?' : 'For who?'}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">{audienceLabel}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {audienceOptions.map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          'flex items-center justify-center px-2 sm:px-3 py-3 text-[11px] sm:text-xs tracking-wide uppercase text-center border transition-all cursor-pointer select-none',
                          'focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/40 focus-within:ring-offset-2 focus-within:ring-offset-background',
                          audience === option.value
                            ? 'border-foreground bg-background'
                            : 'border-border bg-background hover:border-foreground'
                        )}
                      >
                        <input
                          type="radio"
                          name="audience"
                          value={option.value}
                          checked={audience === option.value}
                          onChange={() => setAudience(option.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {locale === 'fr'
                  ? "Les montures BOURTOUKANE by Chez Ama's existent pour hommes, femmes et enfants. Chaque pièce est unique grâce aux chutes de tissus récupérées chez les couturières, ce qui contribue à l'amélioration de l'environnement. Collaboration avec des opticiens et ophtalmologues agréés."
                  : "BOURTOUKANE by Chez Ama's frames are available for men, women, and kids. Each piece is unique thanks to upcycled fabric scraps collected from local seamstresses, helping reduce waste and support the environment. Collaboration with licensed opticians and ophthalmologists."}
              </p>
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
              <p className="text-sm text-muted-foreground">
                {locale === 'fr'
                  ? "Décrivez ici la monture souhaitée, le tissu souhaité et le type de verres (optique, solaire, bleu lumière), ainsi que toute précision utile."
                  : 'Describe here the desired frame, fabric, and lens type (optical, sunglasses, blue light), plus any useful details.'}
              </p>
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
