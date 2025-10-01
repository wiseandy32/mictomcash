import { UserPlus, Search, TrendingUp, Wallet } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up in minutes with our simple registration process and verify your identity securely.",
    },
    {
      icon: Search,
      title: "Choose Investment",
      description: "Browse our curated investment plans and select the one that matches your financial goals.",
    },
    {
      icon: Wallet,
      title: "Fund Your Account",
      description: "Deposit funds securely using multiple payment methods including bank transfer and crypto.",
    },
    {
      icon: TrendingUp,
      title: "Watch It Grow",
      description: "Monitor your investment performance in real-time and withdraw returns at maturity.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start your investment journey in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden lg:block -z-10">
                  {index === steps.length - 1 && <div className="absolute inset-0 bg-background" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
