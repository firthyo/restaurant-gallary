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
import FormBookingChef from "@/components/ui/form";
import { tables } from "@/components/data/table";
import Modal from "@/components/ui/Modal";
import BookingTicket from "@/components/BookingTicket";
import { format } from "date-fns";
import { RadioCards } from "@/components/ui/radio-card";
import { Mail, Mails, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

type TableStatus = "available" | "selected" | "unavailable";

interface BookingData {
  table: string | null;
  dateTime: Date | null;
  guests: number;
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
    guests: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isBooking, setIsBooking] = useState(false);

  const [showTicket, setShowTicket] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    resetBooking();
    setIsModalOpen(false);
  };

  const resetBooking = () => {
    setBookingData({
      table: null,
      dateTime: null,
      guests: 1,
      name: "",
      phone: "",
      email: "",
      specialRequests: "",
    });
    setIsBooking(false);
    setStep(0);
    setShowTicket(false);
  };
  const [errors, setErrors] = useState<{
    guests: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
  }>({
    guests: null,
    name: null,
    phone: null,
    email: null,
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
    const confirmationCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    setBookingData((prev) => ({ ...prev, confirmationCode }));
    setShowTicket(true);
    console.log("Booking confirmed:", bookingData);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false); // For popup
  const router = useRouter(); // For navigation

  const handleConfirm = () => {
    setIsPopupOpen(true); // Show popup
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false); // Close popup
    router.push("/"); // Redirect to home
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
            "Notification Preferences",
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
                        status === "selected" && "bg-secondary text-calendar"
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
              <FormBookingChef
                formData={{
                  guests: bookingData.guests,
                  name: bookingData.name,
                  phone: bookingData.phone,
                  email: bookingData.email,
                }}
                errors={{
                  guests: errors.guests,
                  name: errors.name,
                  phone: errors.phone,
                  email: errors.email,
                }}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </form>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-olive mb-4">
              Step 4: Confirm Booking
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
              <p>
                <strong>Table:</strong>{" "}
                {tables.find((t) => t.id === bookingData.table)?.name}
              </p>
              <p>
                <strong>Date & Time:</strong>{" "}
                {bookingData.dateTime
                  ? format(bookingData.dateTime, "PPP 'at' p")
                  : "Not selected"}
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
          </div>
        )}
        {step === 5 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[var(--olive-green)] mb-4">
              Choose your preferred notification method:
            </h2>
            <div className="max-w-md mx-auto">
              <RadioCards.Root
                defaultValue="1"
                columns={{ initial: "1", sm: "3" }}
              >
                <RadioCards.Item value="1">
                  <div className="flex flex-col w-full items-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="text-blue-500 w-5 h-5" />
                      <span className="font-bold text-gray-800">Email</span>
                      <span className="text-gray-600">{bookingData.phone}</span>
                    </div>
                  </div>
                </RadioCards.Item>
                <RadioCards.Item value="2">
                  <div className="flex flex-col w-full items-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-blue-500 w-5 h-5" />
                      <span className="font-bold text-gray-800">SMS</span>
                      <span className="text-gray-600">{bookingData.email}</span>
                    </div>
                  </div>
                </RadioCards.Item>
                <RadioCards.Item value="3">
                  <div className="flex flex-col w-full items-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mails className="text-blue-500 w-5 h-5" />
                      <span className="font-bold text-gray-800">Both</span>
                      <div className="flex flex-col text-left">
                        <span className="text-gray-600">
                          Email : {bookingData.phone} <br />
                          Phone : {bookingData.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </RadioCards.Item>
              </RadioCards.Root>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)} variant="calendarOutline">
              Back
            </Button>
          )}
          {step <= 4 && (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="ml-auto"
            >
              Next
            </Button>
          )}
          {step === 5 && (
            <Button onClick={handleConfirm} className="ml-auto">
              Confirm
            </Button>
          )}
        </div>
      </main>

      <Footer />

      {isPopupOpen && (
        <Modal isOpen={isPopupOpen} onClose={handlePopupClose}>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Booking Confirmed</h2>
            <p className="text-gray-600 mb-4">
              Your booking has been confirmed. You will receive a notification
              soon.
            </p>
            <Button
              onClick={handlePopupClose}
              className="bg-blue-500 text-white"
            >
              Back to Home
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
