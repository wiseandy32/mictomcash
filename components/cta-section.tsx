import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of investors who are already growing their wealth
            with our proven investment strategies. Get started today with as
            little as $1,000.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
              >
                Open Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resources/support">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base bg-transparent"
              >
                Contact Advisor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
