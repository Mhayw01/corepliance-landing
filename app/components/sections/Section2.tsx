"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section2() {
  return (
    <section className="w-full">
      <div className="w-full min-h-[714px] bg-white">
        <div className="grid h-full min-h-[714px] w-full grid-cols-2 items-stretch gap-0">
          <Reveal className="h-full w-full" delay={0}>
            <div className="relative h-full w-full">
              <Image
                src="/assets/section-2-1.svg"
                alt="AML compliance workflow illustration"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex h-full w-full flex-col justify-start px-[72px] pb-[48px] pt-[48px]">
            <Reveal delay={0.18}>
              <h2 className="text-3xl font-semibold text-[#3073AF]">
                AML Compliance shouldn’t take up all of a lawyer’s time
              </h2>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-6 flex flex-col gap-6 text-xl font-medium leading-7 text-stone-500">
                <p>AML compliance shouldn’t consume your fee-earning time.</p>
                <p>
                  Every conveyancing matter requires a fully reasoned Client &
                  Matter Risk Assessment.
                </p>
                <p>
                  Yet for many law firms Risk Assessments now absorb hours per
                  file, delay progress, frustrate clients, and expose firms to
                  regulatory risk.
                </p>
                <p>
                  Corepliance is a new AML compliance platform designed to
                  change that.
                </p>
                <p>
                  We help conveyancing lawyers complete consistent,
                  regulator-ready Client & Matter Risk Assessments in minutes
                  rather than hours—without removing professional judgment or
                  control.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[718px] overflow-hidden">
        <Image
          src="/assets/section-5-back.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 grid h-full min-h-[718px] w-full grid-cols-2 items-stretch gap-0">
          <div className="flex h-full w-full flex-col justify-start px-[72px] pb-[72px] pt-[72px]">
            <Reveal delay={0.18}>
              <h2 className="text-3xl font-semibold text-white">
                Built by lawyers, for lawyers
              </h2>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-6 flex flex-col gap-6 text-xl font-normal leading-7 text-white">
                <p>
                  Corepliance has been designed by an experienced conveyancing
                  solicitor and former MLRO who understands the realities of
                  modern AML compliance.
                  <br />
                  Rather than replacing legal decision-making, Corepliance acts
                  as a compliance co-pilot:
                </p>
                <p>
                  Analysing AML documentation – including ID and Source of Funds
                  evidence
                  <br />
                  Highlighting inconsistencies and gaps
                  <br />
                  Drafting evidence-grounded Risk Assessment narratives capable
                  of being quickly checked & evidenced by fee earners
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
          <Reveal className="h-full w-full" delay={0}>
            <div className="relative h-full w-full">
              <Image
                src="/assets/section-2-2.svg"
                alt="Corepliance platform overview illustration"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
