import { X } from "lucide-react";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <button
        className="absolute top-8 right-12 text-white"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X />
      </button>
      <div className="relative rounded-lg w-full max-w-md p-6">
        {/* Close Button */}

        {children}
      </div>
    </div>
  );
};

export default Modal;
