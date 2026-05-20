"use client"

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Instagram, Facebook, MessageCircle, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { BrandLogo } from '@/components/common/BrandLogo'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 5.82c-.34-.39-.6-.85-.76-1.35-.11-.35-.18-.72-.18-1.1h-3.12v12.2c0 1.62-1.31 2.93-2.93 2.93-1.62 0-2.93-1.31-2.93-2.93 0-1.62 1.31-2.93 2.93-2.93.3 0 .6.05.88.14V9.63c-.29-.04-.58-.06-.88-.06-3.35 0-6.06 2.71-6.06 6.06 0 3.35 2.71 6.06 6.06 6.06 3.35 0 6.06-2.71 6.06-6.06V9.26c1.17.84 2.61 1.34 4.18 1.34V7.52c-.87 0-1.7-.27-2.41-.79-.33-.24-.63-.53-.89-.87z" />
    </svg>
  )
}

export function Footer() {
  const { t, locale } = useI18n()

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+22892189269').trim()
  const contactEmailRaw = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'alvoramabeatrice@gmail.com').trim()
  const contactEmail = contactEmailRaw.replace(/^mailto:/i, '').trim()
  const developerName = (process.env.NEXT_PUBLIC_DEVELOPER_NAME ?? 'Tchèssi').trim()
  const developerUrl = (process.env.NEXT_PUBLIC_DEVELOPER_URL ?? 'https://pre-it.vercel.app/').trim()
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`
  const whatsappCtaMessage = encodeURIComponent(
    locale === 'fr'
      ? "Bonjour, je souhaite en savoir plus sur BOURTOUKANE by Chez Ama's (commande, personnalisation, événement, etc.)."
      : "Hello, I would like to know more about BOURTOUKANE by Chez Ama's (order, customization, event, etc.)."
  )
  const whatsappCtaLink = `${whatsappLink}?text=${whatsappCtaMessage}`
  const emailLink = `mailto:${contactEmail}`
  const emailSubject = encodeURIComponent(locale === 'fr' ? "Contact — BOURTOUKANE by Chez Ama's" : "Contact — BOURTOUKANE by Chez Ama's")
  const emailBody = encodeURIComponent(
    locale === 'fr'
      ? "Bonjour,\n\nJe souhaite vous contacter au sujet de :\n\nMerci,"
      : "Hello,\n\nI'd like to contact you about:\n\nThanks,"
  )
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${emailSubject}&body=${emailBody}`

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/customize', label: t('nav.customize') },
    { href: '/about', label: t('nav.about') },
  ]

  const socialLinks = [
    // { href: whatsappCtaLink, icon: MessageCircle, label: 'WhatsApp' },
    // { href: emailLink, icon: Mail, label: locale === 'fr' ? 'Email' : 'Email' },
    { href: 'https://www.instagram.com/chez_ama_s', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.tiktok.com/@amaalovor', icon: TikTokIcon, label: 'TikTok' },
    { href: 'https://www.facebook.com/ama.alovor', icon: Facebook, label: 'Facebook' },
  ]

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 border-b border-background/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                {locale === 'fr' ? "Une pièce unique, pour chaque histoire." : 'A unique piece, for every story.'}
              </h2>
              <p className="text-background/60 text-lg max-w-xl leading-relaxed">
                {locale === 'fr'
                  ? "Anniversaire, mariage, événement d'entreprise… choisissez votre tissu et votre monture, avec la quantité souhaitée. Nous collaborons aussi avec des opticiens et ophtalmologues agréés."
                  : "Birthday, wedding, corporate event… choose your fabric and frame, with the quantity you need. We also collaborate with licensed opticians and ophthalmologists."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
              <a
                href={whatsappCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 bg-[#25D366] text-white font-medium transition-all duration-300 hover:bg-[#25D366]/90 lg:hover:translate-x-1 inline-flex items-center justify-center gap-2 group touch-manipulation"
              >
                {locale === 'fr' ? 'Parler sur WhatsApp' : 'Chat on WhatsApp'}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={gmailComposeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 bg-background/10 border border-background/20 text-background font-medium transition-all duration-300 hover:bg-background/15 lg:hover:translate-x-1 inline-flex items-center justify-center gap-2 group touch-manipulation"
              >
                {locale === 'fr' ? 'Nous écrire' : 'Email us'}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-5 text-sm text-background/60 leading-relaxed">
              {locale === 'fr'
                ? "Chaque monture est unique : nous valorisons des chutes de tissus récupérées chez les couturières, pour réduire les déchets et sublimer l'artisanat."
                : "Each frame is unique: we upcycle fabric scraps collected from seamstresses, helping reduce waste while celebrating craftsmanship."}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background/70 mb-6">
              {locale === 'fr' ? 'Explorer' : 'Explore'}
            </h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-300"
                >
                  <span className="h-px w-0 bg-accent group-hover:w-4 transition-all duration-300" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background/70 mb-6">
              {locale === 'fr' ? 'Villes' : 'Cities'}
            </h3>
            <nav className="flex flex-col gap-4">
              {[
                { href: '/shop/abidjan', label: 'Abidjan' },
                { href: '/shop/dapaong', label: 'Lomé' },
                { href: '/shop/kente-royal', label: 'Accra' },
                { href: '/shop/sahel-gold', label: 'Marrakech' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-300"
                >
                  <span className="h-px w-0 bg-accent group-hover:w-4 transition-all duration-300" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background/70 mb-6">
              {locale === 'fr' ? 'Suivez-nous' : 'Follow Us'}
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-background/80 hover:text-background transition-colors duration-300"
                >
                  <span className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                    <social.icon className="h-4 w-4" />
                  </span>
                  <span>{social.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="py-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-background/40 text-sm hover:text-background transition-colors duration-300">
              {locale === 'fr' ? 'Mentions légales' : 'Legal'}
            </Link>
            <Link href="/confidentialite" className="text-background/40 text-sm hover:text-background transition-colors duration-300">
              {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
          </div>
          <p className="text-background/40 text-sm flex items-center gap-2">
            <a
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/40 hover:text-background transition-colors duration-300"
            >
              {locale === 'fr' ? `Développé par ${developerName}` : `Built by ${developerName}`}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
