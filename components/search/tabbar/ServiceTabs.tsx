  "use client"

import * as React from "react"
import { Plane, Hotel, Stamp, Smartphone } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  {
    id: "flights",
    label: "Flight",
    icon: Plane,
  },
  {
    id: "hotels",
    label: "Hotel",
    icon: Hotel,
  },
  {
    id: "visa",
    label: "Visa",
    icon: Stamp,
  },
  {
    id: "esim",
    label: "eSim",
    icon: Smartphone,
  },
]

interface TabBarProps {
  className?: string
}

export function ServiceTabs({ className }: TabBarProps) {
  return (
    <Tabs defaultValue="flights" className={cn("w-full", className)}>
      <TabsList className="h-14 w-full justify-start gap-4 rounded-none border-b bg-background p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="relative h-14 rounded-none border-b-2 border-transparent px-4 pb-3 pt-3 font-medium data-[state=active]:border-primary"
          >
            <div className="flex items-center gap-2">
              <tab.icon className="h-5 w-5" />
              <span className="hidden sm:inline-block">{tab.label}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
