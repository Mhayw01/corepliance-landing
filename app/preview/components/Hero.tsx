import Image from "next/image";
import Nav from "./Nav";
import { CtaButton } from "./Button";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <Nav />

      {/* Hero graphic — absolutely positioned flush-right, flush-bottom */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block lg:w-[55%] xl:w-[52%]">
        <div className="relative ml-auto h-full w-full max-w-[780px]">
          <Image
            src="/assets/v2/hero-graphic.png"
            alt=""
            fill
            priority
            sizes="55vw"
            className="object-contain object-bottom-right"
          />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-6 pt-20 md:px-10 md:pt-24 lg:grid-cols-12 lg:pt-28">
        {/* Copy column */}
        <div className="relative z-10 pb-16 md:pb-20 lg:col-span-7 lg:pb-28 lg:pr-6">
          <h1 className="max-w-[560px] font-[family-name:var(--font-playfair)] text-[32px] font-medium leading-[1.15] text-[var(--brand-vivid)] md:text-[40px] lg:text-[44px] xl:text-[48px]">
            Regulator-ready AML compliance in minutes, not hours.
          </h1>
          <p className="mt-5 max-w-sm font-[family-name:var(--font-lato)] text-[15px] font-light text-white/90">
            Corepliance saves lawyers time, stress and reduces risk.
          </p>
          <div className="mt-7">
            <CtaButton>Get started</CtaButton>
          </div>
        </div>

        {/* Mobile/tablet graphic */}
        <div className="relative pb-12 lg:hidden">
          <div className="relative ml-auto aspect-[4/3] w-full max-w-[480px]">
            <Image
              src="/assets/v2/hero-graphic.png"
              alt=""
              fill
              priority
              sizes="90vw"
              className="object-contain object-bottom-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
