import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { InvestmentPlans } from "@/components/investment-plans"
import { StatsSection } from "@/components/stats-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <InvestmentPlans />
      <StatsSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
