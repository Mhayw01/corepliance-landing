"use client";

import { ReactNode } from "react";

function openContact() {
  if (typeof window === "undefined") return;
  const win = window as Window & { openContactModal?: () => void };
  if (win.openContactModal) {
    win.openContactModal();
  } else {
    window.dispatchEvent(new Event("open-contact"));
  }
}

type Props = {
  children: ReactNode;
  className?: string;
};

export function CtaPill({ children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={openContact}
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand-vivid)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-navy)] transition hover:brightness-95 ${className}`}
    >
      {children}
    </button>
  );
}

export function CtaButton({ children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={openContact}
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:brightness-95 ${className}`}
    >
      {children}
    </button>
  );
}

export function CtaDark({ children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={openContact}
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand-navy)] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:brightness-110 ${className}`}
    >
      {children}
    </button>
  );
}
