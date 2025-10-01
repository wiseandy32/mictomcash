import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Download, TrendingUp, TrendingDown } from "lucide-react"

const investments = [
  {
    id: "INV-001",
    user: "John Smith",
    plan: "Growth Plan",
    amount: "$25,000",
    returns: "$2,150",
    roi: "+8.6%",
    status: "active",
    startDate: "2024-01-15",
    trend: "up",
  },
  {
    id: "INV-002",
    user: "Sarah Johnson",
    plan: "Premium Plan",
    amount: "$50,000",
    returns: "$5,200",
    roi: "+10.4%",
    status: "active",
    startDate: "2024-02-20",
    trend: "up",
  },
  {
    id: "INV-003",
    user: "Michael Chen",
    plan: "Starter Plan",
    amount: "$10,000",
    returns: "$650",
    roi: "+6.5%",
    status: "active",
    startDate: "2024-03-10",
    trend: "up",
  },
  {
    id: "INV-004",
    user: "Emily Davis",
    plan: "Growth Plan",
    amount: "$35,000",
    returns: "$2,800",
    roi: "+8.0%",
    status: "active",
    startDate: "2024-01-28",
    trend: "up",
  },
  {
    id: "INV-005",
    user: "Robert Wilson",
    plan: "Premium Plan",
    amount: "$75,000",
    returns: "$8,250",
    roi: "+11.0%",
    status: "completed",
    startDate: "2023-11-05",
    trend: "up",
  },
]

const transactions = [
  {
    id: "TXN-001",
    type: "deposit",
    user: "John Smith",
    amount: "$5,000",
    status: "completed",
    date: "2024-03-28",
  },
  {
    id: "TXN-002",
    type: "withdrawal",
    user: "Sarah Johnson",
    amount: "$2,500",
    status: "pending",
    date: "2024-03-28",
  },
  {
    id: "TXN-003",
    type: "deposit",
    user: "Michael Chen",
    amount: "$10,000",
    status: "completed",
    date: "2024-03-27",
  },
  {
    id: "TXN-004",
    type: "withdrawal",
    user: "Emily Davis",
    amount: "$1,200",
    status: "completed",
    date: "2024-03-27",
  },
]

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investment Management</h1>
          <p className="text-muted-foreground">Monitor and manage all investments and transactions</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$195,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-secondary">+15.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$19,050</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-secondary">+9.8%</span> average ROI
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">1 completed this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="investments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="investments" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Investments</CardTitle>
                  <CardDescription>Complete list of all investment portfolios</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Search investments..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Returns</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{investment.id}</TableCell>
                      <TableCell>{investment.user}</TableCell>
                      <TableCell>{investment.plan}</TableCell>
                      <TableCell>{investment.amount}</TableCell>
                      <TableCell>{investment.returns}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {investment.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-secondary" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-destructive" />
                          )}
                          <span className={investment.trend === "up" ? "text-secondary" : "text-destructive"}>
                            {investment.roi}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={investment.status === "active" ? "default" : "secondary"}>
                          {investment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{investment.startDate}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Investment</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Pause Investment</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Close Investment</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>All deposits and withdrawals</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Search transactions..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.type === "deposit" ? "default" : "outline"}>
                          {transaction.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.user}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "default"
                              : transaction.status === "pending"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            {transaction.status === "pending" && (
                              <>
                                <DropdownMenuItem>Approve</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
