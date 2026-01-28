"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

type BulletItem = {
  id: number;
  text: string;
  icon: string;
  iconClass: string;
  textClass: string;
};

const bulletItems: BulletItem[] = [
  {
    id: 1,
    text: "Use Corepliance on live matters",
    icon: "/assets/live.svg",
    iconClass: "absolute left-[397px] top-[387px] h-[44px] w-[44px]",
    textClass: "absolute left-[473px] top-[396px] text-2xl font-normal text-white",
  },
  {
    id: 2,
    text: "Shape product development and workflows",
    icon: "/assets/shape.svg",
    iconClass: "absolute left-[398px] top-[445px] h-[44px] w-[44px]",
    textClass: "absolute left-[473px] top-[459px] text-2xl font-normal text-white",
  },
  {
    id: 3,
    text: "Receive priority onboarding and support",
    icon: "/assets/receive.svg",
    iconClass: "absolute left-[398px] top-[508px] h-[44px] w-[44px]",
    textClass: "absolute left-[472px] top-[522px] text-2xl font-normal text-white",
  },
  {
    id: 4,
    text: "Influence the future direction of the platform",
    icon: "/assets/influence.svg",
    iconClass: "absolute left-[398px] top-[571px] h-[44px] w-[44px]",
    textClass: "absolute left-[473px] top-[585px] text-2xl font-normal text-white",
  },
];

export default function Section5() {
  return (
    <section className="relative h-[827px] w-full overflow-hidden flex justify-center">
      <Image
        src="/assets/section-5-back.svg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 h-full w-full">
        <div className="relative h-full w-[1440px]">
          <Reveal
            delay={0}
            viewportAmount={0.85}
            viewportMargin="-300px 0px -300px 0px"
          >
            <div className="absolute left-[501px] top-[124px] text-4xl font-normal text-white">
              Join the beta programme
            </div>
          </Reveal>
          <Reveal
            delay={0.55}
            viewportAmount={0.85}
            viewportMargin="-300px 0px -300px 0px"
          >
            <div className="absolute left-[259px] top-[244px] text-2xl font-normal text-white">
              We are currently onboarding a small number of conveyancing firms
              to participate
              <br />
              in our beta testing programme. Beta firms will:
            </div>
          </Reveal>

          <Reveal
            delay={1.15}
            viewportAmount={0.85}
            viewportMargin="-300px 0px -300px 0px"
          >
            <div>
              {bulletItems.map((item) => (
                <div key={item.id}>
                  <div className={item.iconClass}>
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className={item.textClass}>{item.text}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={1.75}
            viewportAmount={0.85}
            viewportMargin="-300px 0px -300px 0px"
          >
            <div className="absolute left-[443px] top-[668px] h-8 w-[539px] text-2xl font-normal text-white">
              There is no long-term commitment to take part.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
