"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export function UserHeader() {
  const router = useRouter()

  const userData = {
    displayName: "John Doe",
    email: "john.doe@example.com",
    photoURL: null,
  }

  const getInitials = () => {
    if (userData?.displayName) {
      return userData.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }
    return userData?.email?.[0].toUpperCase() || "U"
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4 md:ml-0 ml-12">
        <form className="flex-1 md:max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions, investments..."
              className="w-full bg-background pl-8"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Investment Matured</p>
                <p className="text-xs text-muted-foreground">
                  Your Premium Plan investment has matured. Returns: $2,450
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Deposit Confirmed</p>
                <p className="text-xs text-muted-foreground">Your Bitcoin deposit of 0.05 BTC has been confirmed</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                {userData?.photoURL && (
                  <AvatarImage src={userData.photoURL || "/placeholder.svg"} alt={userData.displayName || ""} />
                )}
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{userData?.displayName || userData?.email}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
