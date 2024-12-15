"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { format } from "date-fns";
import CustomizeMenu, { CustomizeMenuHandle } from "@/components/CustomizeMenu";
import BookingTicket from "@/components/BookingTicket";
import Modal from "@/components/ui/Modal";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { courseDetails } from "@/components/data/course";
import FormBookingChef from "@/components/ui/form";
import { CheckIcon, Mail, Mails, MessageSquare } from "lucide-react";
import { RadioCards } from "@/components/ui/radio-card";

// Booking steps
const steps = [
  // "Select Experience",
  "Date and Time",
  "Guest Information",
  "Confirmation",
  "Notification Preferences",
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

export default function ChefsTable() {
  const [isBooking, setIsBooking] = useState(false);
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    courseType: "5-course",
    dietaryRestrictions: "",
    date: new Date(),
    guests: 1,
    name: "",
    phone: "",
    email: "",
    customSelections: [],
  });

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    resetBooking();
    setIsModalOpen(false);
  };

  const [showTicket, setShowTicket] = useState(false);
  const customizeMenuRef = useRef<CustomizeMenuHandle>(null);
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  const handleCourseTypeSelect = (type: "5-course" | "7-course" | "custom") => {
    setBookingData((prev) => ({ ...prev, courseType: type }));
  };

  const handleDateTimeSelect = (selectedDateTime: Date) => {
    setBookingData((prev) => ({
      ...prev,
      date: selectedDateTime,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
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
    sendEmail();
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

  const sendSMS = async () => {
    const response = await fetch("/api/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "+1234567890", // User's phone number
        message: "Your booking is confirmed!",
      }),
    });

    const data = await response.json();
    console.log(data);
  };
  const sendEmail = async () => {
    const response = await fetch("http://localhost:3000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: bookingData.email,
        subject: "Booking Confirmation",
        text: "Your booking is confirmed for December 15th at 8:00 PM!",
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (step === 1) {
      const { guests, name, phone, email } = bookingData;
      setErrors({
        guests: guests > 0 ? null : "Number of guests must be at least 1.",
        name: name ? null : "Name is required.",
        phone: phone ? null : "Phone number is required.",
        email:
          email && /\S+@\S+\.\S+/.test(email)
            ? null
            : "A valid email is required.",
      });
    }
  }, [bookingData, step]);

  const canProceed = () => {
    switch (step) {
      case 0:
        return bookingData.date !== null;
      case 1:
        const { guests, name, phone, email } = bookingData;
        const hasErrors = {
          guests: guests > 0 ? null : "Number of guests must be at least 1.",
          name: name ? null : "Name is required.",
          phone: phone ? null : "Phone number is required.",
          email:
            email && /\S+@\S+\.\S+/.test(email)
              ? null
              : "A valid email is required.",
        };
        return Object.values(hasErrors).every((error) => error === null);
      case 2:
        return true;
      default:
        return false;
    }
  };

  const selectedCourseDetails =
    courseDetails[bookingData.courseType as "5-course" | "7-course"];
  useEffect(() => {
    console.log(step);
    if (step === 3) {
      handleOpenModal();
    }
  }, [step]);

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

              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[var(--olive-green)] mb-4">
                    Confirm Your Booking
                  </h2>
                  <div className="bg-white p-6 rounded-xl shadow-md text-left">
                    <h3 className="text-xl font-semibold mb-4">
                      Booking Summary
                    </h3>
                    <p>
                      <strong>Experience:</strong> {bookingData.courseType}
                      Experience
                    </p>
                    <p>
                      <strong>Date & Time:</strong>
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
                  {/* <Button onClick={handleSubmit}>Confirm and Pay</Button> */}
                </div>
              )}
              {/* <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleOpenModal}
              >
                Open Ticket
              </button> */}
              {step === 3 && (
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
                            <span className="font-bold text-gray-800">
                              Email
                            </span>
                            <span className="text-gray-600">
                              {bookingData.phone}
                            </span>
                          </div>
                        </div>
                      </RadioCards.Item>
                      <RadioCards.Item value="2">
                        <div className="flex flex-col w-full items-start space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mail className="text-blue-500 w-5 h-5" />
                            <span className="font-bold text-gray-800">SMS</span>
                            <span className="text-gray-600">
                              {bookingData.email}
                            </span>
                          </div>
                        </div>
                      </RadioCards.Item>
                      <RadioCards.Item value="3">
                        <div className="flex flex-col w-full items-start space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mails className="text-blue-500 w-5 h-5" />
                            <span className="font-bold text-gray-800">
                              Both
                            </span>
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
              {showTicket && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                  <div className="space-y-8">
                    <BookingTicket
                      bookingData={bookingData as Required<BookingData>}
                      onDownload={handleDownloadTicket}
                      onShare={handleShareTicket}
                    />
                  </div>
                </Modal>
              )}

              {/* <div className="mt-8 flex justify-between"> */}
              {!showTicket && (
                <div className="mt-8 flex justify-between">
                  {step > 0 && (
                    <Button
                      onClick={() => setStep(step - 1)}
                      variant="calendarOutline"
                    >
                      Back
                    </Button>
                  )}
                  {step < 3 && (
                    <Button
                      onClick={() => setStep(step + 1)}
                      disabled={!canProceed()}
                      className="ml-auto"
                    >
                      Next
                    </Button>
                  )}
                  {step === 3 && (
                    <Button
                      onClick={handleSubmit}
                      className="ml-auto hover:bg-[var(--accent)]/90"
                    >
                      Confirm Booking & Get ticket
                    </Button>
                  )}
                </div>
              )}
              {/* </div> */}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
