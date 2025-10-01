import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MitomCash ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  investment platform and services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our services, you agree to the terms of
                  this Privacy Policy. If you do not agree with the terms,
                  please do not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  2.1 Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect personal information that you provide directly to
                  us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Full name, date of birth, and contact information</li>
                  <li>Government-issued identification documents</li>
                  <li>Social Security Number or Tax Identification Number</li>
                  <li>Financial information including bank account details</li>
                  <li>Investment preferences and risk tolerance</li>
                  <li>Employment and income information</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you access our platform, we automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Verify your identity and comply with KYC/AML regulations
                  </li>
                  <li>
                    Process your investment transactions and manage your account
                  </li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>
                    Send important notices about your investments and account
                  </li>
                  <li>Improve our services and develop new features</li>
                  <li>Detect and prevent fraud and unauthorized activities</li>
                  <li>
                    Comply with legal obligations and regulatory requirements
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    perform services on our behalf
                  </li>
                  <li>
                    <strong>Financial Institutions:</strong> Banks and payment
                    processors for transaction processing
                  </li>
                  <li>
                    <strong>Regulatory Authorities:</strong> Government agencies
                    as required by law
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> When necessary to comply
                    with legal obligations or protect our rights
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell your personal information to third parties for
                  marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement industry-standard security measures to protect
                  your information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>
                    Request deletion of your information (subject to legal
                    requirements)
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary
                  to provide our services and comply with legal obligations.
                  Financial records are typically retained for at least 7 years
                  as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place to protect your
                  information in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on our platform and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-foreground mb-2">
                    <strong>MitomCash Privacy Team</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Email: privacy@apexcapital.com
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
