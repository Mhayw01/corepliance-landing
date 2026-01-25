"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative h-72 w-full overflow-hidden">
      <Image
        src="/assets/section-5-back.svg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <Image
        src="/assets/logo.svg"
        alt=""
        width={160}
        height={160}
        className="absolute left-[59px] top-[69px] rounded-[50px]"
      />
    </footer>
  );
}
