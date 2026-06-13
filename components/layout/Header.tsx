"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import { X, ArrowRight } from 'lucide-react'
import { BrandLogo } from '@/components/common/BrandLogo'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { cn } from '@/lib/utils'

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/customize', label: t('nav.customize') },
    { href: '/about', label: t('nav.about') },
  ]

  const isLinkActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 group relative"
            >
              <BrandLogo variant="header" />
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-2 group"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={cn(
                      "text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {link.label}
                    </span>
                    {/* Animated underline */}
                    <span className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-300 ease-out",
                      isActive ? "w-6" : "w-0 group-hover:w-6"
                    )} />
                  </Link>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <LanguageToggle locale={locale} setLocale={setLocale} />

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-border mx-2" />

              {/* Cart Icon */}
              {/* <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex relative group overflow-hidden"
              >
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button> */}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden relative p-2 group"
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="block w-6 h-0.5 bg-foreground transition-all duration-300 group-hover:w-4" />
                  <span className="block w-6 h-0.5 bg-foreground transition-all duration-300" />
                  <span className="block w-4 h-0.5 bg-foreground transition-all duration-300 group-hover:w-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-60 lg:hidden transition-all duration-500",
          isOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          id="mobile-menu"
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-500 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label={locale === 'fr' ? 'Menu' : 'Menu'}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 group"
            aria-label="Close menu"
            ref={closeButtonRef}
          >
            <X className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:rotate-90" />
          </button>

          {/* Menu Content */}
          <div className="flex flex-col h-full px-8 pt-24 pb-12">
            {/* Nav Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = isLinkActive(link.href)
                  return (
                    <li
                      key={link.href}
                      className={cn(
                        "transform transition-all duration-500",
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      )}
                      style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-border"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className={cn(
                          "font-serif text-2xl transition-colors duration-300",
                          isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                        )}>
                          {link.label}
                        </span>
                        <ArrowRight className={cn(
                          "h-5 w-5 transition-all duration-300",
                          isActive
                            ? "text-accent translate-x-0 opacity-100"
                            : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        )} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Bottom Section */}
            <div
              className={cn(
                "space-y-6 transform transition-all duration-500",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}
            >
              {/* Language Toggle */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {locale === 'fr' ? 'Langue' : 'Language'}
                </span>
                <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
                  <button
                    onClick={() => setLocale('fr')}
                    className={cn(
                      "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                      locale === 'fr'
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLocale('en')}
                    className={cn(
                      "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                      locale === 'en'
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Brand tagline */}
              <p className="text-sm text-muted-foreground italic">
                {locale === 'fr'
                  ? 'Lunettes artisanales africaines'
                  : 'African artisanal eyewear'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
