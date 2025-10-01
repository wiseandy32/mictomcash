import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle } from "lucide-react"

export default function RiskDisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Risk Disclosure Statement</h1>
                <p className="text-muted-foreground">Last updated: January 2025</p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <p className="text-foreground font-semibold mb-2">Important Notice</p>
              <p className="text-muted-foreground leading-relaxed">
                This Risk Disclosure Statement is provided to help you understand the risks associated with investing
                through Apex Capital. Please read this document carefully before making any investment decisions.
              </p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Investment Risks</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All investments carry inherent risks, and you may lose some or all of your invested capital. The value
                  of investments can fluctuate, and past performance is not indicative of future results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Before investing, you should carefully consider your financial situation, investment objectives, risk
                  tolerance, and investment time horizon.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Market Risk</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Market risk refers to the possibility that the value of your investments will decline due to changes
                  in market conditions, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Economic Factors:</strong> Recessions, inflation, interest rate changes, and unemployment
                    rates
                  </li>
                  <li>
                    <strong>Political Events:</strong> Elections, policy changes, geopolitical tensions, and regulatory
                    reforms
                  </li>
                  <li>
                    <strong>Market Sentiment:</strong> Investor confidence, speculation, and market psychology
                  </li>
                  <li>
                    <strong>Global Events:</strong> Pandemics, natural disasters, and international conflicts
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Market conditions can change rapidly and unpredictably, potentially resulting in significant losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Liquidity Risk</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Liquidity risk is the risk that you may not be able to sell or withdraw your investment when desired
                  or at a fair price. Factors affecting liquidity include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Lock-up periods specified in your investment plan</li>
                  <li>Market conditions and trading volumes</li>
                  <li>Early withdrawal penalties and fees</li>
                  <li>Minimum holding periods for certain investment products</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You should only invest funds that you can afford to have locked up for the duration of your investment
                  plan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Credit Risk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Credit risk is the risk that a borrower or counterparty will fail to meet their financial obligations.
                  This can result in delayed payments, reduced returns, or complete loss of principal. Credit risk is
                  particularly relevant for fixed-income investments and debt instruments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Interest Rate Risk</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Changes in interest rates can significantly impact investment values, particularly for fixed-income
                  securities:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Rising interest rates typically decrease the value of existing bonds</li>
                  <li>Falling interest rates may reduce returns on new investments</li>
                  <li>Interest rate changes affect borrowing costs and economic growth</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Currency Risk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If your investments involve foreign currencies or international assets, exchange rate fluctuations can
                  affect your returns. Currency values can be volatile and influenced by economic policies, trade
                  balances, and geopolitical events.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Inflation Risk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Inflation risk is the possibility that the purchasing power of your investment returns will be eroded
                  by rising prices. If your investment returns do not exceed the inflation rate, you may experience a
                  real loss in purchasing power even if your nominal returns are positive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Concentration Risk</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Concentration risk arises when your investments are not adequately diversified:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Over-exposure to a single asset class, sector, or geographic region</li>
                  <li>Heavy reliance on a small number of investments</li>
                  <li>Lack of diversification across different risk profiles</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Proper diversification can help mitigate but not eliminate investment risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Operational and Technology Risks</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform and services are subject to operational and technology risks, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>System Failures:</strong> Technical malfunctions, outages, or disruptions
                  </li>
                  <li>
                    <strong>Cybersecurity:</strong> Hacking, data breaches, and unauthorized access
                  </li>
                  <li>
                    <strong>Processing Errors:</strong> Mistakes in transaction processing or record-keeping
                  </li>
                  <li>
                    <strong>Third-Party Dependencies:</strong> Reliance on external service providers
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  While we implement robust security measures, no system is completely immune to these risks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Regulatory and Legal Risks</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Changes in laws, regulations, or tax policies can affect your investments:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>New regulations may restrict certain investment activities</li>
                  <li>Tax law changes can impact after-tax returns</li>
                  <li>Regulatory actions may affect market conditions</li>
                  <li>Legal disputes may arise regarding investment terms or performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Performance Projections</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Expected returns and performance projections provided by Apex Capital are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Based on historical data, market analysis, and assumptions</li>
                  <li>Not guarantees of future performance</li>
                  <li>Subject to change based on market conditions</li>
                  <li>May not reflect actual results you will experience</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Actual returns may be significantly higher or lower than projected returns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Suitability and Investment Advice</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless explicitly stated otherwise, Apex Capital does not provide personalized investment advice. You
                  are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Determining whether an investment is suitable for your circumstances</li>
                  <li>Understanding the terms, risks, and potential returns of each investment</li>
                  <li>Seeking independent financial, legal, or tax advice as needed</li>
                  <li>Making your own investment decisions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. No Guarantee of Returns</h2>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="text-foreground font-semibold mb-3">Critical Disclosure</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Apex Capital does not guarantee any specific level of investment performance, returns, or protection
                    of capital. All investments carry the risk of loss, including the potential loss of your entire
                    investment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You should never invest more than you can afford to lose, and you should maintain adequate emergency
                    funds and insurance coverage separate from your investment portfolio.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Acknowledgment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our services, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You have read and understood this Risk Disclosure Statement</li>
                  <li>You understand the risks associated with investing</li>
                  <li>You accept full responsibility for your investment decisions</li>
                  <li>You have the financial capacity to bear potential losses</li>
                  <li>You have sought independent advice if needed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  15. Questions and Additional Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about the risks associated with any investment or need clarification on any
                  aspect of this disclosure, please contact us before proceeding:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-foreground mb-2">
                    <strong>Apex Capital Risk Management</strong>
                  </p>
                  <p className="text-muted-foreground">Email: risk@apexcapital.com</p>
                  <p className="text-muted-foreground">Phone: 1-800-APEX-CAP</p>
                  <p className="text-muted-foreground">Address: 123 Financial District, New York, NY 10004</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
