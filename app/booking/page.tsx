"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DateTimePicker } from "@/components/ui/date-time-picker";

const tables = [
  { id: "1", name: "Table 1", location: "window", capacity: 2 },
  { id: "2", name: "Table 2", location: "window", capacity: 2 },
  { id: "3", name: "Table 3", location: "center", capacity: 4 },
  { id: "4", name: "Table 4", location: "center", capacity: 4 },
  { id: "5", name: "Table 5", location: "booth", capacity: 6 },
  { id: "6", name: "Table 6", location: "booth", capacity: 6 },
  { id: "7", name: "Table 7", location: "bar", capacity: 2 },
  { id: "8", name: "Table 8", location: "bar", capacity: 2 },
];

type TableStatus = "available" | "selected" | "unavailable";

interface BookingData {
  table: string | null;
  dateTime: Date | null;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    table: null,
    dateTime: null,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const getTableStatus = (tableId: string): TableStatus => {
    if (tableId === bookingData.table) return "selected";
    if (tableId === "3") return "unavailable"; // Simulated unavailable table
    return "available";
  };

  const handleTableSelect = (tableId: string) => {
    if (getTableStatus(tableId) !== "unavailable") {
      setBookingData((prev) => ({
        ...prev,
        table: prev.table === tableId ? null : tableId, // Toggle selection
      }));
    }
  };

  const handleDateTimeSelect = (dateTime: Date) => {
    setBookingData((prev) => ({ ...prev, dateTime }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking confirmed:", bookingData);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.table !== null;
      case 2:
        return bookingData.dateTime !== null;
      case 3:
        return bookingData.name && bookingData.email && bookingData.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif italic text-primary text-center mb-12">
          Make a Reservation
        </h1>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8">
          {[
            "Select Table",
            "Choose Date & Time",
            "Customer Info",
            "Confirm Booking",
          ].map((stepName, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground mb-2",
                  step > index + 1
                    ? "bg-[var(--foreground)] text-[var(--soft-cream)]"
                    : step === index + 1
                    ? "bg-[var(--foreground)] text-[var(--soft-cream)]"
                    : "bg-[var(--muted)] text-[var(--foreground)]"
                )}
              >
                {index + 1}
              </div>
              <span className="text-sm text-center">{stepName}</span>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-200 m-6" />
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-olive mb-4 text-center">
              Step 1: Select a Table
            </h2>

            {/* Table Status Legend */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-calendar bg-card rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-foreground rounded text"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-muted rounded"></div>
                <span>Unavailable</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tables.map((table) => {
                const status = getTableStatus(table.id);
                return (
                  <button
                    key={table.id}
                    onClick={() => handleTableSelect(table.id)}
                    disabled={status === "unavailable"}
                    className={cn(
                      "h-48 rounded-lg relative transition-all duration-200 rounded",
                      status === "selected" && "bg-foreground text-white",
                      status === "unavailable" && "bg-muted cursor-not-allowed",
                      status === "available" &&
                        "bg-card border-2 border-calendar hover:border-accent"
                    )}
                  >
                    <Badge
                      className={cn(
                        "absolute top-2 right-2 bg-secondary text-secondary-foreground",
                        status === "selected" &&
                          "bg-secondary text-calendar"
                      )}
                    >
                      {table.location}
                    </Badge>
                    <div className="absolute inset-0 flex flex-col items-center justify-center ">
                      <h3 className="text-2xl font-bold mb-2">
                        Table {table.id}
                      </h3>
                      <p className="text-lg">{table.capacity} seats</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-olive mb-4">
              Step 2: Choose Date & Time
            </h2>
            <div className="w-full mx-auto">
              <Label className="mb-2 block">Select Date & Time</Label>
              <DateTimePicker
                selectedDateTime={bookingData.dateTime || undefined}
                onSelect={handleDateTimeSelect}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-olive mb-4">
              Step 3: Customer Information
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="specialRequests">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-olive mb-4">
              Step 4: Confirm Booking
            </h2>
            <div className="bg-card p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
              <p>
                <strong>Table:</strong>{" "}
                {tables.find((t) => t.id === bookingData.table)?.name}
              </p>
              <p>
                <strong>Date & Time:</strong>{" "}
                {bookingData.dateTime?.toLocaleString()}
              </p>
              <p>
                <strong>Name:</strong> {bookingData.name}
              </p>
              <p>
                <strong>Email:</strong> {bookingData.email}
              </p>
              <p>
                <strong>Phone:</strong> {bookingData.phone}
              </p>
              {bookingData.specialRequests && (
                <p>
                  <strong>Special Requests:</strong>{" "}
                  {bookingData.specialRequests}
                </p>
              )}
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Confirm Booking
            </Button>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)} variant="outline">
              Back
            </Button>
          )}
          {step < 4 && (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="ml-auto bg-rust-orange text-white hover:bg-rust-orange/10"
            >
              Next
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
