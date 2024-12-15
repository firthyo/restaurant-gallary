import React from "react";
import { TextField } from "./textfield";
import { Button } from "./button";

interface FormBookingChefProps {
  formData: {
    guests: number;
    name: string;
    phone: string;
    email: string;
  };
  errors: {
    guests: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Fix the type to expect an event
  onSubmit: (e: React.FormEvent) => void;
}

const FormBookingChef: React.FC<FormBookingChefProps> = ({
  formData,
  errors,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <TextField
        label="Number of Guests"
        name="guests"
        type="number"
        min="1"
        value={formData.guests.toString()}
        onChange={onInputChange}
        errorMessage={errors.guests || ""}
        required
      />
      <TextField
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={onInputChange}
        errorMessage={errors.name || ""}
        required
      />
      <TextField
        label="Phone Number"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={onInputChange}
        errorMessage={errors.phone || ""}
        required
      />
      <TextField
        label="Email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={onInputChange}
        errorMessage={errors.email || ""}
        required
      />
      {/* <Button type="submit" className="mt-4">
        Submit
      </Button> */}
    </form>
  );
};

export default FormBookingChef;
