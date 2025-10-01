import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function StarterPlanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Starter Plan
                </h1>
                <p className="text-xl text-muted-foreground">
                  Perfect for first-time investors looking to grow their wealth
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 lg:p-12 mb-12">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-accent mb-2">8%</div>
                  <div className="text-muted-foreground">
                    Expected Annual Return
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      6 Months
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Investment Duration
                    </div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      $1,000
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Minimum Investment
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg text-foreground">
                    Plan Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Low-risk investment portfolio",
                      "Monthly performance reports",
                      "Email support",
                      "Flexible withdrawal options",
                      "Automated reinvestment",
                      "Portfolio diversification",
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  About This Plan
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Starter Plan is designed for investors who are new to the
                  investment world or prefer a conservative approach. With a
                  focus on capital preservation and steady growth, this plan
                  offers a balanced portfolio of low to medium-risk assets.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your investment will be diversified across multiple asset
                  classes including bonds, dividend-paying stocks, and money
                  market instruments. Our experienced portfolio managers
                  actively monitor and adjust your investments to optimize
                  returns while maintaining the risk profile suitable for
                  conservative investors.
                </p>
                <p className="text-muted-foreground">
                  With a minimum commitment of just 6 months and a low entry
                  point of $1,000, the Starter Plan provides an accessible way
                  to begin your investment journey with professional management
                  and transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
