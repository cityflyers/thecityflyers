interface DateSelectorProps {
    label: string
    defaultDate?: string
    defaultMonth?: string
    defaultYear?: string
    defaultDay?: string
    placeholder?: string
    isDisabled?: boolean
    className?: string
  }
  
  export function DateSelector({ 
    label, 
    defaultDate, 
    defaultMonth, 
    defaultYear, 
    defaultDay,
    placeholder,
    isDisabled,
    className = ""
  }: DateSelectorProps) {
    return (
      <div className={`border rounded-lg ${className}`}>
        <label className="text-sm text-gray-500 mb-2 block p-4 pb-0">{label}</label>
        <div className="p-4 pt-0">
          {defaultDate ? (
            <>
              <div className="text-gray-900">{`${defaultDate} ${defaultMonth} ${defaultYear}`}</div>
              <div className="text-sm text-gray-500">{defaultDay}</div>
            </>
          ) : (
            <div className="text-gray-400">{placeholder || "Select date"}</div>
          )}
        </div>
      </div>
    )
  }
  
  