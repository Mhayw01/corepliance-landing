import Image from "next/image";
import { CtaDark } from "./Button";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-vivid)]">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative py-20 md:py-28 lg:py-32">
          <h2 className="max-w-xl font-[family-name:var(--font-playfair)] text-[32px] font-medium leading-tight text-[var(--brand-navy)] md:text-[44px] lg:text-[52px]">
            If AML is slowing your team down, let&rsquo;s fix it.
          </h2>
          <div className="mt-8">
            <CtaDark>Register for early access</CtaDark>
          </div>

          {/* CTA cut-out — anchored bottom-right, fixed height */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[420px] w-[320px] lg:block xl:h-[460px] xl:w-[360px]">
            <Image
              src="/assets/v2/cta-man-cutout.png"
              alt=""
              fill
              sizes="360px"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
