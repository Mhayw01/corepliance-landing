"use client";

import { useEffect, useState } from "react";

type ContactModalV2Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModalV2({ isOpen, onClose }: ContactModalV2Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setIsSuccess(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) return;
    const timeout = window.setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
    return () => window.clearTimeout(timeout);
  }, [isSuccess, onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
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

  if (!isOpen) return null;

  const inputClass =
    "w-full rounded-lg border border-[var(--brand-navy)]/15 bg-white px-4 py-3 font-[family-name:var(--font-lato)] text-[15px] text-[var(--brand-navy)] placeholder:text-[var(--brand-navy)]/30 focus:border-[var(--brand-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-vivid)]/50";
  const labelClass =
    "block space-y-2 font-[family-name:var(--font-lato)] text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-navy)]/70";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--brand-navy)]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[540px] overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)]/5"
          aria-label="Close"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="space-y-5 px-8 py-12 text-center md:px-10">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-vivid)]">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-[var(--brand-navy)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[28px] font-medium leading-tight text-[var(--brand-navy)]">
              Thanks &mdash; we&rsquo;ll be in touch.
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-sm font-light text-[var(--brand-navy)]/70">
              Your message has been sent successfully.
            </p>
          </div>
        ) : (
          <div className="px-8 py-10 md:px-10">
            <div className="space-y-2">
              <h2 className="font-[family-name:var(--font-playfair)] text-[28px] font-medium leading-tight text-[var(--brand-navy)] md:text-[32px]">
                Get in touch
              </h2>
              <p className="font-[family-name:var(--font-lato)] text-sm font-light text-[var(--brand-navy)]/70">
                Tell us a little about your firm and we&rsquo;ll follow up.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  First name
                  <input name="firstName" required className={inputClass} />
                </label>
                <label className={labelClass}>
                  Last name
                  <input name="lastName" required className={inputClass} />
                </label>
              </div>

              <label className={labelClass}>
                Law firm
                <input name="lawFirm" required className={inputClass} />
              </label>

              <label className={labelClass}>
                Email
                <input name="email" type="email" required className={inputClass} />
              </label>

              <label className={labelClass}>
                Message <span className="font-normal normal-case tracking-normal text-[var(--brand-navy)]/40">(optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={250}
                  className={`${inputClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[var(--brand-orange)] px-7 py-3.5 font-[family-name:var(--font-lato)] text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:brightness-95 disabled:opacity-70"
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
