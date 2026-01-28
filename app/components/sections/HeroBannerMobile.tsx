"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function HeroBannerMobile() {
  return (
    <section className="relative h-72 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner-image.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/banner-filter.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <Reveal
        delay={0}
        viewportMargin="0px 0px 0px 0px"
        viewportAmount={0}
        className="absolute left-[15px] top-[18px] z-20"
      >
        <Image
          src="/assets/logo.svg"
          alt="Corepliance logo"
          width={57}
          height={57}
          className="rounded-[10px]"
        />
      </Reveal>
      <Reveal
        delay={0.4}
        viewportMargin="0px 0px 0px 0px"
        viewportAmount={0}
        className="absolute left-1/2 top-[86px] z-20 w-80 -translate-x-1/2"
      >
        <div className="text-center text-xl font-semibold text-white">
          The AML compliance platform for conveyancing lawyers
        </div>
      </Reveal>
      <Reveal
        delay={0.8}
        className="absolute left-1/2 top-[142px] z-20 w-72 -translate-x-1/2"
      >
        <div className="text-center text-xl font-semibold text-white">
          Now inviting solicitors to join our beta testing programme
        </div>
      </Reveal>
      <Reveal
        delay={1.2}
        className="absolute left-1/2 top-[201px] z-20 w-44 -translate-x-1/2"
      >
        <div className="text-center text-xl font-semibold text-white">
          Launching soon
        </div>
      </Reveal>
      <Reveal
        delay={1.6}
        className="absolute left-1/2 top-[236px] z-20 w-72 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-contact"))}
          className="flex h-8 w-full items-center justify-center rounded-[20px] bg-[#5F66CA] text-lg font-medium text-white"
        >
          Contact us to find out more
        </button>
      </Reveal>
    </section>
  );
}
