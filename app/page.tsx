"use client";

import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import HeroBanner from "./components/sections/HeroBanner";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Footer from "./components/sections/Footer";

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  useEffect(() => {
    const handleOpen = () => openContact();
    const win = window as Window & { openContactModal?: () => void };
    win.openContactModal = openContact;
    window.addEventListener("open-contact", handleOpen);

    return () => {
      window.removeEventListener("open-contact", handleOpen);
      delete win.openContactModal;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
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
            Don't fill this out: <input name="bot-field" />
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
