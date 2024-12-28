interface LocationSelectorProps {
    label: string
    city: string
    airport: string
    onSwap?: () => void
  }
  
  export function LocationSelector({ label, city, airport, onSwap }: LocationSelectorProps) {
    return (
      <div className="relative p-4">
        <label className="text-sm text-gray-500 mb-2 block">{label}</label>
        <div>
          <div className="text-gray-900">{city}</div>
          <div className="text-sm text-gray-500">{airport}</div>
        </div>
        {onSwap && (
          <button 
            onClick={onSwap}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10L12 10M12 10L9.33333 7.33333M12 10L9.33333 12.6667M12 6L4 6M4 6L6.66667 3.33333M4 6L6.66667 8.66667" 
                stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    )
  }
  
  