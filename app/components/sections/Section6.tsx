"use client";

import Reveal from "../motion/Reveal";

export default function Section6() {
  return (
    <section className="relative h-[791px] w-full overflow-hidden bg-white">
      <div className="relative mx-auto h-full w-[1440px]">
        <Reveal
          delay={0}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="absolute left-[471px] top-[82px] text-4xl font-normal text-stone-600">
            Interested in taking part?
          </div>
        </Reveal>

        <Reveal
          delay={0.55}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="absolute left-[375px] top-[200px] w-[666px] whitespace-nowrap text-2xl font-normal text-stone-500">
            If you are a conveyancing solicitor or law firm interested in:
          </div>
        </Reveal>

        <Reveal
          delay={1.15}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="absolute left-[439px] top-[325px] w-[578px] text-2xl font-normal text-stone-500">
            <ul className="list-disc pl-6">
              <li>Reducing the AML burden on your team</li>
              <li>Improving consistency and compliance</li>
              <li>Helping shape a new AML compliance platform</li>
            </ul>
          </div>
        </Reveal>

        <Reveal
          delay={1.55}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="absolute left-[489px] top-[460px] text-center text-2xl font-normal text-stone-500">
            We'd love to speak with you.
            <br />
            Get in touch to discuss beta access.
          </div>
        </Reveal>

        <Reveal
          delay={1.95}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              aria-label="Contact us to join the beta programme"
              className="absolute left-[378px] top-[629px] h-20 w-[659px] rounded-[20px] bg-[#3073AF]"
            />
            <div className="pointer-events-none absolute left-[413px] top-[648px] text-3xl font-medium text-white">
              Contact us to join the beta programme
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
