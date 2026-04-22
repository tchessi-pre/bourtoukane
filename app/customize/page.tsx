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
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { MessageCircle, Palette, Glasses, Ruler, Sparkles } from 'lucide-react'

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
      
      {/* Hero Section - Elegant Indigo Gradient (same style as Shop) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-indigo-50 via-violet-50/50 to-purple-50/30">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Animated label */}
          <div 
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <span className="h-px w-8 bg-indigo-600" />
            <span className="text-indigo-700 font-medium uppercase tracking-[0.25em] text-xs">
              {t('customize.label')}
            </span>
            <span className="h-px w-8 bg-indigo-600" />
          </div>
          
          {/* Main title with staggered animation */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span 
              className={`block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {locale === 'fr' ? 'Creez Votre' : 'Create Your'}
            </span>
            <span 
              className={`block text-indigo-700 italic font-normal transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {locale === 'fr' ? 'Chef-d\'oeuvre' : 'Masterpiece'}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {t('customize.subtitle')}
          </p>
          
          {/* Decorative colored dots */}
          <div 
            className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            <div className="w-3 h-3 rounded-full bg-violet-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
          </div>
        </div>
      </section>

      {/* Customization Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Preview */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/images/customize-preview.jpg"
                  alt="Custom eyewear preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {t('customize.yourDesign')}
                  </h3>
                  <div className="space-y-1 text-white/90 text-sm">
                    <p>{t('customize.frame')}: {locale === 'fr' ? selectedFrame?.name.fr : selectedFrame?.name.en}</p>
                    <p>{t('customize.fabric')}: {locale === 'fr' ? selectedFabric?.name.fr : selectedFabric?.name.en}</p>
                    <p>{t('customize.lens')}: {lensType === 'sun' ? t('customize.sunglasses') : lensType === 'optical' ? t('customize.optical') : t('customize.blueLight')}</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                {t('customize.previewNote')}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-10">
              {/* Frame Style */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Glasses className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    {t('customize.selectFrame')}
                  </h2>
                </div>
                <RadioGroup value={frameStyle} onValueChange={setFrameStyle} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {frameStyles.map((style) => (
                    <div key={style.id}>
                      <RadioGroupItem value={style.id} id={style.id} className="peer sr-only" />
                      <Label
                        htmlFor={style.id}
                        className="flex items-center justify-center p-4 rounded-lg border-2 border-border bg-card cursor-pointer transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 hover:border-accent/50"
                      >
                        <span className="font-medium text-foreground">
                          {locale === 'fr' ? style.name.fr : style.name.en}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Fabric Pattern */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    {t('customize.selectFabric')}
                  </h2>
                </div>
                <RadioGroup value={fabricPattern} onValueChange={setFabricPattern} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {fabricPatterns.map((pattern) => (
                    <div key={pattern.id}>
                      <RadioGroupItem value={pattern.id} id={pattern.id} className="peer sr-only" />
                      <Label
                        htmlFor={pattern.id}
                        className="flex items-center gap-3 p-4 rounded-lg border-2 border-border bg-card cursor-pointer transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 hover:border-accent/50"
                      >
                        <span 
                          className="w-6 h-6 rounded-full flex-shrink-0 border border-border" 
                          style={{ backgroundColor: pattern.color }}
                        />
                        <span className="font-medium text-foreground text-sm">
                          {locale === 'fr' ? pattern.name.fr : pattern.name.en}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Lens Type */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    {t('customize.selectLens')}
                  </h2>
                </div>
                <RadioGroup value={lensType} onValueChange={setLensType} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <RadioGroupItem value="sun" id="sun" className="peer sr-only" />
                    <Label
                      htmlFor="sun"
                      className="flex flex-col items-center p-4 rounded-lg border-2 border-border bg-card cursor-pointer transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 hover:border-accent/50"
                    >
                      <span className="font-medium text-foreground">{t('customize.sunglasses')}</span>
                      <span className="text-sm text-muted-foreground mt-1">{t('customize.sunglassesDesc')}</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="optical" id="optical" className="peer sr-only" />
                    <Label
                      htmlFor="optical"
                      className="flex flex-col items-center p-4 rounded-lg border-2 border-border bg-card cursor-pointer transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 hover:border-accent/50"
                    >
                      <span className="font-medium text-foreground">{t('customize.optical')}</span>
                      <span className="text-sm text-muted-foreground mt-1">{t('customize.opticalDesc')}</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="blue" id="blue" className="peer sr-only" />
                    <Label
                      htmlFor="blue"
                      className="flex flex-col items-center p-4 rounded-lg border-2 border-border bg-card cursor-pointer transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 hover:border-accent/50"
                    >
                      <span className="font-medium text-foreground">{t('customize.blueLight')}</span>
                      <span className="text-sm text-muted-foreground mt-1">{t('customize.blueLightDesc')}</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <Label htmlFor="notes" className="font-serif text-xl font-bold text-foreground">
                  {t('customize.notes')}
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('customize.notesPlaceholder')}
                  className="min-h-[120px]"
                />
              </div>

              {/* Submit */}
              <div className="space-y-4 pt-4">
                <Button asChild size="lg" className="w-full text-base">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('customize.submit')}
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  {t('customize.submitNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {t('customize.processTitle')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 text-xl font-bold mb-4">
                  {step}
                </div>
                <h3 className="font-medium mb-2">{t(`customize.step${step}.title`)}</h3>
                <p className="text-primary-foreground/80 text-sm">{t(`customize.step${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
