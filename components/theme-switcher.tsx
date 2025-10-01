"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark"
    console.log("[v0] Theme switching from", resolvedTheme, "to", newTheme)
    setTheme(newTheme)
  }

  return (
    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={handleToggle} aria-label="Toggle theme">
      {isDark ? (
        <Sun className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </Button>
  )
}
