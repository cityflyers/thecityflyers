"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "@/components/sidebar/Sidebar"
import Header from "@/components/header/Header"

interface LayoutClientWrapperProps {
  children: ReactNode
}

export function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  // State controlling the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // This function toggles the sidebar from either mobile or desktop triggers
  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  // For completeness, you can also provide a handleCloseSidebar if needed
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="relative flex min-h-screen">
      {/* The single Sidebar instance */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={handleCloseSidebar}
      />

      {/* The main area that shifts over if the sidebar is open */}
      <div
        className={`flex-1 transition-all duration-300 
          ${isSidebarOpen ? "lg:ml-64" : "lg:ml-16"}
        `}
      >
        {/* The header is here → pass the toggle callback */}
        <Header onToggleSidebar={handleToggleSidebar} />

        {/* The page content or children */}
        <main className="pt-16">{children}</main>
      </div>
    </div>
  )
}
