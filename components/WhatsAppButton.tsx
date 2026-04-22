"use client"

import { MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function WhatsAppButton() {
  const { t } = useI18n()
  const whatsappNumber = "+22500000000"
  const message = encodeURIComponent(t('whatsapp.defaultMessage'))
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  )
}
