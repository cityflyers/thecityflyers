"use client"

import { useState } from "react"
import { ServiceTabs } from "@/components/search/tabbar/ServiceTabs"
import { TravelTypeSelector } from "@/components/search/flights/travelers/TravelTypeSelector"
import { LocationSelector } from "@/components/search/flights/location/LocationSelector"
import { DateSelector } from "@/components/search/flights/date/DateSelector"
import { TravelersSelector } from "@/components/search/flights/travelers/TravelersSelector"
import { FareTypeSelector } from "@/components/search/flights/fare/FareTypeSelector"
import { SearchButton } from "@/components/search/flights/searchButton/SearchButton"

export function FlightSearchForm() {
  const [travelType, setTravelType] = useState<"oneWay" | "roundTrip" | "multiCity">("oneWay")
  const [locations, setLocations] = useState({
    from: { city: "Dhaka", airport: "Hazrat Shahjalal International Airport" },
    to: { city: "Chittagong", airport: "Shah Amanat International" },
  })

  const handleSwapLocations = () => {
    setLocations((prev) => ({
      from: prev.to,
      to: prev.from,
    }))
  }

  return (
    <div className="w-full">
      {/* Optional padding for layout */}
      <div className="p-6">
        {/* Make sure ServiceTabs is full width */}
        <ServiceTabs className="w-full" />

        <div className="mt-6 space-y-6 w-full">
          <TravelTypeSelector 
            selected={travelType} 
            onChange={setTravelType} 
          />

          <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-[2fr,2fr,1fr]">
            <div className="relative overflow-hidden rounded-lg border">
              <LocationSelector
                label="From"
                city={locations.from.city}
                airport={locations.from.airport}
                onSwap={handleSwapLocations}
              />
              <div className="absolute left-0 right-0 top-1/2 -translate-y-px border-t" />
              <LocationSelector
                label="To"
                city={locations.to.city}
                airport={locations.to.airport}
              />
            </div>

            <div className="flex">
              <DateSelector
                label="Departure"
                defaultDate="13"
                defaultMonth="Dec"
                defaultYear="24"
                defaultDay="Friday"
                className="flex-1 rounded-r-none border-r-0"
              />
              <DateSelector
                label="Return"
                placeholder="Tap to book return ticket"
                isDisabled={travelType === "oneWay"}
                className="flex-1 rounded-l-none"
              />
            </div>

            <TravelersSelector
              defaultValue="1 Traveler"
              defaultClass="Economy"
            />
          </div>

          <FareTypeSelector />

          <SearchButton />
        </div>
      </div>
    </div>
  )
}

