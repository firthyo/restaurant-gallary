import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { QRCodeSVG } from "qrcode.react";

interface BookingTicketProps {
  bookingData: {
    date: Date | null;
    guests: number;
    name: string;
    confirmationCode: string;
  };
  onDownload: () => void;
  onShare: () => void;
}

const BookingTicket: React.FC<BookingTicketProps> = ({
  bookingData,
  onDownload,
  onShare,
}) => {
  const [showQR, setShowQR] = useState(false);

  const toggleView = () => setShowQR((prev) => !prev);
  return (
    <div className="max-w-md mx-auto overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="bg-[#DBE4D6] p-6 rounded-[32px]">
        <div className="relative h-64 w-full mb-6">
          {showQR ? (
            <div className="flex items-center justify-center h-full w-full">
              <QRCodeSVG
                value={`https://example.com/reservation/${bookingData.confirmationCode}`}
                size={170}
                bgColor="#DBE4D6"
                // fgColor="#2C3E50"
                className="mx-auto"
              />
            </div>
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=2070&auto=format&fit=crop"
              alt="Reservation"
              className="rounded-2xl object-cover"
              fill
            />
          )}
          <div className="absolute top-4 right-4 flex gap-2 text-[#DBE4D6]">
            <span className="text-lg">05</span>
            <span className="text-lg">/</span>
            <span className="text-lg">10</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-serif tracking-wide">CHEF'S TABLE</h2>
            <p className="text-sm uppercase tracking-wider">
              Restaurant Gallary Experience
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Guest</span>
              <span className="font-serif text-lg">{bookingData.name}</span>
            </div>
            {bookingData.date && (
              <div className="flex justify-between items-center border-b border-black/10 pb-2">
                <span className="uppercase tracking-wider">Date</span>
                <span className="font-serif text-lg">
                  {format(bookingData.date, "MMMM do, yyyy")}
                </span>
              </div>
            )}

            {bookingData.date && (
              <div className="flex justify-between items-center border-b border-black/10 pb-2">
                <span className="uppercase tracking-wider">Time</span>
                <span className="font-serif text-lg">
                  {format(bookingData.date, "h:mm a")}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Guests</span>
              <span className="font-serif text-lg">{bookingData.guests}</span>
            </div>
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Button
              onClick={onShare}
              variant="outline"
              className="flex-1 border-[var(--card-foreground)] text-[var(--card-foreground)]"
            >
              Share
            </Button>
            <Button
              onClick={toggleView}
              className="flex-1 bg-[var(--card-foreground)] text-white "
            >
              See QR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
