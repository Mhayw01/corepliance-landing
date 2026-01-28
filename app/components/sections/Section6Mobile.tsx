"use client";

import Reveal from "../motion/Reveal";

export default function Section6Mobile() {
  return (
    <section className="w-full bg-white h-[588px]">
      <div className="mx-auto w-full max-w-[420px] px-6 py-10 text-center">
        <Reveal delay={0}>
          <h2 className="text-left text-2xl font-normal text-[#7D6A6A]">
            Interested in taking part?
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 text-left text-lg font-normal text-[#7D6A6A] leading-7">
            If you are a conveyancing solicitor or law firm interested in:
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <ul className="mx-auto mt-8 max-w-[320px] list-disc pl-6 text-left text-lg text-[#7D6A6A] leading-7">
            <li>Reducing the AML burden on your team</li>
            <li>Improving consistency and compliance</li>
            <li>Helping shape a new AML compliance platform</li>
          </ul>
        </Reveal>

        <Reveal delay={0.85}>
          <p className="mt-8 text-center text-lg font-normal text-[#7D6A6A] leading-7">
            We’d love to speak with you.
            <br />
            Get in touch to discuss beta access.
          </p>
        </Reveal>

        <Reveal delay={1.15}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="inline-flex items-center justify-center rounded-full bg-[#3073AF] px-8 py-4 text-lg font-semibold leading-snug text-white shadow-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Contact us to find out more
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
