"use client"

import { Bonheur_Royale, Major_Mono_Display } from 'next/font/google'
import { cn } from '@/lib/utils'

const majorMono = Major_Mono_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const bonheurRoyale = Bonheur_Royale({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const logoText = 'BOURTOUKANE'

const logoLetterClassesOnLight = [
  'text-amber-600 dark:text-amber-400',
  'text-emerald-600 dark:text-emerald-400',
  'text-sky-600 dark:text-sky-400',
  'text-rose-600 dark:text-rose-400',
  'text-violet-600 dark:text-violet-400',
  'text-orange-600 dark:text-orange-400',
  'text-cyan-600 dark:text-cyan-400',
  'text-lime-600 dark:text-lime-400',
  'text-fuchsia-600 dark:text-fuchsia-400',
  'text-teal-600 dark:text-teal-400',
  'text-red-600 dark:text-red-400',
]

const logoLetterClassesOnDark = [
  'text-amber-300',
  'text-emerald-300',
  'text-sky-300',
  'text-rose-300',
  'text-violet-300',
  'text-orange-300',
  'text-cyan-300',
  'text-lime-300',
  'text-fuchsia-300',
  'text-teal-300',
  'text-red-300',
]

type BrandLogoVariant = 'header' | 'footer'

export function BrandLogo({
  variant = 'header',
  className,
  showTagline = true,
}: {
  variant?: BrandLogoVariant
  className?: string
  showTagline?: boolean
}) {
  const isFooter = variant === 'footer'
  const letterClasses = isFooter ? logoLetterClassesOnDark : logoLetterClassesOnLight

  return (
    <span className={cn('relative inline-block leading-none', className)}>
      <span
        className={cn(
          majorMono.className,
          isFooter
            ? 'block text-2xl font-bold tracking-[0.14em] transition-opacity duration-300 group-hover:opacity-80'
            : 'block text-xl md:text-2xl font-bold tracking-[0.14em] text-foreground transition-opacity duration-300 group-hover:opacity-70'
        )}
        aria-label={logoText}
      >
        <span className="sr-only">{logoText}</span>
        <span aria-hidden="true">
          {logoText.split('').map((letter, index) => (
            <span key={`${letter}-${index}`} className={cn('inline-block', letterClasses[index])}>
              {letter}
            </span>
          ))}
        </span>
      </span>

      {showTagline && (
        <span
          className={cn(
            bonheurRoyale.className,
            isFooter
              ? 'mt-2 block text-base text-background/75 transition-colors duration-300 group-hover:text-background whitespace-nowrap'
              : 'absolute left-0 right-0 top-full -mt-2 text-right text-base md:text-2xl text-foreground transition-colors duration-300 group-hover:text-foreground whitespace-nowrap'
          )}
        >
          by Chez Ama&apos;s
        </span>
      )}
    </span>
  )
}

export function BrandLogoLoader({
  variant = 'header',
  className,
  showTagline = true,
}: {
  variant?: BrandLogoVariant
  className?: string
  showTagline?: boolean
}) {
  const isFooter = variant === 'footer'
  const letterClasses = isFooter ? logoLetterClassesOnDark : logoLetterClassesOnLight

  return (
    <span className={cn('inline-flex flex-col items-start gap-2', className)} role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span className={cn('relative inline-block leading-none', isFooter ? '' : '')}>
        <span
          className={cn(
            majorMono.className,
            isFooter
              ? 'block text-2xl font-bold tracking-[0.14em]'
              : 'block text-xl md:text-2xl font-bold tracking-[0.14em] text-foreground'
          )}
          aria-label={logoText}
        >
          <span className="sr-only">{logoText}</span>
          <span aria-hidden="true">
            {logoText.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={cn('inline-block will-change-transform', letterClasses[index], 'brand-logo-wave')}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>

        {showTagline && (
          <span
            className={cn(
              bonheurRoyale.className,
              isFooter ? 'block text-base text-background/75 whitespace-nowrap' : 'block text-right text-base md:text-2xl text-foreground whitespace-nowrap',
              'brand-logo-fade'
            )}
            style={{ animationDelay: '180ms' }}
          >
            by Chez Ama&apos;s
          </span>
        )}
      </span>

      <style jsx>{`
        .brand-logo-wave {
          animation: brandLogoWave 1100ms ease-in-out infinite;
        }
        .brand-logo-fade {
          animation: brandLogoFade 1100ms ease-in-out infinite;
        }
        @keyframes brandLogoWave {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.55;
            filter: saturate(0.9);
          }
          45% {
            transform: translateY(-3px);
            opacity: 1;
            filter: saturate(1.15);
          }
        }
        @keyframes brandLogoFade {
          0%,
          100% {
            opacity: 0.45;
          }
          50% {
            opacity: 0.95;
          }
        }
      `}</style>
    </span>
  )
}
