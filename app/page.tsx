import Image from "next/image";

import { TabBar } from "@/components/tabbar/tab-bar"
import { FlightSearch } from "@/components/search/flight-search"

export default function Home() {
  return (
    <div className="min-h-screen lg:ml-16 xl:ml-64">
      <TabBar />
      <FlightSearch />
    </div>
  )
}
