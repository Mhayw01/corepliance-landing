"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

const features = [
  {
    id: "evidence",
    title: "Evidence-led compliance",
    description:
      "Evidence-based CMRA drafting aligned to UK regulatory expectations",
    icon: "/assets/evidence-led.svg",
  },
  {
    id: "identity",
    title: "Identity & verification",
    description:
      "Electronic ID checking and secure ID & Source of Funds validation, including gifted deposits",
    icon: "/assets/identity.svg",
  },
  {
    id: "matter",
    title: "Matter coverage",
    description:
      "Purchase, sale, sale & purchase, and remortgage matters supported",
    icon: "/assets/matter.svg",
  },
  {
    id: "ai",
    title: "AI assistance",
    description:
      "AI-assisted extraction of key financial data to support faster review",
    icon: "/assets/ai.svg",
  },
  {
    id: "lawyer",
    title: "Lawyer control",
    description:
      "Full lawyer review, control, and approval before any decision is finalised",
    icon: "/assets/lawyer.svg",
  },
  {
    id: "audit",
    title: "Audit & oversight",
    description:
      "Clear audit trails for internal review and regulatory scrutiny",
    icon: "/assets/audit.svg",
  },
  {
    id: "data",
    title: "Data security",
    description:
      "UK-hosted, encrypted data, automatically deleted after 60 days",
    icon: "/assets/data.svg",
  },
];

export default function Section3Mobile() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[420px] px-6 py-10">
        <Reveal delay={0}>
          <h2 className="text-center text-2xl font-semibold text-[#3073AF]">
            What Corepliance does
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 text-center text-lg font-normal text-[#7D6A6A]">
            At beta stage, Corepliance supports:
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={feature.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold leading-6 text-[#3073AF]">
                    {feature.title}
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-[#7D6A6A]">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.9}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="inline-flex items-center justify-center rounded-full bg-[#3073AF] px-8 py-4 text-lg font-semibold leading-snug text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Contact us to find out more
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
