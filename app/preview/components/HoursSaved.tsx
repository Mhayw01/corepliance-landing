"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Card = {
  id: string;
  title: string;
  body: string;
  detail: string[];
};

const cards: Card[] = [
  {
    id: "pressure",
    title: "Take the pressure off fee-earners",
    body: "Remove one of the most stressful and time-consuming parts of the job.",
    detail: [
      "AML compliance is widely cited by conveyancers as one of the most stressful and least rewarding parts of the job. It\u2019s a major contributor to burnout and attrition across the profession.",
      "Corepliance lifts the heaviest administrative work off fee-earners so they can focus on the legal work they trained for and enjoy.",
    ],
  },
  {
    id: "risk",
    title: "Reduce regulatory risk",
    body: "Clear, evidence-backed risk assessments you can stand behind.",
    detail: [
      "Regulatory scrutiny has intensified, with significant fines for AML failures and rising expectations around documented reasoning.",
      "Every CMRA is structured and auditable, with clear links between evidence, analysis and conclusion, backed by a full audit trail.",
      "That strengthens your firm\u2019s position in SRA audits and internal reviews. It also stops issues slipping through the cracks.",
    ],
  },
  {
    id: "consistency",
    title: "Create consistency across your team",
    body: "Same standard. Every file. Every time.",
    detail: [
      "CMRAs today get completed inconsistently across firms. It\u2019s a function of differing experience, training and interpretation of the guidance.",
      "Corepliance applies the same evidence-based reasoning to every matter, so AML assessments are approached in a standardised way across every fee-earner. Final lawyer review and judgment are still preserved on every file.",
    ],
  },
  {
    id: "faster",
    title: "Start matters faster",
    body: "No more delays while AML is \u201Cbeing sorted.\u201D",
    detail: [
      "Under SRA guidance, no substantive legal work can start until the CMRA has been completed and signed off. AML delays therefore stall transactions directly.",
      "A standard purchase CMRA can take over two hours to gather, process and complete manually. Corepliance cuts that to minutes, letting lawyers start legal work far earlier in the lifecycle of a matter.",
    ],
  },
  {
    id: "client",
    title: "Improve client experience from day one",
    body: "Faster onboarding. Less back and forth. More confidence.",
    detail: [
      "AML onboarding is a common source of early friction, particularly when large volumes of financial information are requested without clear explanation.",
      "Removing that burden and accelerating CMRA completion lets the lawyer-client relationship begin from a position of progress rather than delay, lifting early engagement and overall satisfaction.",
    ],
  },
  {
    id: "cost",
    title: "Cost neutral",
    body: "Covered through existing AML/ID admin charges.",
    detail: [
      "Most firms already charge clients an AML or ID admin fee, typically \u00a325 to \u00a350 plus VAT per client.",
      "Corepliance\u2019s per-use pricing is designed to sit inside that existing charge, so firms can adopt the platform without touching profitability. The cost is fully recovered through standard disbursements.",
    ],
  },
];

export default function HoursSaved() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="bg-[var(--brand-navy)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[30px] font-medium leading-tight md:text-[44px] lg:text-[52px]">
          Save 20+ hours per lawyer, per month.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-lato)] text-sm font-light text-[var(--brand-vivid)] md:text-base">
          Time currently lost to manual checks, chasing documents and writing up risk assessments.
        </p>

        <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const isOpen = openId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(c.id)}
                className={`group flex w-full min-h-[210px] flex-col overflow-hidden rounded-sm border border-[var(--brand-vivid)] px-6 py-7 text-left transition-colors ${
                  isOpen ? "bg-[var(--brand-vivid)]/[0.04]" : "hover:bg-[var(--brand-vivid)]/[0.03]"
                }`}
              >
                <div className={isOpen ? "text-left" : "text-center"}>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-white md:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-lato)] text-sm font-light leading-relaxed text-[var(--brand-vivid)]">
                    {c.body}
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 mb-6 space-y-3 border-t border-[var(--brand-vivid)]/25 pt-5 text-left font-[family-name:var(--font-lato)] text-sm font-light leading-relaxed text-white/80">
                        {c.detail.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="mx-auto mt-auto flex flex-col items-center justify-center gap-1.5 rounded-md bg-[var(--brand-orange)] px-6 py-2.5 text-center font-[family-name:var(--font-lato)] text-[11px] font-bold uppercase tracking-[0.16em] text-white transition group-hover:brightness-95">
                  <span>{isOpen ? "Show less" : "Read more"}</span>
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L10 10L18 2"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
