import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Activity className="w-16 h-16 text-accent mx-auto mb-4" />
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Market Insights</h1>
                <p className="text-xl text-muted-foreground">
                  Stay informed with our latest market analysis and investment trends
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">S&P 500</h3>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">5,234.18</div>
                  <div className="text-sm text-green-500">+2.4% this week</div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">NASDAQ</h3>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">16,745.30</div>
                  <div className="text-sm text-green-500">+3.1% this week</div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Gold</h3>
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">$2,045</div>
                  <div className="text-sm text-red-500">-0.8% this week</div>
                </div>
              </div>

              <div className="space-y-8">
                <article className="bg-card border border-border rounded-lg p-8">
                  <div className="text-sm text-muted-foreground mb-2">March 15, 2025</div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Tech Sector Shows Strong Growth Momentum
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The technology sector continues to demonstrate robust performance, with major indices reaching new
                    highs. Artificial intelligence and cloud computing companies are leading the charge, driven by
                    increased enterprise adoption and consumer demand.
                  </p>
                  <p className="text-muted-foreground">
                    Our portfolio managers are closely monitoring these trends and adjusting allocations to capitalize
                    on emerging opportunities while maintaining appropriate risk management protocols.
                  </p>
                </article>

                <article className="bg-card border border-border rounded-lg p-8">
                  <div className="text-sm text-muted-foreground mb-2">March 12, 2025</div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Federal Reserve Maintains Interest Rates
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    In its latest meeting, the Federal Reserve decided to keep interest rates unchanged, citing balanced
                    economic growth and controlled inflation. This decision has positive implications for both equity
                    and fixed-income markets.
                  </p>
                  <p className="text-muted-foreground">
                    Stable interest rates create a favorable environment for growth investments while maintaining
                    attractive yields in the bond market. Our diversified portfolios are well-positioned to benefit from
                    this economic backdrop.
                  </p>
                </article>

                <article className="bg-card border border-border rounded-lg p-8">
                  <div className="text-sm text-muted-foreground mb-2">March 8, 2025</div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Emerging Markets Present New Opportunities
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Emerging market economies are showing signs of accelerated growth, particularly in Southeast Asia
                    and Latin America. Infrastructure development and digital transformation are creating attractive
                    investment opportunities.
                  </p>
                  <p className="text-muted-foreground">
                    Our Growth and Premium plans include strategic allocations to emerging markets, providing exposure
                    to these high-potential regions while managing currency and geopolitical risks through careful
                    diversification.
                  </p>
                </article>
              </div>

              <div className="mt-12 bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Want Personalized Market Analysis?</h3>
                <p className="text-muted-foreground mb-6">
                  Premium and Elite plan members receive exclusive market research and personalized investment
                  recommendations.
                </p>
                <a
                  href="/#plans"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Explore Premium Plans →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
