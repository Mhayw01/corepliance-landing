import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[82vh] w-full overflow-hidden">
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
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-20 h-full">
        <div className="absolute left-[72px] top-[72px] h-[218px] w-[218px] overflow-hidden rounded-[50px]">
          <Image
            src="/assets/logo.svg"
            alt="Corepliance logo"
            width={218}
            height={218}
            priority
          />
        </div>
        <div className="flex h-full items-center">
          <div className="flex w-full items-end justify-between px-[72px] font-[Inter]">
            <div className="flex max-w-[560px] flex-col gap-6 text-white">
              <h1 className="text-4xl font-semibold">
                The AML compliance platform for conveyancing lawyers
              </h1>
              <p className="text-4xl font-semibold">
                Now inviting solicitors to join our beta testing programme
              </p>
              <p className="text-4xl font-semibold">Launching soon</p>
            </div>
            <div className="flex">
              <div className="flex h-[80px] w-[490px] items-center justify-center rounded-[20px] bg-[#5F66CA] text-3xl font-medium text-white">
                Contact us to find out more
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
