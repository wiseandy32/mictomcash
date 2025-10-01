import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function GrowthPlanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Growth Plan</h1>
                <p className="text-xl text-muted-foreground">Balanced approach for steady wealth accumulation</p>
              </div>

              <div className="bg-card border-2 border-accent rounded-lg p-8 lg:p-12 mb-12">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-accent mb-2">15%</div>
                  <div className="text-muted-foreground">Expected Annual Return</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">12 Months</div>
                    <div className="text-sm text-muted-foreground">Investment Duration</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">$5,000</div>
                    <div className="text-sm text-muted-foreground">Minimum Investment</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg text-foreground">Plan Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Balanced risk-reward portfolio",
                      "Weekly performance updates",
                      "Priority email & chat support",
                      "Quarterly strategy reviews",
                      "Advanced analytics dashboard",
                      "Tax optimization strategies",
                      "Dedicated account manager",
                      "Early withdrawal options",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="lg" className="w-full">
                  Start Investing
                </Button>
              </div>

              <div className="prose prose-neutral max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Plan</h2>
                <p className="text-muted-foreground mb-4">
                  The Growth Plan strikes the perfect balance between risk and reward, making it our most popular choice
                  among investors. This plan is ideal for those who have some investment experience and are looking to
                  grow their wealth more aggressively while still maintaining reasonable risk management.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your portfolio will include a diversified mix of growth stocks, emerging market opportunities, real
                  estate investment trusts (REITs), and select alternative investments. Our team employs both
                  fundamental and technical analysis to identify high-potential opportunities while maintaining proper
                  diversification.
                </p>
                <p className="text-muted-foreground">
                  With a 12-month commitment and enhanced support features including a dedicated account manager and
                  advanced analytics, the Growth Plan provides the tools and expertise needed to achieve meaningful
                  wealth accumulation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
