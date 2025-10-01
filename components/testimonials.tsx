import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Investor",
      image: "/professional-woman-investor.png",
      content:
        "I've been investing with this platform for over 2 years and the returns have been consistently impressive. The transparency and ease of use make it my go-to investment choice.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      image: "/professional-asian-man-investor.jpg",
      content:
        "The Premium Plan has exceeded my expectations. The 25% returns are real and the withdrawal process is seamless. Highly recommend for serious investors.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      image: "/professional-latina-woman-investor.jpg",
      content:
        "As a financial advisor, I'm impressed by the platform's security measures and regulatory compliance. I confidently recommend it to my clients.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">What Our Investors Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied investors who trust us with their financial future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
