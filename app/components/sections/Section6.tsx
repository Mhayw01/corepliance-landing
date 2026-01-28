"use client";

import Reveal from "../motion/Reveal";

export default function Section6() {
  return (
    <section className="relative h-[791px] w-full overflow-hidden bg-white flex justify-center">
      <div className="hidden xl:block">
        <div className="relative h-full w-[1440px]">
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
      </div>

      <div className="block xl:hidden px-6 py-20 text-center">
        <Reveal
          delay={0}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="text-4xl font-normal text-stone-600">
            Interested in taking part?
          </div>
        </Reveal>

        <Reveal
          delay={0.55}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="mx-auto mt-8 max-w-[900px] text-2xl font-normal text-stone-500">
            If you are a conveyancing solicitor or law firm interested in:
          </div>
        </Reveal>

        <Reveal
          delay={1.15}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <ul className="mx-auto mt-10 max-w-[720px] list-disc pl-6 text-left text-2xl text-stone-500 font-normal">
            <li>Reducing the AML burden on your team</li>
            <li>Improving consistency and compliance</li>
            <li>Helping shape a new AML compliance platform</li>
          </ul>
        </Reveal>

        <Reveal
          delay={1.55}
          viewportAmount={0.85}
          viewportMargin="-300px 0px -300px 0px"
        >
          <div className="mx-auto mt-10 max-w-[900px] text-2xl font-normal text-stone-500">
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
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            aria-label="Contact us to join the beta programme"
            className="mx-auto mt-10 h-20 w-full max-w-[659px] rounded-[20px] bg-[#3073AF] text-3xl font-medium text-white"
          >
            Contact us to join the beta programme
          </button>
        </Reveal>
      </div>
    </section>
  );
}
