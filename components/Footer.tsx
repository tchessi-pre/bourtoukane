"use client"

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Instagram, Facebook, MessageCircle, ArrowUpRight, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const { t, locale } = useI18n()

  const whatsappNumber = "+22500000000"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/customize', label: t('nav.customize') },
    { href: '/about', label: t('nav.about') },
  ]

  const socialLinks = [
    { href: whatsappLink, icon: MessageCircle, label: 'WhatsApp' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  ]

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter CTA */}
        <div className="py-16 border-b border-background/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                {locale === 'fr' ? 'Restez Inspiré' : 'Stay Inspired'}
              </h2>
              <p className="text-background/60 text-lg max-w-md">
                {locale === 'fr' 
                  ? 'Découvrez nos nouvelles collections et histoires africaines en avant-première.'
                  : 'Discover our new collections and African stories before anyone else.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-background/40" />
                <input
                  type="email"
                  placeholder={locale === 'fr' ? 'Votre email' : 'Your email'}
                  className="w-full h-14 pl-12 pr-4 bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button className="h-14 px-8 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:translate-x-1 flex items-center justify-center gap-2 group">
                {locale === 'fr' ? "S'inscrire" : 'Subscribe'}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <h3 className="font-serif text-2xl font-bold tracking-wider mb-1 group-hover:text-accent transition-colors duration-300">
                MAISON
              </h3>
              <h3 className="font-serif text-2xl font-bold tracking-wider group-hover:text-accent transition-colors duration-300">
                LUNETTES
              </h3>
            </Link>
            <div className="mt-6 flex items-start gap-2 text-background/60">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Abidjan, Côte d&apos;Ivoire<br />
                {locale === 'fr' ? 'Livraison dans toute l\'Afrique' : 'Shipping across Africa'}
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6">
              {locale === 'fr' ? 'Explorer' : 'Explore'}
            </h4>
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
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6">
              Collections
            </h4>
            <nav className="flex flex-col gap-4">
              {['Ankara', 'Kente', 'Bogolan', 'Kitenge'].map((collection) => (
                <Link
                  key={collection}
                  href="/shop"
                  className="group flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-300"
                >
                  <span className="h-px w-0 bg-accent group-hover:w-4 transition-all duration-300" />
                  <span>{collection}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6">
              {locale === 'fr' ? 'Suivez-nous' : 'Follow Us'}
            </h4>
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
            <Link href="/about" className="text-background/40 text-sm hover:text-background transition-colors duration-300">
              {locale === 'fr' ? 'Mentions légales' : 'Legal'}
            </Link>
            <Link href="/about" className="text-background/40 text-sm hover:text-background transition-colors duration-300">
              {locale === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
          </div>
          <p className="text-background/40 text-sm flex items-center gap-2">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}
