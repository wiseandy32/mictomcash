import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

export default function ElitePlanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Crown className="w-4 h-4" />
                  Exclusive
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Elite Plan
                </h1>
                <p className="text-xl text-muted-foreground">
                  Maximum returns for sophisticated investors
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent rounded-lg p-8 lg:p-12 mb-12">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-accent mb-2">50%</div>
                  <div className="text-muted-foreground">
                    Expected Annual Return
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      36 Months
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Investment Duration
                    </div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      $100,000
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
                      "Ultra-high-growth portfolio",
                      "Real-time performance monitoring",
                      "Concierge-level 24/7 support",
                      "Bi-weekly strategy sessions",
                      "Fully customized portfolio",
                      "Institutional-grade risk management",
                      "Exclusive private deals & IPOs",
                      "Comprehensive wealth planning",
                      "Proprietary market intelligence",
                      "C-suite portfolio manager access",
                      "Annual in-person review meetings",
                      "Estate planning consultation",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="lg" className="w-full">
                  Request Consultation
                </Button>
              </div>

              <div className="prose prose-neutral max-w-none">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  About This Plan
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Elite Plan represents the pinnacle of investment
                  management, reserved for sophisticated investors seeking
                  maximum returns through aggressive strategies and exclusive
                  opportunities. This plan provides white-glove service and
                  access to institutional-grade investment vehicles typically
                  unavailable to individual investors.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your portfolio will be fully customized based on your risk
                  tolerance, financial goals, and market outlook. Investments
                  may include private equity, hedge fund allocations, direct
                  startup investments, distressed assets, and other
                  high-potential opportunities. Our C-suite portfolio managers
                  bring decades of experience managing ultra-high-net-worth
                  portfolios.
                </p>
                <p className="text-muted-foreground">
                  With a 36-month commitment and comprehensive wealth management
                  services including estate planning and tax optimization, the
                  Elite Plan offers a complete financial solution designed to
                  generate exceptional wealth over the long term. Acceptance
                  into this plan requires an application and consultation
                  process.
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
