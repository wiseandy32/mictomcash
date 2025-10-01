"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-foreground"
            >
              MitomCash
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#plans"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Investment Plans
            </a>
            <Link
              href="/resources/investment-guide"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/resources/support"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitcher />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/#plans"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment Plans
            </Link>
            <Link
              href="/resources/investment-guide"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/resources/support"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Theme
                </span>
                <ThemeSwitcher />
              </div>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground w-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
