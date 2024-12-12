import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { QrCode } from "lucide-react";

interface BookingTicketProps {
  bookingData: {
    date: Date;
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
  return (
    <div className="max-w-md mx-auto overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="bg-[#DBE4D6] p-6 rounded-[32px]">
        <div className="relative h-64 w-full mb-6">
          <Image
            src="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=2070&auto=format&fit=crop"
            alt="Monet's Water Lilies"
            className="rounded-2xl object-cover"
            fill
          />
          <div className="absolute top-4 right-4 flex gap-2 text-[#DBE4D6]">
            <span className="text-lg">05</span>
            <span className="text-lg">/</span>
            <span className="text-lg">10</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-4xl font-serif tracking-wide">CHEF'S TABLE</h2>
            <p className="text-sm uppercase tracking-wider">
              Museum Restaurant Experience
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Guest</span>
              <span className="font-serif text-lg">{bookingData.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Date</span>
              <span className="font-serif text-lg">
                {format(bookingData.date, "MMMM d, yyyy")}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Time</span>
              <span className="font-serif text-lg">
                {format(bookingData.date, "h:mm a")}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="uppercase tracking-wider">Guests</span>
              <span className="font-serif text-lg">{bookingData.guests}</span>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex justify-center">
              <QrCode className="w-24 h-24 text-black/80" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs uppercase tracking-wider text-black/60">
                Confirmation Code
              </p>
              <p className="font-mono text-lg">
                {bookingData.confirmationCode}
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Button
              onClick={onDownload}
              className="flex-1 bg-black text-white hover:bg-black/90"
            >
              Download
            </Button>
            <Button
              onClick={onShare}
              variant="outline"
              className="flex-1 border-black text-black hover:bg-black/5"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
