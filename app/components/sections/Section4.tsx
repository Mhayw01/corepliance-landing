"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const cards = [
  {
    id: 1,
    title: "Save over 20 hours",
    sublines: ["of admin time", "per month per lawyer"],
    icon: "/assets/20-hours.svg",
    description: [
      "Conveyancers currently spend up to 20% of their fee-earning time completing Client & Matter Risk Assessments, with most standard purchase transactions alone taking over two hours to gather information, process and complete the CMRA.",
      "By automating document analysis, data extraction and evidence-grounded CMRA drafting, Corepliance returns upwards of 20 hours per month to each lawyer, allowing that time to be redirected towards progressing matters, increasing caseload capacity, or improving client communication and relationships.",
    ],
  },
  {
    id: 2,
    title: "Reduce delays",
    sublines: ["before legal work can begin"],
    icon: "/assets/reduce-delays.svg",
    description: [
      "Under SRA guidance, no substantive legal work can commence until the CMRA has been completed and signed off, meaning AML delays directly stall transactions.",
      "Corepliance dramatically shortens the time taken to complete and approve CMRAs, enabling lawyers to begin legal work far earlier in the lifecycle of a matter and reducing one of the key contributors to increased conveyancing timelines.",
    ],
  },
  {
    id: 3,
    title: "Improve consistency",
    sublines: ["across fee earners"],
    icon: "/assets/improve.svg",
    description: [
      "In the current environment, CMRAs are completed inconsistently across firms due to differing levels of experience, training and interpretation of regulatory guidance.",
      "Corepliance applies a consistent, evidence-based reasoning framework to every matter, ensuring that AML assessments are approached in a standardised manner across all fee earners while still preserving final lawyer review and judgment.",
    ],
  },
  {
    id: 4,
    title: "Lower regulatory risk",
    sublines: ["and improve audit defensibility"],
    icon: "/assets/lower.svg",
    description: [
      "Regulatory scrutiny has intensified, with significant fines issued for AML failures and increasing expectations around documented reasoning.",
      "Corepliance produces structured, auditable CMRAs with clear links between evidence, analysis and conclusions, supported by a comprehensive audit trail.",
      "This strengthens a firm's ability to defend its compliance decisions during SRA audits or internal reviews and reduces the risk of issues falling through the cracks.",
    ],
  },
  {
    id: 5,
    title: "Improve client experience",
    sublines: ["at the very start of the transaction"],
    icon: "/assets/improve2.svg",
    description: [
      "AML onboarding is frequently cited as a source of early friction between lawyers and clients, particularly when large volumes of financial information are requested without clear explanation.",
      "By removing this burden from fee earners and accelerating CMRA completion, Corepliance allows the lawyer-client relationship to begin from a position of progress rather than delay, improving early engagement and overall client satisfaction.",
    ],
  },
  {
    id: 6,
    title: "Remove Stress",
    sublines: ["from one of the most cited", "sources of tension for lawyers"],
    icon: "/assets/stress.svg",
    description: [
      "AML compliance is widely regarded by conveyancers as one of the most stressful and least rewarding aspects of their role, contributing to burnout and attrition within the profession.",
      "By taking away the most time-consuming and pressure-laden administrative work, Corepliance enables lawyers to focus on the legal work they are trained for and enjoy, significantly improving job satisfaction, retention and recruitment.",
    ],
  },
  {
    id: 7,
    title: "Cost covered",
    sublines: ["through existing AML or", "ID administration charges"],
    icon: "/assets/costs.svg",
    description: [
      "Many law firms already charge clients an AML or ID administration fee, typically ranging from £25 to £50 plus VAT per client.",
      "Corepliance's per-use pricing is designed to sit comfortably within this existing charging structure, meaning firms can adopt the platform without reducing profitability, as the cost can be fully recovered through standard client disbursements.",
    ],
  },
];

export default function Section4() {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCardId((current) => (current === id ? null : id));
  };

  const renderCard = (card: (typeof cards)[number]) => {
    const isOpen = openCardId === card.id;

    return (
      <div key={card.id} className="w-[523px]">
        <div
          className={`relative flex h-44 w-full items-center justify-between bg-[#3073AF] px-6 ${isOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
          role="button"
          tabIndex={0}
          onClick={() => handleToggle(card.id)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleToggle(card.id);
            }
          }}
        >
          <div className="max-w-[300px] text-left">
            <div className="text-2xl font-medium text-white">{card.title}</div>
            <div className="mt-2 text-base font-normal text-white">
              {card.sublines.join(" ")}
            </div>
          </div>
          <div className="flex h-24 w-24 items-center justify-center">
            <Image src={card.icon} alt="" width={96} height={96} />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
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
        </div>
        {isOpen ? (
          <div className="w-full rounded-b-[20px] border border-[#C6DAEE] bg-[#EAF2FA] p-6 text-base font-normal leading-6 text-[#111827]">
            <div className="space-y-4">
              {card.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="h-[1366px] w-full bg-white">
      <div className="relative mx-auto h-full w-[1440px]">
        <div className="flex h-full flex-col items-center pt-[96px]">
          <Reveal delay={0}>
            <h2 className="text-center text-4xl font-semibold text-[#3073AF]">
              Why are law firms interested?
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-[96px] grid grid-cols-2 gap-x-28 gap-y-[77px]">
              {cards.slice(0, 6).map(renderCard)}
            </div>

            <div className="mt-[77px] flex justify-center">
              {renderCard(cards[6])}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
