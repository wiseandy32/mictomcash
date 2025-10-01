import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, CheckCircle2 } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Compliance & Regulatory Information
                </h1>
                <p className="text-muted-foreground">Last updated: January 2025</p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <p className="text-foreground font-semibold mb-2">Our Commitment</p>
              <p className="text-muted-foreground leading-relaxed">
                Apex Capital is committed to maintaining the highest standards of regulatory compliance and ethical
                business practices. We operate in full compliance with applicable securities laws and regulations.
              </p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Regulatory Framework</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Apex Capital operates under the regulatory oversight of:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Securities and Exchange Commission (SEC)</p>
                      <p className="text-muted-foreground text-sm">
                        Registered Investment Adviser under the Investment Advisers Act of 1940
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">
                        Financial Industry Regulatory Authority (FINRA)
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Member firm subject to FINRA rules and regulations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">State Securities Regulators</p>
                      <p className="text-muted-foreground text-sm">Licensed in all states where we conduct business</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Registration and Licensing</h2>
                <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-muted-foreground">SEC Registration Number:</span>
                    <span className="text-foreground font-mono">801-123456</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-muted-foreground">FINRA Member Number:</span>
                    <span className="text-foreground font-mono">CRD# 987654</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-muted-foreground">SIPC Member:</span>
                    <span className="text-foreground">Yes - Accounts protected up to $500,000</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Anti-Money Laundering (AML) Program</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Apex Capital maintains a comprehensive AML program in compliance with the Bank Secrecy Act and USA
                  PATRIOT Act. Our program includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Customer Identification Program (CIP):</strong> Verification of customer identity using
                    government-issued documents
                  </li>
                  <li>
                    <strong>Customer Due Diligence (CDD):</strong> Understanding the nature and purpose of customer
                    relationships
                  </li>
                  <li>
                    <strong>Enhanced Due Diligence (EDD):</strong> Additional scrutiny for high-risk customers
                  </li>
                  <li>
                    <strong>Suspicious Activity Monitoring:</strong> Ongoing monitoring and reporting of suspicious
                    transactions
                  </li>
                  <li>
                    <strong>Record Keeping:</strong> Maintenance of required records for regulatory periods
                  </li>
                  <li>
                    <strong>Employee Training:</strong> Regular AML training for all personnel
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Know Your Customer (KYC) Requirements
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To comply with KYC regulations, we collect and verify the following information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="text-foreground font-semibold mb-2">Individual Accounts</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Full legal name</li>
                      <li>• Date of birth</li>
                      <li>• Residential address</li>
                      <li>• Social Security Number</li>
                      <li>• Government-issued ID</li>
                      <li>• Source of funds</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="text-foreground font-semibold mb-2">Business Accounts</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Legal business name</li>
                      <li>• EIN/Tax ID</li>
                      <li>• Business address</li>
                      <li>• Formation documents</li>
                      <li>• Beneficial ownership info</li>
                      <li>• Business purpose</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Data Protection and Privacy Compliance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We comply with applicable data protection regulations, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Gramm-Leach-Bliley Act (GLBA):</strong> Financial privacy and data security requirements
                  </li>
                  <li>
                    <strong>Regulation S-P:</strong> Privacy notices and safeguarding customer information
                  </li>
                  <li>
                    <strong>State Privacy Laws:</strong> CCPA, CPRA, and other state-specific requirements
                  </li>
                  <li>
                    <strong>International Standards:</strong> GDPR compliance for European customers
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Best Execution Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Apex Capital is committed to seeking best execution for all client transactions. We consider multiple
                  factors including price, speed, likelihood of execution, and total transaction cost. Our execution
                  venues and counterparties are regularly reviewed to ensure optimal execution quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Conflicts of Interest</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain policies to identify, disclose, and manage conflicts of interest, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Compensation arrangements and revenue sharing</li>
                  <li>Proprietary trading and principal transactions</li>
                  <li>Personal trading by employees</li>
                  <li>Relationships with third-party service providers</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Material conflicts are disclosed in our Form ADV Part 2A, available upon request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Cybersecurity and Information Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Our cybersecurity program includes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Risk Assessment:</strong> Regular evaluation of cybersecurity risks
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Multi-factor authentication and role-based access
                  </li>
                  <li>
                    <strong>Encryption:</strong> Data encryption in transit and at rest
                  </li>
                  <li>
                    <strong>Incident Response:</strong> Procedures for detecting and responding to breaches
                  </li>
                  <li>
                    <strong>Vendor Management:</strong> Due diligence on third-party service providers
                  </li>
                  <li>
                    <strong>Employee Training:</strong> Regular security awareness training
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Business Continuity and Disaster Recovery
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain a comprehensive business continuity plan to ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Continuation of critical business functions during disruptions</li>
                  <li>Protection of customer assets and data</li>
                  <li>Timely communication with customers during emergencies</li>
                  <li>Regular testing and updating of recovery procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Complaint Handling and Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain procedures for handling customer complaints and disputes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Prompt acknowledgment of complaints within 2 business days</li>
                  <li>Fair and thorough investigation of all issues</li>
                  <li>Written response within 30 days</li>
                  <li>Escalation procedures for unresolved matters</li>
                  <li>Access to arbitration through FINRA Dispute Resolution</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Regulatory Examinations and Audits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Apex Capital is subject to periodic examinations by regulatory authorities and undergoes annual
                  independent audits. We cooperate fully with all regulatory inquiries and maintain comprehensive
                  records as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Whistleblower Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We encourage reporting of potential violations of laws, regulations, or company policies. Our
                  whistleblower policy provides:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Confidential reporting channels</li>
                  <li>Protection against retaliation</li>
                  <li>Prompt investigation of reports</li>
                  <li>Appropriate remedial action</li>
                </ul>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Confidential Hotline:</strong> 1-800-APEX-ETHICS
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> compliance@apexcapital.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Regulatory Disclosures</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following documents are available upon request or can be accessed through regulatory databases:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Form ADV Part 1 & 2:</strong> Investment adviser registration and disclosure
                  </li>
                  <li>
                    <strong>Form CRS:</strong> Customer Relationship Summary
                  </li>
                  <li>
                    <strong>Privacy Notice:</strong> Information about our privacy practices
                  </li>
                  <li>
                    <strong>Business Continuity Plan Summary:</strong> Overview of our BCP
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Our Compliance Department</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For compliance-related questions, concerns, or to request regulatory documents:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-foreground mb-2">
                    <strong>Apex Capital Compliance Department</strong>
                  </p>
                  <p className="text-muted-foreground mb-1">Chief Compliance Officer: Sarah Johnson</p>
                  <p className="text-muted-foreground">Email: compliance@apexcapital.com</p>
                  <p className="text-muted-foreground">Phone: 1-800-APEX-CAP ext. 5000</p>
                  <p className="text-muted-foreground">Address: 123 Financial District, New York, NY 10004</p>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
                  </p>
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
