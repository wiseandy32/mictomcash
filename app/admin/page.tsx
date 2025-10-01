import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, DollarSign, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Active Investments",
    value: "$1.2M",
    change: "+8.2%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Total Revenue",
    value: "$45.2K",
    change: "+23.1%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Platform Activity",
    value: "89.3%",
    change: "+4.3%",
    icon: Activity,
    trend: "up",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your platform today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-secondary">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">New investment created</p>
                    <p className="text-sm text-muted-foreground">User invested $5,000 in Growth Plan</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2m ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New Users Today</span>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pending Approvals</span>
                <span className="text-sm font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Sessions</span>
                <span className="text-sm font-medium">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Support Tickets</span>
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
