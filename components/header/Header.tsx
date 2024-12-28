"use client"

import { useState, useEffect } from "react"
import { Bell, Globe, Moon, Search, Sun, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTheme } from "next-themes"
import { LANGUAGES, NOTIFICATIONS } from "@/lib/constants"

interface HeaderProps {
  onToggleSidebar?: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const { resolvedTheme, setTheme } = useTheme()

  // Wait until client hydration to render
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const SearchInput = () => (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search flights, hotels, visa services..."
        className="w-full bg-background pl-10 text-foreground placeholder:text-muted-foreground"
      />
    </div>
  )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
        <div className="flex h-16 items-center justify-between gap-4 px-4">
          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* The hamburger button calls onToggleSidebar if provided */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (onToggleSidebar) {
                  onToggleSidebar()
                }
              }}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Mobile search toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileSearch((prev) => !prev)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <h1 className="text-xl font-bold text-foreground">Travel</h1>

          {/* Desktop search bar */}
          <div className="hidden max-w-2xl flex-1 lg:flex">
            <SearchInput />
          </div>

          {/* Right-side icons (language, notifications, theme, user) */}
          <div className="flex items-center gap-2">
            {/* Language popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 bg-popover p-0">
                <div className="grid">
                  {LANGUAGES.map((lang) => (
                    <Button
                      key={lang.code}
                      variant="ghost"
                      className="justify-start font-normal text-popover-foreground"
                    >
                      <span className="w-6">{lang.code}</span>
                      <span>{lang.native}</span>
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Notifications popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {/* Example: a red dot */}
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80 bg-popover">
                <div className="grid gap-4">
                  <h3 className="font-semibold text-popover-foreground">
                    Notifications
                  </h3>
                  <div className="grid gap-2">
                    {NOTIFICATIONS.map((note) => (
                      <div
                        key={note.id}
                        className="grid cursor-pointer gap-1 rounded-lg p-2 hover:bg-muted"
                      >
                        <div className="font-medium text-popover-foreground">
                          {note.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {note.message}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {note.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* User popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 bg-popover">
                <div className="grid gap-2">
                  <Button variant="ghost" className="justify-start text-popover-foreground">
                    Sign In
                  </Button>
                  <Button variant="ghost" className="justify-start text-popover-foreground">
                    Register
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Mobile expanded search input */}
        {showMobileSearch && (
          <div className="border-border border-t p-4 lg:hidden">
            <SearchInput />
          </div>
        )}
      </header>
    </>
  )
}

