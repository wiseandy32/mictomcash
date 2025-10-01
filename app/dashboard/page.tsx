import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
        <p className="text-muted-foreground">Here's an overview of your investment portfolio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-emerald-600">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +20.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$38,500.00</div>
            <p className="text-xs text-muted-foreground">Across 3 investment plans</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,731.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-emerald-600">+17.5%</span> ROI this year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,731.89</div>
            <p className="text-xs text-muted-foreground">Ready to invest or withdraw</p>
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
            {[
              {
                plan: "Premium Plan",
                amount: "$15,000",
                returns: "$2,250",
                progress: 75,
                status: "Active",
              },
              {
                plan: "Professional Plan",
                amount: "$20,000",
                returns: "$3,800",
                progress: 60,
                status: "Active",
              },
              {
                plan: "Starter Plan",
                amount: "$3,500",
                returns: "$681.89",
                progress: 90,
                status: "Maturing Soon",
              },
            ].map((investment, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="space-y-1">
                  <p className="font-medium">{investment.plan}</p>
                  <p className="text-sm text-muted-foreground">Invested: {investment.amount}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium text-emerald-600">+{investment.returns}</p>
                  <p className="text-sm text-muted-foreground">{investment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: "Deposit",
                method: "Bitcoin",
                amount: "+$5,000",
                date: "2 hours ago",
                icon: ArrowDownRight,
                color: "text-emerald-600",
              },
              {
                type: "Investment",
                method: "Premium Plan",
                amount: "-$15,000",
                date: "1 day ago",
                icon: ArrowUpRight,
                color: "text-blue-600",
              },
              {
                type: "Return",
                method: "Starter Plan",
                amount: "+$681.89",
                date: "3 days ago",
                icon: ArrowDownRight,
                color: "text-emerald-600",
              },
            ].map((transaction, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted p-2">
                    <transaction.icon className={`h-4 w-4 ${transaction.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-muted-foreground">{transaction.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.color}`}>{transaction.amount}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
