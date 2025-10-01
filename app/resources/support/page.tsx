import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone, Clock } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Support Center</h1>
                <p className="text-xl text-muted-foreground">We're here to help you with any questions or concerns</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">Get help via email</p>
                  <a href="mailto:support@apexcapital.com" className="text-sm text-accent hover:text-accent/80">
                    support@apexcapital.com
                  </a>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-3">Chat with our team</p>
                  <button className="text-sm text-accent hover:text-accent/80">Start Chat</button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">Call us directly</p>
                  <a href="tel:+1-800-APEX-CAP" className="text-sm text-accent hover:text-accent/80">
                    +1 (800) APEX-CAP
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-semibold text-foreground">Support Hours</h2>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 6:00 PM EST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm mt-4">Premium and Elite members have access to 24/7 priority support.</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us more about your question or concern..." rows={6} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
