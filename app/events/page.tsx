'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    name: "Impressionist Dinner Night",
    date: "2023-09-15",
    description: "Experience a meal inspired by the works of Monet and Renoir. Each course is a culinary interpretation of a famous Impressionist painting.",
  },
  {
    id: 2,
    name: "Surrealist Cocktail Evening",
    date: "2023-10-01",
    description: "Join us for a night of unexpected flavor combinations and visually stunning cocktails inspired by the Surrealist movement.",
  },
  {
    id: 3,
    name: "Renaissance Feast",
    date: "2023-10-20",
    description: "Step back in time with our Renaissance-inspired feast. Enjoy period-accurate dishes and live medieval music.",
  },
  {
    id: 4,
    name: "Modern Art Tasting Menu",
    date: "2023-11-05",
    description: "Our chef presents a tasting menu inspired by the bold colors and abstract forms of modern art movements.",
  },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-rust-orange mb-12 text-center">Upcoming Events</h1>

      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="bg-beige p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-rust-orange mb-2">{event.name}</h2>
            <p className="text-olive-green mb-4">Date: {event.date}</p>
            <p className="mb-4">{event.description}</p>
            <Button
              onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
              className="bg-rust-orange text-soft-cream hover:bg-olive-green transition-colors"
            >
              {selectedEvent === event.id ? 'Hide Details' : 'Show Details'}
            </Button>
            {selectedEvent === event.id && (
              <div className="mt-4 p-4 bg-soft-cream rounded-lg">
                <h3 className="text-xl font-bold text-rust-orange mb-2">Event Details</h3>
                <p>Time: 7:00 PM - 10:00 PM</p>
                <p>Price: $120 per person</p>
                <p>Dress Code: Smart Casual</p>
                <p className="mt-2">
                  To reserve your spot for this special event, please call us at (123) 456-7890 or email
                  events@museumrestaurant.com
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

