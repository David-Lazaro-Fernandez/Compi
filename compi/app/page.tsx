import { HeroSection } from "@/components/hero-section"
import { QuoteBenefits } from "@/components/quote-benefits"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Partners } from "@/components/partners"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <QuoteBenefits />
      <CustomerReviews />
      <FAQ />
      <FinalCTA />
    </>
  )
}

