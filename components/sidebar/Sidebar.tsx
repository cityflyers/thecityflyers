"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAVIGATION } from "@/lib/constants"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Ensure sidebar starts collapsed on mount
    setIsExpanded(false)
  }, [])

  const sidebarContent = (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-[60px] items-center px-6 lg:px-4">
        {/* Brand or Title */}
        <span
          className={cn(
            "text-lg font-semibold",
            isExpanded ? "lg:block" : "lg:hidden"
          )}
        >
          Travel
        </span>
      </div>

      {/* Desktop expand/collapse button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hidden lg:flex items-center justify-center w-full h-12 hover:bg-accent"
      >
        {isExpanded ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>

      {/* Navigation items */}
      <nav className="grid gap-1 px-2">
        {NAVIGATION.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                isActive ? "bg-accent" : "transparent",
                !isExpanded && "lg:justify-center lg:px-2"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className={cn("flex-1", !isExpanded && "lg:hidden")}>
                {item.title}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          // hidden on mobile, fixed on large screens
          "hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:border-r",
          // Expand or collapse width on large screens
          isExpanded ? "lg:w-64" : "lg:w-16"
        )}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        {/* Hide on large screens so it never duplicates */}
        <SheetContent
          side="left"
          className="w-72 p-0 lg:hidden"
          title="Navigation Menu"
        >
          {sidebarContent}
        </SheetContent>
      </Sheet>
    </>
  )
}