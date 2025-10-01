import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PremiumPlanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Premium Plan</h1>
                <p className="text-xl text-muted-foreground">Advanced strategies for experienced investors</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 lg:p-12 mb-12">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-accent mb-2">25%</div>
                  <div className="text-muted-foreground">Expected Annual Return</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">18 Months</div>
                    <div className="text-sm text-muted-foreground">Investment Duration</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">$25,000</div>
                    <div className="text-sm text-muted-foreground">Minimum Investment</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg text-foreground">Plan Features</h3>
                  <ul className="space-y-3">
                    {[
                      "High-growth investment portfolio",
                      "Daily performance tracking",
                      "24/7 priority support",
                      "Monthly strategy consultations",
                      "Custom portfolio optimization",
                      "Advanced risk management",
                      "Private investment opportunities",
                      "Personalized tax planning",
                      "Exclusive market research",
                      "Direct portfolio manager access",
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
                  The Premium Plan is designed for experienced investors who understand market dynamics and are
                  comfortable with higher risk in pursuit of superior returns. This plan leverages advanced investment
                  strategies and provides access to exclusive opportunities not available in standard plans.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your portfolio will include high-growth stocks, pre-IPO opportunities, venture capital investments,
                  cryptocurrency allocations, and other alternative assets. Our senior portfolio managers employ
                  sophisticated quantitative models and proprietary research to identify exceptional investment
                  opportunities.
                </p>
                <p className="text-muted-foreground">
                  With an 18-month commitment and premium support including monthly consultations and direct manager
                  access, the Premium Plan offers a truly personalized investment experience designed to maximize wealth
                  creation.
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
