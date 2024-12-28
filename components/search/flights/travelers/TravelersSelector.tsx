import { ChevronDown } from 'lucide-react'

interface TravelersSelectorProps {
  defaultValue: string
  defaultClass: string
}

export function TravelersSelector({ defaultValue, defaultClass }: TravelersSelectorProps) {
  return (
    <div>
      <label className="text-sm text-gray-500 mb-2 block p-4 pb-0">Travelers & Booking Class</label>
      <button className="w-full border rounded-lg p-4 flex justify-between items-center">
        <div>
          <div className="text-gray-900">{defaultValue}</div>
          <div className="text-sm text-gray-500">{defaultClass}</div>
        </div>
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </button>
    </div>
  )
}

