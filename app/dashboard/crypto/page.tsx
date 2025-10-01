"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, QrCode, ArrowDownToLine, ArrowUpFromLine, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const cryptoOptions = [
  { value: "btc", label: "Bitcoin (BTC)", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" },
  { value: "eth", label: "Ethereum (ETH)", address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb" },
  { value: "usdt", label: "Tether (USDT)", address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb" },
  { value: "bnb", label: "Binance Coin (BNB)", address: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2" },
]

export default function CryptoPage() {
  const [selectedCrypto, setSelectedCrypto] = useState("btc")
  const [copied, setCopied] = useState(false)
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const currentAddress = cryptoOptions.find((c) => c.value === selectedCrypto)?.address || ""

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Deposit & Withdraw</h1>
        <p className="text-muted-foreground">Manage your funds using cryptocurrency</p>
      </div>

      {/* Balance Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle>Available Balance</CardTitle>
          <CardDescription>Ready to invest or withdraw</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$6,731.89</div>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: Just now</p>
        </CardContent>
      </Card>

      {/* Deposit & Withdraw Tabs */}
      <Tabs defaultValue="deposit" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit" className="gap-2">
            <ArrowDownToLine className="h-4 w-4" />
            Deposit
          </TabsTrigger>
          <TabsTrigger value="withdraw" className="gap-2">
            <ArrowUpFromLine className="h-4 w-4" />
            Withdraw
          </TabsTrigger>
        </TabsList>

        {/* Deposit Tab */}
        <TabsContent value="deposit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Deposit Cryptocurrency</CardTitle>
              <CardDescription>Send crypto to your wallet address to add funds to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Select Cryptocurrency */}
              <div className="space-y-2">
                <Label htmlFor="crypto-select">Select Cryptocurrency</Label>
                <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                  <SelectTrigger id="crypto-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoOptions.map((crypto) => (
                      <SelectItem key={crypto.value} value={crypto.value}>
                        {crypto.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Wallet Address */}
              <div className="space-y-2">
                <Label>Your Deposit Address</Label>
                <div className="flex gap-2">
                  <Input value={currentAddress} readOnly className="font-mono text-sm" />
                  <Button variant="outline" size="icon" onClick={copyToClipboard}>
                    {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Send only {cryptoOptions.find((c) => c.value === selectedCrypto)?.label} to this address
                </p>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-muted/30 p-6">
                <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-white">
                  <QrCode className="h-32 w-32 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Scan QR code to get deposit address</p>
              </div>

              {/* Amount Input (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="deposit-amount">Expected Amount (Optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <Input
                    id="deposit-amount"
                    type="number"
                    placeholder="0.00"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="pl-7"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter the amount you plan to deposit for tracking purposes
                </p>
              </div>

              {/* Important Notes */}
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
                <h4 className="mb-2 font-semibold text-amber-600 dark:text-amber-500">Important Notes</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Minimum deposit: $100 USD equivalent</li>
                  <li>• Deposits are credited after 3 network confirmations</li>
                  <li>• Processing time: 10-30 minutes depending on network</li>
                  <li>• Do not send tokens from other networks to this address</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Withdraw Tab */}
        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Cryptocurrency</CardTitle>
              <CardDescription>Send funds from your account to your personal wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Select Cryptocurrency */}
              <div className="space-y-2">
                <Label htmlFor="withdraw-crypto">Select Cryptocurrency</Label>
                <Select defaultValue="btc">
                  <SelectTrigger id="withdraw-crypto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoOptions.map((crypto) => (
                      <SelectItem key={crypto.value} value={crypto.value}>
                        {crypto.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Withdrawal Address */}
              <div className="space-y-2">
                <Label htmlFor="withdraw-address">Recipient Wallet Address</Label>
                <Input id="withdraw-address" placeholder="Enter wallet address" className="font-mono text-sm" />
                <p className="text-xs text-muted-foreground">
                  Double-check the address. Transactions cannot be reversed.
                </p>
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="withdraw-amount">Amount</Label>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-xs"
                    onClick={() => setWithdrawAmount("6731.89")}
                  >
                    Max: $6,731.89
                  </Button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <Input
                    id="withdraw-amount"
                    type="number"
                    placeholder="0.00"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="pl-7"
                  />
                </div>
              </div>

              {/* Fee Information */}
              <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Withdrawal Amount</span>
                  <span className="font-medium">${withdrawAmount || "0.00"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Network Fee</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Processing Fee (1%)</span>
                  <span className="font-medium">
                    ${withdrawAmount ? (Number.parseFloat(withdrawAmount) * 0.01).toFixed(2) : "0.00"}
                  </span>
                </div>
                <div className="border-t border-border pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>You will receive</span>
                    <span className="text-emerald-600">
                      $
                      {withdrawAmount
                        ? (Number.parseFloat(withdrawAmount) - 2.5 - Number.parseFloat(withdrawAmount) * 0.01).toFixed(
                            2,
                          )
                        : "0.00"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
                <h4 className="mb-2 font-semibold text-amber-600 dark:text-amber-500">Withdrawal Requirements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Minimum withdrawal: $50 USD equivalent</li>
                  <li>• Processing time: 1-24 hours</li>
                  <li>• Two-factor authentication required for withdrawals</li>
                  <li>• Daily withdrawal limit: $50,000</li>
                </ul>
              </div>

              <Button className="w-full" size="lg">
                Confirm Withdrawal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Crypto Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Crypto Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: "Deposit",
                crypto: "Bitcoin",
                amount: "$5,000.00",
                status: "Completed",
                date: "2 hours ago",
                txHash: "0x742d35...f0bEb",
              },
              {
                type: "Withdrawal",
                crypto: "Ethereum",
                amount: "$2,500.00",
                status: "Processing",
                date: "1 day ago",
                txHash: "0x8a3f21...c9d4a",
              },
              {
                type: "Deposit",
                crypto: "USDT",
                amount: "$10,000.00",
                status: "Completed",
                date: "3 days ago",
                txHash: "0x1b5e89...a2f3c",
              },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{tx.type}</p>
                    <Badge variant={tx.status === "Completed" ? "default" : "secondary"}>{tx.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tx.crypto} • {tx.date}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">{tx.txHash}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${tx.type === "Deposit" ? "text-emerald-600" : "text-blue-600"}`}>
                    {tx.type === "Deposit" ? "+" : "-"}
                    {tx.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
