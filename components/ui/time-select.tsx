"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TimeSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

export function TimeSelect({
  className,
  value,
  onValueChange,
  ...props
}: TimeSelectProps) {
  const times = [
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
    "1:00 AM"
  ]

  return (
    <div 
      className={cn(
        "flex flex-col gap-2 p-3 min-w-[120px] border-l border-white/10",
        className
      )} 
      {...props}
    >
      {times.map((time) => (
        <button
          key={time}
          onClick={() => onValueChange?.(time)}
          className={cn(
            "px-4 py-2 text-sm rounded-md transition-colors text-left",
            time === value 
              ? "bg-white text-[#2A2B2E]" 
              : "text-white hover:bg-white/10"
          )}
        >
          {time}
        </button>
      ))}
    </div>
  )
}

