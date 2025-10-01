"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Download, ArrowDownToLine, ArrowUpFromLine, TrendingUp, RefreshCw } from "lucide-react"
import { useState } from "react"

type Transaction = {
  id: string
  type: "deposit" | "withdrawal" | "investment" | "return" | "fee"
  description: string
  amount: number
  status: "completed" | "pending" | "failed"
  date: string
  method?: string
  reference?: string
}

const transactions: Transaction[] = [
  {
    id: "TXN001",
    type: "deposit",
    description: "Bitcoin Deposit",
    amount: 5000,
    status: "completed",
    date: "2024-09-30T10:30:00",
    method: "BTC",
    reference: "0x742d35...f0bEb",
  },
  {
    id: "TXN002",
    type: "investment",
    description: "Premium Plan Investment",
    amount: -15000,
    status: "completed",
    date: "2024-09-29T14:20:00",
    method: "Account Balance",
  },
  {
    id: "TXN003",
    type: "return",
    description: "Starter Plan Returns",
    amount: 681.89,
    status: "completed",
    date: "2024-09-27T09:15:00",
    method: "Investment Return",
  },
  {
    id: "TXN004",
    type: "withdrawal",
    description: "Ethereum Withdrawal",
    amount: -2500,
    status: "pending",
    date: "2024-09-26T16:45:00",
    method: "ETH",
    reference: "0x8a3f21...c9d4a",
  },
  {
    id: "TXN005",
    type: "deposit",
    description: "USDT Deposit",
    amount: 10000,
    status: "completed",
    date: "2024-09-25T11:00:00",
    method: "USDT",
    reference: "0x1b5e89...a2f3c",
  },
  {
    id: "TXN006",
    type: "fee",
    description: "Withdrawal Processing Fee",
    amount: -25,
    status: "completed",
    date: "2024-09-26T16:45:00",
    method: "Service Fee",
  },
  {
    id: "TXN007",
    type: "investment",
    description: "Professional Plan Investment",
    amount: -20000,
    status: "completed",
    date: "2024-09-20T13:30:00",
    method: "Account Balance",
  },
  {
    id: "TXN008",
    type: "return",
    description: "Premium Plan Monthly Return",
    amount: 750,
    status: "completed",
    date: "2024-09-15T10:00:00",
    method: "Investment Return",
  },
  {
    id: "TXN009",
    type: "deposit",
    description: "Bitcoin Deposit",
    amount: 8000,
    status: "completed",
    date: "2024-09-10T15:20:00",
    method: "BTC",
    reference: "0x9c4a12...e8f7b",
  },
  {
    id: "TXN010",
    type: "withdrawal",
    description: "Bitcoin Withdrawal",
    amount: -3000,
    status: "failed",
    date: "2024-09-08T12:00:00",
    method: "BTC",
    reference: "0x3d7e45...a1b2c",
  },
]

const typeIcons = {
  deposit: ArrowDownToLine,
  withdrawal: ArrowUpFromLine,
  investment: TrendingUp,
  return: RefreshCw,
  fee: RefreshCw,
}

const typeColors = {
  deposit: "text-emerald-600",
  withdrawal: "text-blue-600",
  investment: "text-purple-600",
  return: "text-emerald-600",
  fee: "text-orange-600",
}

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === "all" || tx.type === filterType
    const matchesStatus = filterStatus === "all" || tx.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const totalDeposits = transactions
    .filter((tx) => tx.type === "deposit" && tx.status === "completed")
    .reduce((sum, tx) => sum + tx.amount, 0)

  const totalWithdrawals = transactions
    .filter((tx) => tx.type === "withdrawal" && tx.status === "completed")
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0)

  const totalReturns = transactions
    .filter((tx) => tx.type === "return" && tx.status === "completed")
    .reduce((sum, tx) => sum + tx.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transaction History</h1>
          <p className="text-muted-foreground">View all your account transactions</p>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
            <ArrowDownToLine className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">${totalDeposits.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time deposits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Withdrawals</CardTitle>
            <ArrowUpFromLine className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${totalWithdrawals.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time withdrawals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">${totalReturns.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Investment returns</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="deposit">Deposits</SelectItem>
                <SelectItem value="withdrawal">Withdrawals</SelectItem>
                <SelectItem value="investment">Investments</SelectItem>
                <SelectItem value="return">Returns</SelectItem>
                <SelectItem value="fee">Fees</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transactions List */}
          <div className="space-y-3">
            {filteredTransactions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">No transactions found</p>
              </div>
            ) : (
              filteredTransactions.map((tx) => {
                const Icon = typeIcons[tx.type]
                const colorClass = typeColors[tx.type]
                return (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`rounded-full bg-muted p-2 ${colorClass}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{tx.description}</p>
                          <Badge
                            variant={
                              tx.status === "completed"
                                ? "default"
                                : tx.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {tx.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{tx.id}</span>
                          <span>•</span>
                          <span>{new Date(tx.date).toLocaleString()}</span>
                          {tx.method && (
                            <>
                              <span>•</span>
                              <span>{tx.method}</span>
                            </>
                          )}
                        </div>
                        {tx.reference && <p className="font-mono text-xs text-muted-foreground">{tx.reference}</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-semibold ${colorClass}`}>
                        {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
