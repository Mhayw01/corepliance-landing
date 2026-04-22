import Image from "next/image";

export default function ValueProp() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-grey-blue)]">
      {/* Desktop: full laptop anchored to the left, large */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center lg:flex lg:w-[62%] xl:w-[60%]">
        <div className="relative h-[82%] w-full">
          <Image
            src="/assets/v2/corepliance-client-portal-laptop.svg"
            alt=""
            fill
            sizes="60vw"
            priority
            className="object-contain object-left"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Mobile / tablet: contained laptop on top */}
        <div className="pt-14 md:pt-16 lg:hidden">
          <div className="relative mx-auto aspect-[1800/1100] w-full max-w-xl">
            <Image
              src="/assets/v2/corepliance-client-portal-laptop.svg"
              alt="Corepliance client portal running on a laptop"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Copy — right column on desktop, full-width on mobile */}
        <div className="grid grid-cols-12 py-14 md:py-20 lg:py-28">
          <div className="col-span-12 lg:col-start-8 lg:col-span-5">
            <p className="font-[family-name:var(--font-playfair)] text-[26px] leading-snug text-[var(--brand-navy)] md:text-[30px]">
              Corepliance takes the heavy lifting out of AML, helping you complete
              clear, compliant risk assessments in minutes instead of hours.
            </p>
            <p className="mt-6 font-[family-name:var(--font-playfair)] text-[22px] font-semibold leading-snug text-[#2535C9] md:text-[24px]">
              Fast, simple and far less stressful.
            </p>
            <p className="mt-6 font-[family-name:var(--font-lato)] text-base font-light leading-relaxed text-[var(--brand-navy)] md:text-[17px]">
              AML compliance is eating into valuable fee-earning time, with risk
              assessments taking hours and slowing the conveyancing process down.
            </p>
            <p className="mt-4 font-[family-name:var(--font-lato)] text-base font-light leading-relaxed text-[var(--brand-navy)] md:text-[17px]">
              It creates delays, frustrates clients and adds pressure to get things
              right every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
