"use client";

import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import HeroBanner from "./components/sections/HeroBanner";
import HeroBannerMobile from "./components/sections/HeroBannerMobile";
import Section2 from "./components/sections/Section2";
import Section2Mobile from "./components/sections/Section2Mobile";
import Section3 from "./components/sections/Section3";
import Section3Mobile from "./components/sections/Section3Mobile";
import Section4 from "./components/sections/Section4";
import Section4Mobile from "./components/sections/Section4Mobile";
import Section5 from "./components/sections/Section5";
import Section5Mobile from "./components/sections/Section5Mobile";
import Section6 from "./components/sections/Section6";
import Section6Mobile from "./components/sections/Section6Mobile";
import Footer from "./components/sections/Footer";
import FooterMobile from "./components/sections/FooterMobile";

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
      <div className="md:hidden">
        <HeroBannerMobile />
      </div>
      <div className="hidden md:block">
        <HeroBanner />
      </div>
      <div className="md:hidden">
        <Section2Mobile />
      </div>
      <div className="hidden md:block">
        <Section2 />
      </div>
      <div className="md:hidden">
        <Section3Mobile />
      </div>
      <div className="hidden md:block">
        <Section3 />
      </div>
      <div className="md:hidden">
        <Section4Mobile />
      </div>
      <div className="hidden md:block">
        <Section4 />
      </div>
      <div className="lg:hidden">
        <Section5Mobile />
      </div>
      <div className="hidden lg:block">
        <Section5 />
      </div>
      <div className="md:hidden">
        <Section6Mobile />
      </div>
      <div className="hidden md:block">
        <Section6 />
      </div>
      <div className="md:hidden">
        <FooterMobile />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
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
