"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section2Mobile() {
  return (
    <section className="w-full bg-white">
      <Reveal delay={0}>
        <div className="relative w-full aspect-square">
          <Image
            src="/assets/section-2-1.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <div className="mx-auto max-w-[420px] space-y-10 px-4 py-10">
        <Reveal delay={0.25}>
          <h2 className="text-center text-2xl font-semibold text-[#3073AF]">
            AML Compliance shouldn’t take up all of a lawyer’s time
          </h2>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="space-y-4 text-base font-medium leading-7 text-[#7D6A6A]">
            <p>AML compliance shouldn’t consume your fee-earning time.</p>
            <p>
              Every conveyancing matter requires a fully reasoned Client &amp;
              Matter Risk Assessment.
            </p>
            <p>
              Yet for many law firms Risk Assessments now absorb hours per file,
              delay progress, frustrate clients, and expose firms to regulatory
              risk.
            </p>
            <p>
              Corepliance is a new AML compliance platform designed to change
              that.
            </p>
            <p>
              We help conveyancing lawyers complete consistent, regulator-ready
              Client &amp; Matter Risk Assessments in minutes rather than
              hours—without removing professional judgment or control.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.95}>
        <div className="relative w-full aspect-square">
          <Image
            src="/assets/section-2-2.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="relative overflow-hidden py-10">
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-blue-500 to-cyan-700" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/section-5-back.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[420px] space-y-6 px-4">
          <Reveal delay={1.2}>
            <h2 className="text-2xl font-semibold text-white">
              Built by lawyers, for lawyers
            </h2>
          </Reveal>
          <Reveal delay={1.5}>
            <div className="space-y-4 text-lg font-normal leading-7 text-white">
              <p>
                Corepliance has been designed by an experienced conveyancing
                solicitor and former MLRO who understands the realities of
                modern AML compliance.
                <br />
                Rather than replacing legal decision-making, Corepliance acts as
                a compliance co-pilot:
              </p>
              <p>
                Analysing AML documentation – including ID and Source of Funds
                evidence
                <br />
                Highlighting inconsistencies and gaps
                <br />
                Drafting evidence-grounded Risk Assessment narratives capable of
                being quickly checked &amp; evidenced by fee earners
                <br />
                Leaving final review, edits and sign-off entirely with the
                lawyer
              </p>
              <p>
                The result is faster onboarding, clearer audit trails and a
                consistent approach across every matter.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
