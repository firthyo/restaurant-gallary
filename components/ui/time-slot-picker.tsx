"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TimeSlotPickerProps {
  availableSlots: string[]
  selectedTime?: string
  onSelectTime: (time: string) => void
}

export function TimeSlotPicker({ availableSlots, selectedTime, onSelectTime }: TimeSlotPickerProps) {
  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">Available Times</h3>
      {availableSlots.length === 0 ? (
        <p className="text-gray-500">No available times for the selected date.</p>
      ) : (
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-2 gap-2">
            {availableSlots.map((slot) => (
              <Button
                key={slot}
                variant={selectedTime === slot ? "default" : "outline"}
                onClick={() => onSelectTime(slot)}
                className="w-full"
              >
                {slot}
              </Button>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}

