import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, TrendingUp, Shield, Target, DollarSign, BarChart3 } from "lucide-react"

export default function InvestmentGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Investment Guide</h1>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know to start your investment journey
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-semibold text-foreground">Getting Started</h2>
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Investing is one of the most effective ways to build wealth over time. Whether you're saving for
                      retirement, a major purchase, or simply looking to grow your money, understanding the basics of
                      investing is crucial.
                    </p>
                    <p className="text-muted-foreground">
                      Before you begin, it's important to assess your financial situation, define your investment goals,
                      and understand your risk tolerance. These factors will help determine which investment plan is
                      right for you.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-semibold text-foreground">Understanding Returns</h2>
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Investment returns represent the profit or loss on your investment over time. Returns can come
                      from two sources: capital appreciation (increase in asset value) and income generation (dividends,
                      interest, or distributions).
                    </p>
                    <p className="text-muted-foreground">
                      Expected returns vary based on the risk level of your investment. Generally, higher potential
                      returns come with higher risk. Our plans range from conservative (8% annual return) to aggressive
                      (50% annual return), each designed for different investor profiles and goals.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-semibold text-foreground">Risk Management</h2>
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Risk management is essential to successful investing. Diversification—spreading your investments
                      across different asset classes—is one of the most effective ways to manage risk. Our portfolio
                      managers use sophisticated strategies to balance risk and reward.
                    </p>
                    <p className="text-muted-foreground">
                      It's important to understand that all investments carry some level of risk, including the
                      potential loss of principal. However, with proper diversification and professional management,
                      these risks can be significantly mitigated.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-semibold text-foreground">Portfolio Diversification</h2>
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    <p className="text-muted-foreground mb-4">
                      A well-diversified portfolio includes a mix of different asset types such as stocks, bonds, real
                      estate, and alternative investments. The specific allocation depends on your investment plan and
                      risk tolerance.
                    </p>
                    <p className="text-muted-foreground">
                      Our Starter Plan focuses on conservative assets like bonds and dividend stocks, while our Elite
                      Plan includes high-growth opportunities like private equity and pre-IPO investments. Each plan is
                      carefully constructed to optimize returns within its risk parameters.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-semibold text-foreground">Long-Term Strategy</h2>
                  </div>
                  <div className="prose prose-neutral max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Successful investing requires patience and a long-term perspective. Market fluctuations are
                      normal, and trying to time the market often leads to poor results. Instead, focus on your
                      long-term goals and stay committed to your investment strategy.
                    </p>
                    <p className="text-muted-foreground">
                      Our plans are designed with specific time horizons in mind, ranging from 6 months to 36 months.
                      These durations allow our portfolio managers to implement strategies that maximize returns while
                      managing short-term volatility.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Start Investing?</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose the investment plan that aligns with your goals and risk tolerance. Our team is here to help
                    you every step of the way.
                  </p>
                  <a
                    href="/#plans"
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    View Investment Plans →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
