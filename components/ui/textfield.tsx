import React from "react";
import { cn } from "@/lib/utils";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; // The label to display above the input
  name: string; // Name attribute for the input
  variant?: "text" | "email" | "phone" | "number"; // Field type/variant
  errorMessage?: string; // Error message to display
  validate?: (value: string) => string | null; // Custom validation function
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      name,
      variant = "text",
      errorMessage,
      validate,
      className,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState<string | null>(null);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      // Run validation if provided
      if (validate) {
        const validationError = validate(newValue);
        setError(validationError);
      } else {
        setError(null);
      }
    };

    return (
      <div className={cn("space-y-2", className)}>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-muted-foreground text-left"
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={variant}
          value={value}
          onChange={handleChange}
          ref={ref}
          className={cn(
            "flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
            error ? "border-red-500" : "border-gray-300"
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{errorMessage || error}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
