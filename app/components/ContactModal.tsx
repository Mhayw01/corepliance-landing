"use client";

import { useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isSuccess, onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        body.append(key, value);
      }
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] rounded-2xl bg-white p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-slate-500"
          aria-label="Close"
        >
          x
        </button>

        {isSuccess ? (
          <div className="space-y-3 text-center">
            <div className="text-xl font-medium text-slate-800">
              Thanks - we'll be in touch.
            </div>
            <div className="text-sm text-slate-600">
              Your message has been sent successfully.
            </div>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full rounded-[20px] bg-[#3073AF] px-6 py-3 text-lg font-medium text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900">
                Contact Corepliance
              </h2>
              <p className="text-sm text-slate-600">
                Tell us a little about your firm and we'll follow up.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-2 gap-4">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  First name
                  <input
                    name="firstName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3073AF]/30"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Last name
                  <input
                    name="lastName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3073AF]/30"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Law firm
                <input
                  name="lawFirm"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3073AF]/30"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3073AF]/30"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Message (optional)
                <textarea
                  name="message"
                  rows={4}
                  maxLength={250}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3073AF]/30"
                />
                <span className="text-xs font-normal text-slate-500">
                  Tell us what you'd like to achieve (250 characters max).
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-[20px] bg-[#3073AF] px-6 py-3 text-lg font-medium text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
