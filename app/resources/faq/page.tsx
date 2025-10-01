import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our investment platform and services
              </p>
            </div>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
