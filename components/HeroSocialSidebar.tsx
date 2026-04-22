"use client"

import { Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 5.82c-.34-.39-.6-.85-.76-1.35-.11-.35-.18-.72-.18-1.1h-3.12v12.2c0 1.62-1.31 2.93-2.93 2.93-1.62 0-2.93-1.31-2.93-2.93 0-1.62 1.31-2.93 2.93-2.93.3 0 .6.05.88.14V9.63c-.29-.04-.58-.06-.88-.06-3.35 0-6.06 2.71-6.06 6.06 0 3.35 2.71 6.06 6.06 6.06 3.35 0 6.06-2.71 6.06-6.06V9.26c1.17.84 2.61 1.34 4.18 1.34V7.52c-.87 0-1.7-.27-2.41-.79-.33-.24-.63-.53-.89-.87z" />
    </svg>
  )
}

export function HeroSocialSidebar({ isVisible }: { isVisible: boolean }) {
  const base =
    "group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/70 text-muted-foreground shadow-lg shadow-foreground/5 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:bg-card hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"

  return (
    <div
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3 transition-all duration-700",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
    >
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={cn(base, "delay-100", isVisible ? "scale-100" : "scale-90")}
      >
        <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        className={cn(base, "delay-200", isVisible ? "scale-100" : "scale-90")}
      >
        <TikTokIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={cn(base, "delay-300", isVisible ? "scale-100" : "scale-90")}
      >
        <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
      <div
        className={cn(
          "mt-2 h-10 w-px bg-border/80 transition-all duration-700 delay-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  )
}

