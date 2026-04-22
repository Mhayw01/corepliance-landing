import Image from "next/image";

export default function ReduceBurden() {
  return (
    <section className="bg-[var(--brand-grey-blue)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[480px] lg:min-h-[560px]">
          <Image
            src="/assets/v2/reduce-burden-man.jpg"
            alt="Conveyancing team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:justify-start lg:pr-16 lg:pl-20">
          <div className="w-full max-w-lg">
            <h2 className="font-[family-name:var(--font-playfair)] text-[30px] font-medium leading-tight text-[var(--brand-navy)] md:text-[38px] lg:text-[44px]">
              Reduce the AML burden, improve consistency and speed up the process.
            </h2>
            <p className="mt-6 font-[family-name:var(--font-lato)] text-base font-light leading-relaxed text-[var(--brand-navy)]/85 md:text-lg">
              We&rsquo;re currently onboarding a small group of conveyancing firms to
              help shape the platform ahead of full release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
