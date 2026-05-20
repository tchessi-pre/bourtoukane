"use client"

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { CustomizeHero } from '@/components/customize/CustomizeHero'
import { CustomizeSteps } from '@/components/customize/CustomizeSteps'
import { CustomizeForm, type Audience, type Occasion } from '@/components/customize/CustomizeForm'

export default function CustomizePage() {
  const { t, locale } = useI18n()

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
      <CustomizeHero t={t} locale={locale} isLoaded={isLoaded} />
      <CustomizeSteps t={t} />
      <CustomizeForm
        t={t}
        locale={locale}
        previewSrc={previewSrc}
        audienceLabel={audienceLabel}
        occasionLabel={occasionLabel}
        audienceOptions={audienceOptions}
        audience={audience}
        setAudience={setAudience}
        occasion={occasion}
        setOccasion={setOccasion}
        quantity={quantity}
        setQuantity={setQuantity}
        notes={notes}
        setNotes={setNotes}
        whatsappLink={whatsappLink}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
