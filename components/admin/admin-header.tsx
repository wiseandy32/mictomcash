"use client"

import { Menu, Bell, Search } from "lucide-react"
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

export function AdminHeader() {
  const router = useRouter()

  const userData = {
    displayName: "Admin User",
    email: "admin@example.com",
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
    return userData?.email?.[0].toUpperCase() || "A"
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-6">
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-9" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                {userData?.photoURL && (
                  <AvatarImage src={userData.photoURL || "/placeholder.svg"} alt={userData.displayName || ""} />
                )}
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{userData?.displayName || "Admin"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
