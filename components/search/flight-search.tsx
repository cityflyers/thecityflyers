"use client"

import * as React from "react"
import { Calendar, ChevronDown, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function FlightSearch() {
  const [tripType, setTripType] = React.useState("oneWay")
  const [departureDate, setDepartureDate] = React.useState<Date>()
  const [returnDate, setReturnDate] = React.useState<Date>()

  return (
    <div className="grid gap-6 p-6">
      <RadioGroup
        defaultValue="oneWay"
        onValueChange={setTripType}
        className="flex flex-wrap gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneWay" id="oneWay" />
          <label htmlFor="oneWay" className="cursor-pointer">
            One Way
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="roundTrip" id="roundTrip" />
          <label htmlFor="roundTrip" className="cursor-pointer">
            Round Trip
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multiCity" id="multiCity" />
          <label htmlFor="multiCity" className="cursor-pointer">
            Multi City
          </label>
        </div>
      </RadioGroup>

      <div className="grid gap-4 lg:grid-cols-[1fr,1fr,auto,auto,auto]">
        <div className="grid gap-2">
          <label className="text-sm font-medium">From</label>
          <Button variant="outline" className="h-14 justify-between">
            <div className="grid gap-0.5 text-left">
              <span className="font-medium">Dhaka</span>
              <span className="text-xs text-muted-foreground">
                Hazrat Shahjalal International Airport
              </span>
            </div>
            <RotateCcw className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">To</label>
          <Button variant="outline" className="h-14 justify-between">
            <div className="grid gap-0.5 text-left">
              <span className="font-medium">Chittagong</span>
              <span className="text-xs text-muted-foreground">
                Shah Amanat International
              </span>
            </div>
            <RotateCcw className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Departure</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-14 justify-start text-left font-normal",
                  !departureDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {departureDate ? (
                  format(departureDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {tripType === "roundTrip" && (
          <div className="grid gap-2">
            <label className="text-sm font-medium">Return</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 justify-start text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {returnDate ? (
                    format(returnDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
        <div className="grid gap-2">
          <label className="text-sm font-medium">Travelers & Class</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-14 justify-between">
                <div className="grid gap-0.5 text-left">
                  <span className="font-medium">1 Traveler</span>
                  <span className="text-xs text-muted-foreground">Economy</span>
                </div>
                <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="font-medium">Cabin Class</div>
                  <RadioGroup defaultValue="economy">
                    {["Economy", "Business", "First"].map((option) => (
                      <div
                        key={option}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={option.toLowerCase()}
                          id={option.toLowerCase()}
                        />
                        <label
                          htmlFor={option.toLowerCase()}
                          className="cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <RadioGroup defaultValue="regular" className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="regular" id="regular" />
          <label htmlFor="regular" className="cursor-pointer">
            Regular Fares
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="student" id="student" />
          <label htmlFor="student" className="cursor-pointer">
            Student Fares
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="seaman" id="seaman" />
          <label htmlFor="seaman" className="cursor-pointer">
            Seaman Fares
          </label>
        </div>
      </RadioGroup>

      <Button className="w-full sm:w-auto" size="lg">
        Search
      </Button>
    </div>
  )
}