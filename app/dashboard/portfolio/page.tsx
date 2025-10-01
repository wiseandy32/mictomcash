"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Calendar, ArrowRight } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Link from "next/link"

const portfolioData = [
  { month: "Jan", value: 30000 },
  { month: "Feb", value: 32000 },
  { month: "Mar", value: 31500 },
  { month: "Apr", value: 35000 },
  { month: "May", value: 38000 },
  { month: "Jun", value: 42000 },
  { month: "Jul", value: 45231 },
]

const investments = [
  {
    id: 1,
    plan: "Premium Plan",
    amount: 15000,
    currentValue: 17250,
    returns: 2250,
    roi: 15,
    startDate: "2024-01-15",
    endDate: "2025-01-15",
    status: "Active",
    progress: 75,
  },
  {
    id: 2,
    plan: "Professional Plan",
    amount: 20000,
    currentValue: 23800,
    returns: 3800,
    roi: 19,
    startDate: "2024-03-01",
    endDate: "2025-03-01",
    status: "Active",
    progress: 60,
  },
  {
    id: 3,
    plan: "Starter Plan",
    amount: 3500,
    currentValue: 4181.89,
    returns: 681.89,
    roi: 19.5,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Maturing",
    progress: 90,
  },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground">Track your investments and returns</p>
      </div>

      {/* Portfolio Value Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Portfolio Value</CardTitle>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold">$45,231.89</span>
                <span className="inline-flex items-center text-sm font-medium text-emerald-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +50.77% ($15,231.89)
                </span>
              </div>
            </div>
            <Tabs defaultValue="7d" className="w-auto">
              <TabsList>
                <TabsTrigger value="7d">7D</TabsTrigger>
                <TabsTrigger value="1m">1M</TabsTrigger>
                <TabsTrigger value="3m">3M</TabsTrigger>
                <TabsTrigger value="1y">1Y</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={portfolioData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(16 185 129)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="rgb(16 185 129)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="rgb(16 185 129)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Investment Breakdown */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$38,500.00</div>
            <p className="text-xs text-muted-foreground">Principal amount</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">$6,731.89</div>
            <p className="text-xs text-muted-foreground">+17.5% average ROI</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across different tiers</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Investments */}
      <Card>
        <CardHeader>
          <CardTitle>Active Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={investment.id} className="rounded-lg border border-border p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{investment.plan}</h3>
                      <Badge variant={investment.status === "Active" ? "default" : "secondary"}>
                        {investment.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(investment.startDate).toLocaleDateString()} -{" "}
                      {new Date(investment.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/portfolio/${investment.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Invested</p>
                    <p className="text-lg font-semibold">${investment.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Value</p>
                    <p className="text-lg font-semibold">${investment.currentValue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Returns</p>
                    <p className="text-lg font-semibold text-emerald-600">+${investment.returns.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="text-lg font-semibold text-emerald-600">+{investment.roi}%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{investment.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-primary transition-all" style={{ width: `${investment.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/plans">Start New Investment</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/crypto">Deposit Funds</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/transactions">View All Transactions</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
