"use client";

import { useEffect, useState } from "react";
import ContactModalV2 from "./preview/components/ContactModalV2";
import Hero from "./preview/components/Hero";
import ValueProp from "./preview/components/ValueProp";
import Features from "./preview/components/Features";
import BuiltByLawyers from "./preview/components/BuiltByLawyers";
import HoursSaved from "./preview/components/HoursSaved";
import Workflow from "./preview/components/Workflow";
import ReduceBurden from "./preview/components/ReduceBurden";
import CtaBand from "./preview/components/CtaBand";
import FooterV2 from "./preview/components/FooterV2";

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsContactOpen(true);
    const win = window as Window & { openContactModal?: () => void };
    win.openContactModal = open;
    window.addEventListener("open-contact", open);
    return () => {
      window.removeEventListener("open-contact", open);
      delete win.openContactModal;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-lato)] text-[var(--brand-navy)]">
      <Hero />
      <ValueProp />
      <Features />
      <BuiltByLawyers />
      <HoursSaved />
      <Workflow />
      <ReduceBurden />
      <CtaBand />
      <FooterV2 />
      <ContactModalV2 isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Hidden form for Netlify build-time form detection. The live form renders inside ContactModalV2. */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&rsquo;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <input name="firstName" />
        <input name="lastName" />
        <input name="lawFirm" />
        <input name="email" />
        <textarea name="message" />
      </form>
    </main>
  );
}
