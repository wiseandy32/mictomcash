export function StatsSection() {
  const stats = [
    { value: "$2.5B+", label: "Total Invested" },
    { value: "50K+", label: "Active Investors" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Customer Support" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
