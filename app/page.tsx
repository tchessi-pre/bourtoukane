import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { HomeHero } from '@/components/home/HomeHero'
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
