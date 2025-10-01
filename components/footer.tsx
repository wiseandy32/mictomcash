export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Investment Plans</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/plans/starter"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Starter Plan
                </a>
              </li>
              <li>
                <a
                  href="/plans/growth"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Growth Plan
                </a>
              </li>
              <li>
                <a
                  href="/plans/premium"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Premium Plan
                </a>
              </li>
              <li>
                <a
                  href="/plans/elite"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Elite Plan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/resources/investment-guide"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investment Guide
                </a>
              </li>
              <li>
                <a
                  href="/resources/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/resources/market-insights"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Market Insights
                </a>
              </li>
              <li>
                <a
                  href="/resources/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/company/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/company/team"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/company/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/company/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/legal/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/legal/risk-disclosure"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a
                  href="/legal/compliance"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Apex Capital. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
