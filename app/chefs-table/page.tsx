"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { format } from "date-fns";
import CustomizeMenu, { CustomizeMenuHandle } from "@/components/CustomizeMenu";
import BookingTicket from "@/components/BookingTicket";

// Booking steps
const steps = [
  "Select Experience",
  "Date and Time",
  "Guest Information",
  "Confirmation",
  "Your Ticket",
];

interface BookingData {
  courseType: "5-course" | "7-course" | "custom";
  dietaryRestrictions: string;
  date: Date | null;
  guests: number;
  name: string;
  phone: string;
  email: string;
  customSelections: string[];
  confirmationCode?: string;
}

const courseDetails = {
  "5-course": {
    price: 150,
    courses: [
      {
        title: "Amuse-bouche",
        description: "Chef's daily inspiration",
      },
      {
        title: "First Course",
        description: "Seasonal garden vegetables with herb emulsion",
      },
      {
        title: "Second Course",
        description: "Wild-caught seafood selection",
      },
      {
        title: "Main Course",
        description: "Choice of land or sea",
      },
      {
        title: "Dessert",
        description: "Artisanal sweet creation",
      },
    ],
  },
  "7-course": {
    price: 200,
    courses: [
      {
        title: "Amuse-bouche",
        description: "Chef's daily inspiration",
      },
      {
        title: "First Course",
        description: "Seasonal garden vegetables with herb emulsion",
      },
      {
        title: "Second Course",
        description: "Wild-caught seafood selection",
      },
      {
        title: "Third Course",
        description: "Handmade pasta with seasonal truffle",
      },
      {
        title: "Fourth Course",
        description: "Aged beef tartare with caviar",
      },
      {
        title: "Main Course",
        description: "Choice of land or sea",
      },
      {
        title: "Dessert",
        description: "Artisanal sweet creation",
      },
    ],
  },
};

export default function ChefsTable() {
  const [isBooking, setIsBooking] = useState(false);
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    courseType: "5-course",
    dietaryRestrictions: "",
    date: null,
    guests: 1,
    name: "",
    phone: "",
    email: "",
    customSelections: [],
  });
  const [showTicket, setShowTicket] = useState(false);
  const customizeMenuRef = useRef<CustomizeMenuHandle>(null);

  const handleCourseTypeSelect = (type: "5-course" | "7-course" | "custom") => {
    setBookingData((prev) => ({ ...prev, courseType: type }));
  };

  const handleDateTimeSelect = (selectedDateTime: Date) => {
    setBookingData((prev) => ({
      ...prev,
      date: selectedDateTime,
    }));
    setStep(1); // Automatically move to the next step after date selection
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customSelections = customizeMenuRef.current?.getSelections() || [];
    const confirmationCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    setBookingData((prev) => ({ ...prev, customSelections, confirmationCode }));
    setShowTicket(true);
  };

  const handleDownloadTicket = () => {
    // Implement PDF download logic here
    console.log("Downloading ticket...");
  };

  const handleShareTicket = () => {
    // Implement sharing logic here
    console.log("Sharing ticket...");
  };

  const resetBooking = () => {
    setBookingData({
      courseType: "5-course",
      dietaryRestrictions: "",
      date: null,
      guests: 1,
      name: "",
      phone: "",
      email: "",
      customSelections: [],
    });
    setIsBooking(false);
    setStep(0);
    setShowTicket(false);
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return bookingData.date !== null;
      case 1:
        return (
          bookingData.guests > 0 &&
          bookingData.name &&
          bookingData.phone &&
          bookingData.email
        );
      case 2:
        return true;
      default:
        return false;
    }
  };

  const selectedCourseDetails =
    courseDetails[bookingData.courseType as "5-course" | "7-course"];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-[var(--olive-green)] mb-4">
            Chef's Table Experience
          </h1>
          <p className="text-gray-600 mb-8">
            Experience an exclusive culinary journey with our Chef's Table.{" "}
            <br />
            Tailored to your preferences and hosted by our head chef.
          </p>

          <div className="border-b border-gray-200 m-6" />

          {!isBooking && (
            <>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                {["5-course", "7-course", "custom"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      handleCourseTypeSelect(
                        type as "5-course" | "7-course" | "custom"
                      )
                    }
                    className={cn(
                      "px-4 py-2 rounded-full border text-sm transition-colors",
                      bookingData.courseType === type
                        ? "bg-foreground text-white"
                        : "border-border text-foreground hover:border-primary"
                    )}
                  >
                    {type === "custom" ? "Customize" : `${type} Experience`}
                  </button>
                ))}
              </div>

              {bookingData.courseType === "custom" ? (
                <CustomizeMenu ref={customizeMenuRef} />
              ) : (
                <div className="space-y-8 text-left">
                  {selectedCourseDetails.courses.map((course, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h2 className="font-serif text-xl text-[var(--olive-green)] mb-2">
                        {course.title}
                      </h2>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <Textarea
                  placeholder="Please share any dietary restrictions or preferences..."
                  name="dietaryRestrictions"
                  value={bookingData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="mb-6"
                />
                <Button
                  onClick={() => setIsBooking(true)}
                  // className="bg-[var(--rust-orange)] text-[var(--soft-cream)] hover:bg-[var(--olive-green)] w-full md:w-auto"
                >
                  Book this experience
                </Button>
              </div>
            </>
          )}

          {(isBooking || showTicket) && (
            <div className="mt-8">
              {/* Stepper */}
              <div className="flex justify-between items-center mb-8">
                {steps.map((stepName, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                        step > index
                          ? "bg-[var(--foreground)] text-[var(--soft-cream)]"
                          : step === index
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

              {step === 0 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[var(--olive-green)] mb-4">
                    Select Date and Time
                  </h2>
                  <DateTimePicker
                    selectedDateTime={bookingData.date || undefined}
                    onSelect={handleDateTimeSelect}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[var(--olive-green)] mb-4">
                    Guest Information
                  </h2>
                  <form className="space-y-4">
                    <div className="text-center">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={bookingData.guests}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
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
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[var(--olive-green)] mb-4">
                    Confirm Your Booking
                  </h2>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left">
                    <h3 className="text-xl font-semibold mb-4">
                      Booking Summary
                    </h3>
                    <p>
                      <strong>Experience:</strong> {bookingData.courseType}{" "}
                      Experience
                    </p>
                    <p>
                      <strong>Date & Time:</strong>{" "}
                      {bookingData.date
                        ? format(bookingData.date, "PPP 'at' p")
                        : "Not selected"}
                    </p>
                    <p>
                      <strong>Guests:</strong> {bookingData.guests}
                    </p>
                    <p>
                      <strong>Name:</strong> {bookingData.name}
                    </p>
                    <p>
                      <strong>Phone:</strong> {bookingData.phone}
                    </p>
                    <p>
                      <strong>Email:</strong> {bookingData.email}
                    </p>
                    {bookingData.dietaryRestrictions && (
                      <p>
                        <strong>Dietary Restrictions:</strong>{" "}
                        {bookingData.dietaryRestrictions}
                      </p>
                    )}
                    {bookingData.customSelections.length > 0 && (
                      <p>
                        <strong>Custom Selections:</strong>{" "}
                        {bookingData.customSelections.join(", ")}
                      </p>
                    )}
                    <p className="text-xl font-semibold mt-4">
                      Total: $
                      {bookingData.courseType === "5-course"
                        ? 150 * bookingData.guests
                        : bookingData.courseType === "7-course"
                        ? 200 * bookingData.guests
                        : 0}
                    </p>
                  </div>
                  <Button onClick={handleSubmit}>Confirm and Pay</Button>
                </div>
              )}

              {showTicket && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
                    Your Ticket
                  </h2>
                  <p className="text-center text-xl text-[var(--accent)] mb-6">
                    Your booking is confirmed! Thank you for choosing the Chef's
                    Table Experience.
                  </p>
                  <BookingTicket
                    bookingData={bookingData as Required<BookingData>}
                    onDownload={handleDownloadTicket}
                    onShare={handleShareTicket}
                  />
                  <Button
                    onClick={resetBooking}
                    className="w-full bg-[var(--primary)] text-[var(--soft-cream)] hover:bg-[var(--primary)]/90"
                  >
                    Book Another Experience
                  </Button>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {!showTicket && (
                  <>
                    {step > 0 && (
                      <Button
                        onClick={() => setStep(step - 1)}
                        variant="outline"
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 && (
                      <Button
                        onClick={() => setStep(step + 1)}
                        disabled={!canProceed()}
                      >
                        Next
                      </Button>
                    )}
                    {step === 3 && (
                      <Button
                        onClick={handleSubmit}
                        className="ml-auto bg-[var(--accent)] text-[var(--soft-cream)] hover:bg-[var(--accent)]/90"
                      >
                        Confirm Booking
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
