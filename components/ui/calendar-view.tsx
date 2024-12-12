"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addMonths, eachDayOfInterval, endOfMonth, format, getDay, isSameDay, isSameMonth, startOfMonth, startOfWeek, endOfWeek } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CalendarViewProps {
  selectedDate?: Date
  onSelectDate: (date: Date) => void
  availableSlots: { [date: string]: string[] }
}

export function CalendarView({ selectedDate, onSelectDate, availableSlots }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const days = React.useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth))
    const end = endOfWeek(endOfMonth(currentMonth))
    return eachDayOfInterval({ start, end })
  }, [currentMonth])

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1))

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Button onClick={prevMonth} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </Button>
        <h2 className="font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <Button onClick={nextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, dayIdx) => {
          const dateKey = format(day, "yyyy-MM-dd")
          const slots = availableSlots[dateKey] || []
          const isAvailable = slots.length > 0
          const isSelected = selectedDate && isSameDay(day, selectedDate)
          const isToday = isSameDay(day, new Date())
          const isCurrentMonth = isSameMonth(day, currentMonth)

          return (
            <Button
              key={day.toString()}
              variant="outline"
              className={cn(
                "h-10 w-full p-0 font-normal border-secondary text-calendar",
                !isCurrentMonth && "text-gray-400",
                isToday && "border-secondary text-calendar",
                isSelected && "bg-foreground text-white",
                isAvailable && !isSelected && "bg-calendar hover:bg-tertiary",
                !isAvailable && "bg-gray-100"
              )}
              disabled={!isAvailable}
              onClick={() => onSelectDate(day)}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

