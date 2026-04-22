import Image from "next/image";

const bullets = [
  "Performs ID checks",
  "Collates Source of Funds evidence",
  "Highlights inconsistencies and gaps",
  "Drafts structured risk assessment narratives",
];

function Check() {
  return (
    <Image
      src="/assets/v2/icon-light.png"
      alt=""
      aria-hidden
      width={24}
      height={24}
      className="mt-1 h-5 w-5 flex-shrink-0"
    />
  );
}

export default function BuiltByLawyers() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Desktop: image bleeds to right edge with soft left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block lg:w-[55%] xl:w-[52%]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
        }}
      >
        <Image
          src="/assets/v2/lawyers-feature.jpg"
          alt="Lawyer working on a laptop"
          fill
          sizes="55vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative z-10 lg:col-span-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-[34px] font-medium leading-tight text-[var(--brand-navy)] md:text-[44px] lg:text-[52px]">
            Built by lawyers,
            <br />
            for lawyers.
          </h2>
          <p className="mt-6 max-w-lg font-[family-name:var(--font-lato)] text-base font-light leading-relaxed text-[var(--brand-navy)]/80 md:text-lg">
            Corepliance acts as a compliance co-pilot, understanding the detail,
            collating the documents and presenting everything clearly so you can
            make informed decisions.
          </p>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-lato)] text-base font-semibold leading-relaxed text-[var(--brand-navy)] md:text-lg">
            It doesn&rsquo;t replace your judgement. It supports it.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check />
                <span className="font-[family-name:var(--font-lato)] text-base text-[var(--brand-navy)] md:text-lg">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-[family-name:var(--font-playfair)] text-[30px] font-medium leading-tight text-[var(--brand-navy)] md:text-[40px]">
            You&rsquo;re always in control.
          </p>
        </div>

        {/* Mobile/tablet image with soft edges */}
        <div className="lg:hidden">
          <div
            className="relative aspect-[4/5] w-full"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            }}
          >
            <Image
              src="/assets/v2/lawyers-feature.jpg"
              alt="Lawyer working on a laptop"
              fill
              sizes="90vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
