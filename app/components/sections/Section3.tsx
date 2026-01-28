"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section3() {
  return (
    <section className="w-full h-[1151px] bg-white overflow-hidden flex justify-center">
      <div className="relative h-full w-[1440px]">
        <div className="hidden xl:block">
          <Reveal delay={0}>
            <div className="absolute left-[495px] top-[95px] text-4xl font-semibold text-[#3073AF]">
              What Corepliance does
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="absolute left-[502px] top-[216px] text-2xl font-normal text-stone-500">
              At beta stage, Corepliance supports:
            </div>
          </Reveal>
        </div>

        <div className="block xl:hidden text-center px-6 pt-20">
          <h2 className="text-[#3073AF] text-4xl font-semibold">
            What Corepliance does
          </h2>
          <p className="mt-8 text-stone-500 text-2xl font-normal">
            At beta stage, Corepliance supports:
          </p>
        </div>

        <div className="absolute left-1/2 top-[293px] w-full max-w-[720px] -translate-x-1/2">
          <Reveal delay={0.35}>
            <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/evidence-led.svg"
                  alt="Evidence-led icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Evidence-led Compliance
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  Evidence-based CMRA drafting aligned to UK regulatory
                  expectations
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/identity.svg"
                  alt="Identity icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Identity &amp; Verification
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  Electronic ID checking and secure ID &amp; Source of Funds
                  validation, including gifted deposits
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/matter.svg"
                  alt="Matter icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Matter Coverage
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  Purchase, sale, sale &amp; purchase, and remortgage matters
                  supported
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/ai.svg"
                  alt="AI icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  AI Assistance
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  AI-assisted extraction of key financial data to support faster
                  review
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/lawyer.svg"
                  alt="Lawyer icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Lawyer Control
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  Full lawyer review, control and approval before any decision
                  is finalised
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/audit.svg"
                  alt="Audit icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Audit &amp; Oversight
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  Clear audit trails for internal review and regulatory scrutiny
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] items-center gap-6">
              <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                <Image
                  src="/assets/data.svg"
                  alt="Data icon"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold leading-6 text-[#3073AF]">
                  Data Security
                </div>
                <div className="text-base font-medium leading-6 text-stone-500">
                  UK-hosted, encrypted data, automatically deleted after 60 days
                </div>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal delay={0.75}>
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const win = window as Window & {
                    openContactModal?: () => void;
                  };
                  if (win.openContactModal) {
                    win.openContactModal();
                  } else {
                    window.dispatchEvent(new Event("open-contact"));
                  }
                }}
                className="flex h-20 w-[498px] items-center justify-center rounded-[20px] bg-[#3073AF] text-3xl font-medium text-white"
              >
                Contact us to find out more
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
