import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Grow Your Wealth with Strategic Investments
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Choose from our carefully curated investment plans designed to
            maximize returns while managing risk. Start building your financial
            future today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#plans">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base bg-transparent"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
