import { Shield, Clock, Award, HeadphonesIcon, Lock, BarChart3 } from "lucide-react"

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "Your investments are protected with bank-level security and full regulatory compliance.",
    },
    {
      icon: Clock,
      title: "Quick Withdrawals",
      description: "Access your returns instantly with our fast and reliable withdrawal system.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 5 years of consistent returns and thousands of satisfied investors worldwide.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you with any questions.",
    },
    {
      icon: Lock,
      title: "Transparent Operations",
      description: "Full transparency in all operations with detailed reporting and real-time updates.",
    },
    {
      icon: BarChart3,
      title: "Diversified Portfolio",
      description: "Invest across multiple asset classes to minimize risk and maximize returns.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We provide the most reliable and profitable investment platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
