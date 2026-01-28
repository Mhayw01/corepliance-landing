"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

const bulletItems = [
  {
    id: "live",
    icon: "/assets/live.svg",
    text: (
      <>
        Use Corepliance
        <br />
        on live matters
      </>
    ),
  },
  {
    id: "shape",
    icon: "/assets/shape.svg",
    text: (
      <>
        Shape product development
        <br />
        and workflows
      </>
    ),
  },
  {
    id: "receive",
    icon: "/assets/receive.svg",
    text: (
      <>
        Receive priority onboarding
        <br />
        and support
      </>
    ),
  },
  {
    id: "influence",
    icon: "/assets/influence.svg",
    text: (
      <>
        Influence the future
        <br />
        direction of the platform
      </>
    ),
  },
];

export default function Section5Mobile() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-cyan-700" />
      <Image
        src="/assets/section-5-back.svg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 mx-auto max-w-[420px] px-6 pt-10 pb-12 text-center text-white">
        <Reveal delay={0}>
          <div className="text-2xl font-normal">Join the beta programme</div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 text-base font-normal leading-6">
            We are currently onboarding a small number of conveyancing firms to
            participate in our beta testing programme.
            <br />
            <span className="mt-6 block font-semibold text-white">
              Beta firms will:
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mx-auto mt-4 max-w-[360px] space-y-6">
            {bulletItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 text-left">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-lg font-normal leading-tight text-white">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
