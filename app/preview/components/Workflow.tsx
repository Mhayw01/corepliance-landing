import Image from "next/image";

const bullets = [
  "High caseloads",
  "Tight timelines",
  "Regulatory pressure",
  "The need to get it right, every time",
];

export default function Workflow() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:justify-end lg:pl-16 lg:pr-20">
          <div className="w-full max-w-lg">
            <h2 className="font-[family-name:var(--font-playfair)] text-[32px] font-medium leading-tight text-[var(--brand-navy)] md:text-[40px] lg:text-[46px]">
              It fits into your workflow, not the other way around.
            </h2>
            <p className="mt-6 font-[family-name:var(--font-lato)] text-base font-light leading-relaxed text-[var(--brand-navy)]/85 md:text-lg">
              Corepliance has been built by an experienced conveyancing solicitor and
              former MLRO who understands the reality of:
            </p>

            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[11px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-navy)]" />
                  <span className="font-[family-name:var(--font-lato)] text-base text-[var(--brand-navy)] md:text-[17px]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative min-h-[320px] md:min-h-[480px] lg:min-h-[600px]">
          <Image
            src="/assets/v2/workflow-woman.jpg"
            alt="Conveyancing solicitor writing notes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
