export function FareTypeSelector() {
    return (
      <div>
        <label className="text-sm text-gray-500 mb-2 block">Fare Type:</label>
        <div className="flex gap-8">
          {[
            { id: 'regular', label: 'Regular Fares' },
            { id: 'student', label: 'Student Fares' },
            { id: 'seaman', label: 'Seaman Fares' }
          ].map(({ id, label }) => (
            <label key={id} className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-4 h-4">
                <input
                  type="radio"
                  name="fareType"
                  defaultChecked={id === 'regular'}
                  className="appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#1a1f2e]"
                />
                <div className="absolute inset-0 m-1 rounded-full bg-[#1a1f2e] opacity-0 peer-checked:opacity-100" />
              </div>
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }
  
  