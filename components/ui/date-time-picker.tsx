"use client"

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { CalendarView } from "@/components/ui/calendar-view"
import { TimeSlotPicker } from "@/components/ui/time-slot-picker"

interface DateTimePickerProps {
  className?: string
  selectedDateTime?: Date
  onSelect?: (date: Date) => void
}

export function DateTimePicker({
  className,
  selectedDateTime,
  onSelect,
}: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(selectedDateTime)
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>()

  // This is a mock-up of available slots. In a real application, this would come from your backend.
  const availableSlots = React.useMemo(() => {
    const slots: { [date: string]: string[] } = {}
    const now = new Date()
    for (let i = 0; i < 30; i++) {
      const day = new Date(now)
      day.setDate(now.getDate() + i)
      const dateKey = format(day, "yyyy-MM-dd")
      slots[dateKey] = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]
    }
    return slots
  }, [])

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(undefined)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (selectedDate) {
      const [hours, minutes] = time.split(':').map(Number)
      const newDateTime = new Date(selectedDate)
      newDateTime.setHours(hours, minutes, 0, 0)
      if (onSelect) onSelect(newDateTime)
    }
  }

  return (
    <div className={cn("grid gap-4", className)}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-3">
          <CalendarView
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
            availableSlots={availableSlots}
          />
        </div>
        <div className="md:col-span-2">
          {selectedDate ? (
            <TimeSlotPicker
              availableSlots={availableSlots[format(selectedDate, "yyyy-MM-dd")] || []}
              selectedTime={selectedTime}
              onSelectTime={handleTimeSelect}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a date to see available times
            </div>
          )}
        </div>
      </div>
      {selectedDate && selectedTime && (
        <p className="text-center text-sm">
          Selected: {format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
        </p>
      )}
    </div>
  )
}

