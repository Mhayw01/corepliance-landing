"use client";

import { useEffect, useState } from "react";
import ContactModalV2 from "./components/ContactModalV2";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import Features from "./components/Features";
import BuiltByLawyers from "./components/BuiltByLawyers";
import HoursSaved from "./components/HoursSaved";
import Workflow from "./components/Workflow";
import ReduceBurden from "./components/ReduceBurden";
import CtaBand from "./components/CtaBand";
import FooterV2 from "./components/FooterV2";

export default function PreviewPage() {
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
    </main>
  );
}
