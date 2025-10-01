import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement between you and MitomCash ("Company," "we," "us," or
                  "our") governing your access to and use of our investment
                  platform and services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By creating an account or using our services, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  Terms. If you do not agree, you must not access or use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Eligibility
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use our services, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Be at least 18 years of age or the age of majority in your
                    jurisdiction
                  </li>
                  <li>
                    Have the legal capacity to enter into binding contracts
                  </li>
                  <li>
                    Not be prohibited from using our services under applicable
                    laws
                  </li>
                  <li>
                    Provide accurate and complete registration information
                  </li>
                  <li>Maintain the security of your account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Account Registration and Security
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  3.1 Account Creation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You must create an account to access our investment services.
                  You agree to provide accurate, current, and complete
                  information during registration and to update such information
                  to keep it accurate and current.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  3.2 Account Security
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>
                    Using strong passwords and enabling two-factor
                    authentication
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Investment Services
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  4.1 Nature of Services
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MitomCash provides an investment platform that allows you to
                  invest in various financial instruments. We act as an
                  intermediary and do not provide personalized investment advice
                  unless explicitly stated.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  4.2 Investment Plans
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our investment plans have specific terms, minimum investment
                  amounts, durations, and expected returns. You acknowledge
                  that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Expected returns are projections and not guarantees</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>All investments carry risk of loss</li>
                  <li>
                    You are responsible for understanding the terms of each plan
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  4.3 Deposits and Withdrawals
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deposits and withdrawals are subject to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Minimum and maximum transaction limits</li>
                  <li>Processing times as specified in your investment plan</li>
                  <li>Verification requirements for security purposes</li>
                  <li>Applicable fees and charges</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Fees and Charges
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may charge fees for our services, including but not limited
                  to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Management fees (typically 1-2% annually)</li>
                  <li>Performance fees on returns above certain thresholds</li>
                  <li>Withdrawal fees for early termination</li>
                  <li>Transaction fees for deposits and withdrawals</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All applicable fees are disclosed in your investment plan
                  documentation and account dashboard.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Prohibited Activities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Use our services for any illegal or unauthorized purpose
                  </li>
                  <li>Engage in money laundering or terrorist financing</li>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>
                    Use automated systems to access our platform without
                    permission
                  </li>
                  <li>Transfer or sell your account to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our platform,
                  including but not limited to text, graphics, logos, and
                  software, are owned by MitomCash and protected by intellectual
                  property laws. You may not copy, modify, distribute, or create
                  derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Disclaimers and Limitation of Liability
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  8.1 No Warranties
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without
                  warranties of any kind, either express or implied. We do not
                  guarantee uninterrupted, secure, or error-free service.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  8.2 Limitation of Liability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, MitomCash shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including loss of profits, data, or
                  investment returns, arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless MitomCash and its
                  officers, directors, employees, and agents from any claims,
                  damages, losses, liabilities, and expenses arising from your
                  use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may suspend or terminate your account at any time for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Failure to comply with verification requirements</li>
                  <li>Extended period of inactivity</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination, you remain liable for all obligations
                  incurred prior to termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any disputes arising from these Terms or our services shall be
                  resolved through binding arbitration in accordance with the
                  rules of the American Arbitration Association. You waive your
                  right to participate in class action lawsuits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the State of New York,
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify you of material changes via email or platform
                  notification. Your continued use of our services after such
                  changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms, please contact:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-foreground mb-2">
                    <strong>MitomCash Legal Department</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Email: legal@apexcapital.com
                  </p>
                  <p className="text-muted-foreground">Phone: 1-800-APEX-CAP</p>
                  <p className="text-muted-foreground">
                    Address: 123 Financial District, New York, NY 10004
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
