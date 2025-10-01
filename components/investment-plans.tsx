import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Crown,
} from "lucide-react";
import Link from "next/link";

const investmentPlans = [
  {
    name: "Starter Plan",
    icon: Zap,
    returns: "8-12%",
    duration: "6 Months",
    minInvestment: "$1,000",
    features: [
      "Low-risk portfolio",
      "Monthly returns",
      "Flexible withdrawal",
      "24/7 support",
    ],
    popular: false,
    color: "from-blue-500/10 to-blue-500/5",
    slug: "starter",
  },
  {
    name: "Growth Plan",
    icon: TrendingUp,
    returns: "15-20%",
    duration: "12 Months",
    minInvestment: "$5,000",
    features: [
      "Balanced risk-reward",
      "Quarterly dividends",
      "Portfolio diversification",
      "Dedicated advisor",
    ],
    popular: true,
    color: "from-accent/20 to-accent/5",
    slug: "growth",
  },
  {
    name: "Premium Plan",
    icon: Crown,
    returns: "25-35%",
    duration: "24 Months",
    minInvestment: "$25,000",
    features: [
      "High-growth opportunities",
      "Monthly compounding",
      "Priority support",
      "Exclusive market access",
    ],
    popular: false,
    color: "from-amber-500/10 to-amber-500/5",
    slug: "premium",
  },
  {
    name: "Elite Plan",
    icon: Shield,
    returns: "40-50%",
    duration: "36 Months",
    minInvestment: "$100,000",
    features: [
      "Maximum returns",
      "Custom portfolio",
      "Personal wealth manager",
      "VIP benefits",
    ],
    popular: false,
    color: "from-purple-500/10 to-purple-500/5",
    slug: "elite",
  },
];

export function InvestmentPlans() {
  return (
    <section id="plans" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Investment Plans
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Select the plan that aligns with your financial goals and risk
            tolerance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {investmentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border-border hover:border-accent transition-all relative ${
                plan.popular ? "ring-2 ring-accent shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}
                >
                  <plan.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Expected Returns
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {plan.returns}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-lg font-bold text-foreground">
                        {plan.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Minimum Investment
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {plan.minInvestment}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/plans/${plan.slug}`}>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Invest Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All returns are estimates based on historical performance. Past
            performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
