import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HomeHero } from '@/components/HomeHero'
import { BrandStoryTeaser } from '@/components/home/BrandStoryTeaser'
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection'
import { ValuesSection } from '@/components/home/ValuesSection'
import { EditorialBannerSection } from '@/components/home/EditorialBannerSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HomeHero />
      <BrandStoryTeaser />
      <FeaturedProductsSection />
      <ValuesSection />
      <EditorialBannerSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
