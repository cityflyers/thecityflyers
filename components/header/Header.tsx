"use client"

import { useState, useEffect } from "react"
import { Bell, Globe, Moon, Search, Sun, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTheme } from "next-themes"
import { LANGUAGES, NOTIFICATIONS } from "@/lib/constants"
import { Sidebar } from "@/components/sidebar/Sidebar"

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  const SearchInput = () => (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search flights, hotels, visa services..."
        className="w-full pl-10 bg-background text-foreground placeholder:text-muted-foreground"
        spellCheck={false}
      />
    </div>
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="h-16 px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowMobileSidebar(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowMobileSearch((s) => !s)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <h1 className="text-xl font-bold text-foreground">Travel</h1>

          <div className="hidden lg:flex flex-1 max-w-2xl">
            <SearchInput />
          </div>

          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-0 bg-popover" align="end">
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

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-popover" align="end">
                <div className="grid gap-4">
                  <h3 className="font-semibold text-popover-foreground">Notifications</h3>
                  <div className="grid gap-2">
                    {NOTIFICATIONS.map((notification) => (
                      <div
                        key={notification.id}
                        className="grid gap-1 p-2 hover:bg-muted rounded-lg cursor-pointer"
                      >
                        <div className="font-medium text-popover-foreground">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {notification.message}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {notification.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 bg-popover" align="end">
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

        {showMobileSearch && (
          <div className="p-4 border-t border-border lg:hidden">
            <SearchInput />
          </div>
        )}
      </header>

      <Sidebar 
        isOpen={showMobileSidebar} 
        onClose={() => setShowMobileSidebar(false)} 
      />
    </>
  )
}

