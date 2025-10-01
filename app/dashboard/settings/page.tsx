"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Shield, Smartphone, Globe, Lock, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and security</p>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details and profile picture</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline">Change Photo</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB</p>
            </div>
          </div>

          <Separator />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="firstName" defaultValue="John" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="lastName" defaultValue="Doe" className="pl-9" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-9" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-9" />
            </div>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Security Section */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label>Two-Factor Authentication</Label>
                  <Badge variant={twoFactorEnabled ? "default" : "secondary"}>
                    {twoFactorEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            {twoFactorEnabled && (
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <Smartphone className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Authenticator App Connected</p>
                    <p className="text-xs text-muted-foreground">Your account is protected with Google Authenticator</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Change Password</h3>
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="currentPassword" type="password" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="newPassword" type="password" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="confirmPassword" type="password" className="pl-9" />
              </div>
            </div>
            <Button>Update Password</Button>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Active Sessions</h3>
            <div className="space-y-3">
              {[
                {
                  device: "Chrome on MacBook Pro",
                  location: "San Francisco, CA",
                  current: true,
                  lastActive: "Active now",
                },
                {
                  device: "Safari on iPhone 15",
                  location: "San Francisco, CA",
                  current: false,
                  lastActive: "2 hours ago",
                },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-muted p-2">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {session.device}
                        {session.current && <Badge className="ml-2">Current</Badge>}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {session.location} • {session.lastActive}
                      </p>
                    </div>
                  </div>
                  {!session.current && (
                    <Button variant="ghost" size="sm">
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Label>Email Notifications</Label>
                </div>
                <p className="text-sm text-muted-foreground">Receive updates about your investments via email</p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <Label>SMS Notifications</Label>
                </div>
                <p className="text-sm text-muted-foreground">Get important alerts via text message</p>
              </div>
              <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Notification Preferences</h3>
              <div className="space-y-3">
                {[
                  { label: "Investment maturity alerts", checked: true },
                  { label: "Deposit confirmations", checked: true },
                  { label: "Withdrawal updates", checked: true },
                  { label: "Monthly portfolio reports", checked: false },
                  { label: "Marketing and promotions", checked: false },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <Label className="font-normal">{pref.label}</Label>
                    <Switch defaultChecked={pref.checked} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Status */}
      <Card>
        <CardHeader>
          <CardTitle>Account Verification</CardTitle>
          <CardDescription>Your account verification status and limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-2">
                <Shield className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium">Verified Account</p>
                <p className="text-sm text-muted-foreground">Full access to all features</p>
              </div>
            </div>
            <Badge className="bg-emerald-500">Level 2</Badge>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Current Limits</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-border p-3">
                <p className="text-sm text-muted-foreground">Daily Deposit Limit</p>
                <p className="text-lg font-semibold">$100,000</p>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="text-sm text-muted-foreground">Daily Withdrawal Limit</p>
                <p className="text-lg font-semibold">$50,000</p>
              </div>
            </div>
          </div>

          <Button variant="outline">Upgrade Verification Level</Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions for your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-destructive" />
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Once you delete your account, there is no going back. Please be certain. All your investments must be
                withdrawn before deletion.
              </p>
              <Button variant="destructive" size="sm">
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
