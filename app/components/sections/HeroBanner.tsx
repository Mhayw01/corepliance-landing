"use client";

import Image from "next/image";
import { cubicBezier, motion, useReducedMotion } from "framer-motion";

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();
  const resolvedY = shouldReduceMotion ? 0 : 16;
  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 1.4,
    ease: shouldReduceMotion ? cubicBezier(0, 0, 0, 0) : cubicBezier(0.16, 1, 0.3, 1),
  };

  return (
    <section className="relative h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/banner-image.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
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
        <motion.div
            className="absolute left-[72px] top-[48px] h-[190px] w-[190px] overflow-hidden rounded-[50px]"
          initial={{ opacity: 0, y: resolvedY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: 0 }}
        >
          <Image
            src="/assets/logo.svg"
            alt="Corepliance logo"
              width={180}
              height={180}
            priority
          />
        </motion.div>
        <div className="flex h-full items-start">
          <div className="flex w-full items-start justify-between px-[72px] pt-[270px] font-[Inter]">
            <div className="flex max-w-[560px] flex-col gap-6 text-white">
              <motion.h1
                className="text-3xl font-semibold"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 0.5 }}
              >
                The AML compliance
                <br />
                platform for
                <br />
                conveyancing lawyers
              </motion.h1>
              <motion.p
                className="text-3xl font-semibold"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 1.0 }}
              >
                Now inviting solicitors
                <br />
                to join our
                <br />
                beta testing programme
              </motion.p>
              <motion.p
                className="text-3xl font-semibold"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 1.5 }}
              >
                Launching soon
              </motion.p>
            </div>
            <div className="flex self-end">
              <motion.button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-contact"))}
                className="relative z-30 flex h-[80px] w-[490px] cursor-pointer items-center justify-center rounded-[20px] bg-[#5F66CA] text-3xl font-medium text-white"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 2.0 }}
              >
                Contact us to find out more
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
