"use client"

import { BrandLogoLoader } from '@/components/BrandLogo'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center px-6">
      <div className="text-center -translate-y-2">
        <BrandLogoLoader variant="header" />
        <p className="mt-6 text-sm text-muted-foreground">
          Chargement…
        </p>
      </div>
    </div>
  )
}
