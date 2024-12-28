import Image from "next/image";
import { FlightSearchForm } from "@/components/search/flights/flight-search-form";

export default function Home() {
  return (
    <div className="min-h-screen lg:ml-16 xl:ml-64">
      <FlightSearchForm />
    </div>
  );
}