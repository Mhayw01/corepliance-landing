import Image from "next/image";

const features = [
  {
    title: "Evidence-led compliance",
    body: "Structured, regulator-ready Client & Matter Risk Assessments aligned to UK expectations.",
  },
  {
    title: "Faster, AI-assisted review",
    body: "Extracts and organises key financial data so you can review quickly, without cutting corners.",
  },
  {
    title: "ID, verification & Source of Funds",
    body: "Electronic ID checks and secure validation of ID and Source of Funds, including gifted deposits.",
  },
  {
    title: "Lawyer-led control",
    body: "Nothing is automated without oversight. Every assessment is reviewed, edited and signed off by you.",
  },
  {
    title: "Built for conveyancing matters",
    body: "Supports purchase, sale, remortgage and combined matters — designed for real workflows.",
  },
  {
    title: "Audit-ready and secure",
    body: "Clear audit trails, UK-hosted encrypted data and automatic deletion after 60 days.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      {/* Desktop: phone+hex mockup — matches PDF (visible ~50% viewport, bleeds ~10% past right) */}
      <div
        className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 lg:block"
        style={{ right: "-10vw", width: "60vw", maxWidth: "1400px" }}
      >
        <Image
          src="/assets/v2/mockup-iphones.png"
          alt=""
          width={1400}
          height={980}
          sizes="60vw"
          priority
          className="h-auto w-full max-w-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        <div className="lg:max-w-[65%]">
          <h2 className="font-[family-name:var(--font-playfair)] text-[30px] font-medium leading-tight md:text-[42px] lg:text-[48px]">
            Everything you need to handle AML properly,{" "}
            <span className="text-[var(--brand-vivid)]">all in one place.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-16">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-white md:text-xl">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-sm font-[family-name:var(--font-lato)] text-sm font-light leading-relaxed text-[var(--brand-vivid)] md:text-[15px]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: phone+hex below the grid, centred */}
        <div className="mt-16 flex justify-center lg:hidden">
          <Image
            src="/assets/v2/mockup-iphones.png"
            alt="Corepliance on mobile"
            width={700}
            height={490}
            sizes="(max-width: 768px) 85vw, 60vw"
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
