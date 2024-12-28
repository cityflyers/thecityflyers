interface TravelTypeSelectorProps {
    selected: 'oneWay' | 'roundTrip' | 'multiCity'
    onChange: (type: 'oneWay' | 'roundTrip' | 'multiCity') => void
  }
  
  export function TravelTypeSelector({ selected, onChange }: TravelTypeSelectorProps) {
    return (
      <div className="flex items-center gap-8">
        {[
          { id: 'oneWay', label: 'One Way' },
          { id: 'roundTrip', label: 'Round Trip' },
          { id: 'multiCity', label: 'Multi City' }
        ].map(({ id, label }) => (
          <label key={id} className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-4 h-4">
              <input
                type="radio"
                name="tripType"
                checked={selected === id}
                onChange={() => onChange(id as any)}
                className="appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#1a1f2e]"
              />
              {selected === id && (
                <div className="absolute inset-0 m-1 rounded-full bg-[#1a1f2e]" />
              )}
            </div>
            <span className="text-sm text-gray-600">{label}</span>
          </label>
        ))}
      </div>
    )
  }
  
  