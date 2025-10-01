import type React from "react"
import { UserSidebar } from "@/components/dashboard/user-sidebar"
import { UserHeader } from "@/components/dashboard/user-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <UserSidebar />
      <div className="flex flex-1 flex-col">
        <UserHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
