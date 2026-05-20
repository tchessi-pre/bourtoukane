"use client"

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ProductGalleryProps = {
  name: string
  images: ReadonlyArray<string>
  isNew?: boolean
  newLabel: string
  currentImageIndex: number
  isImageLoaded: boolean
  onImageLoad: () => void
  onSetImageIndex: (index: number) => void
}

export function ProductGallery({
  name,
  images,
  isNew,
  newLabel,
  currentImageIndex,
  isImageLoaded,
  onImageLoad,
  onSetImageIndex,
}: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <Image
          key={images[currentImageIndex]}
          src={images[currentImageIndex]}
          alt={name}
          fill
          className={`object-cover transition-opacity duration-500 ease-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={onImageLoad}
          priority
        />
        {Boolean(isNew) && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded uppercase tracking-wide">
            {newLabel}
          </span>
        )}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onSetImageIndex((currentImageIndex - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => onSetImageIndex((currentImageIndex + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSetImageIndex(idx)}
              className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${idx === currentImageIndex ? 'border-accent' : 'border-transparent'}`}
            >
              <Image src={img} alt={`${name} ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

