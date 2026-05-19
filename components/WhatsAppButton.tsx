"use client"

import { MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function WhatsAppButton() {
  const { t } = useI18n()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269'
  const message = encodeURIComponent(t('whatsapp.defaultMessage'))
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#086d2d] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#0e8339] transition-all hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  )
}
