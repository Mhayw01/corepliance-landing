"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const cards = [
  {
    id: "save-time",
    title: "Save over 20 hours",
    subline: "of admin time per month per lawyer",
    icon: "/assets/20-hours.svg",
    description: [
      "Conveyancers currently spend up to 20% of their fee-earning time completing Client & Matter Risk Assessments, with most standard purchase transactions alone taking over two hours to gather information, process and complete the CMRA.",
      "By automating document analysis, data extraction and evidence-grounded CMRA drafting, Corepliance returns upwards of 20 hours per month to each lawyer, allowing that time to be redirected towards progressing matters, increasing caseload capacity, or improving client communication and relationships.",
    ],
  },
  {
    id: "reduce-delays",
    title: "Reduce delays",
    subline: "before legal work can begin",
    icon: "/assets/reduce-delays.svg",
    description: [
      "Under SRA guidance, no substantive legal work can commence until the CMRA has been completed and signed off, meaning AML delays directly stall transactions.",
      "Corepliance dramatically shortens the time taken to complete and approve CMRAs, enabling lawyers to begin legal work far earlier in the lifecycle of a matter and reducing one of the key contributors to increased conveyancing timelines.",
    ],
  },
  {
    id: "consistency",
    title: "Improve consistency",
    subline: "across fee earners",
    icon: "/assets/improve.svg",
    description: [
      "In the current environment, CMRAs are completed inconsistently across firms due to differing levels of experience, training and interpretation of regulatory guidance.",
      "Corepliance applies a consistent, evidence-based reasoning framework to every matter, ensuring that AML assessments are approached in a standardised manner across all fee earners while still preserving final lawyer review and judgment.",
    ],
  },
  {
    id: "risk",
    title: "Lower regulatory risk",
    subline: "and improve audit defensibility",
    icon: "/assets/lower.svg",
    description: [
      "Regulatory scrutiny has intensified, with significant fines issued for AML failures and increasing expectations around documented reasoning.",
      "Corepliance produces structured, auditable CMRAs with clear links between evidence, analysis and conclusions, supported by a comprehensive audit trail.",
      "This strengthens a firm's ability to defend its compliance decisions during SRA audits or internal reviews and reduces the risk of issues falling through the cracks.",
    ],
  },
  {
    id: "client-experience",
    title: "Improve client experience",
    subline: "at the very start of the transaction",
    icon: "/assets/improve2.svg",
    description: [
      "AML onboarding is frequently cited as a source of early friction between lawyers and clients, particularly when large volumes of financial information are requested without clear explanation.",
      "By removing this burden from fee earners and accelerating CMRA completion, Corepliance allows the lawyer-client relationship to begin from a position of progress rather than delay, improving early engagement and overall client satisfaction.",
    ],
  },
  {
    id: "stress",
    title: "Remove Stress",
    subline: "from one of the most cited sources of stress for lawyers",
    icon: "/assets/stress.svg",
    description: [
      "AML compliance is widely regarded by conveyancers as one of the most stressful and least rewarding aspects of their role, contributing to burnout and attrition within the profession.",
      "By taking away the most time-consuming and pressure-laden administrative work, Corepliance enables lawyers to focus on the legal work they are trained for and enjoy, significantly improving job satisfaction, retention and recruitment.",
    ],
  },
  {
    id: "costs",
    title: "Cost covered",
    subline: "through existing AML or ID administration charges",
    icon: "/assets/costs.svg",
    description: [
      "Many law firms already charge clients an AML or ID administration fee, typically ranging from £25 to £50 plus VAT per client.",
      "Corepliance's per-use pricing is designed to sit comfortably within this existing charging structure, meaning firms can adopt the platform without reducing profitability, as the cost can be fully recovered through standard client disbursements.",
    ],
  },
];

export default function Section4Mobile() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[420px] space-y-6 px-6 py-10">
        <Reveal delay={0}>
          <h2 className="text-2xl font-semibold text-[#3073AF]">
            Why are law firms interested?
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="space-y-6">
            {cards.map((card) => {
              const isOpen = openId === card.id;

              return (
                <div key={card.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleCard(card.id)}
                    className={`w-full rounded-[20px] bg-[#3073AF] px-5 py-4 text-left ${isOpen ? "rounded-b-none" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xl font-medium text-white">
                          {card.title}
                        </div>
                        <div className="mt-2 text-base font-normal text-white">
                          {card.subline}
                        </div>
                      </div>
                      <div className="flex h-[72px] w-[72px] items-center justify-center">
                        <Image
                          src={card.icon}
                          alt=""
                          width={72}
                          height={72}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex w-full justify-center">
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={isOpen ? "rotate-180" : undefined}
                      >
                        <path
                          d="M2 2L10 10L18 2"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  {isOpen ? (
                    <div className="w-full rounded-b-[20px] border border-[#C6DAEE] bg-[#EAF2FA] p-5 text-base font-normal leading-6 text-[#111827]">
                      <div className="space-y-4">
                        {card.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
