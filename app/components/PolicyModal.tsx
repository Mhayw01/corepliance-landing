"use client";

import { useEffect } from "react";
import Image from "next/image";

type PolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
};

export default function PolicyModal({
  isOpen,
  onClose,
  title,
  content,
}: PolicyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[80vh] w-[92%] max-w-[760px] overflow-y-auto rounded-2xl bg-white p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src="/assets/logo.svg"
          alt="Corepliance"
          width={120}
          height={120}
          className="mb-6 rounded-[40px]"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-lg leading-none text-slate-500 transition-opacity hover:opacity-70"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <div className="mt-6 text-sm leading-6 text-slate-700">{content}</div>
      </div>
    </div>
  );
}
