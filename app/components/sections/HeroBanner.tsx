"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function HeroBanner() {
  return (
    <section className="relative h-[82vh] w-full overflow-hidden">
      <Reveal className="absolute inset-0 z-0">
        <Image
          src="/assets/banner-image.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal className="absolute inset-0 z-10">
        <Image
          src="/assets/banner-filter.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>
      <div className="relative z-20 h-full">
        <Reveal
          className="absolute left-[48px] top-[40px] h-[160px] w-[160px] overflow-hidden rounded-[32px]"
          delay={0.05}
        >
          <Image
            src="/assets/logo.svg"
            alt="Corepliance logo"
            width={160}
            height={160}
            priority
          />
        </Reveal>
        <div className="flex h-full items-center">
          <div className="flex w-full items-end justify-between pl-[48px] pr-[72px]">
            <div className="flex max-w-[560px] flex-col gap-6 text-white mt-[192px]">
              <Reveal delay={0.6}>
                <h1 className="text-[34px] font-semibold leading-[38px]">
                  The AML compliance
                  <br />
                  platform for
                  <br />
                  conveyancing lawyers
                </h1>
              </Reveal>
              <Reveal delay={1.4}>
                <p className="text-[34px] font-semibold leading-[38px]">
                  Now inviting solicitors
                  <br />
                  to join our
                  <br />
                  beta testing programme
                </p>
              </Reveal>
              <Reveal delay={2.2}>
                <p className="text-[34px] font-semibold">Launching soon</p>
              </Reveal>
            </div>
            <Reveal className="flex" delay={2.8}>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-contact"))}
                className="flex h-[68px] w-[450px] items-center justify-center rounded-[20px] border-2 border-[#4F2C8C] bg-[#5F66CA] text-[26px] font-medium text-white"
              >
                Contact us to find out more
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
