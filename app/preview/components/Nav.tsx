import Image from "next/image";
import { CtaPill } from "./Button";

type NavProps = {
  variant?: "dark" | "light";
};

export default function Nav({ variant = "dark" }: NavProps) {
  const logo = variant === "dark" ? "/assets/v2/logo-long-2tone.png" : "/assets/v2/logo-long-dark.png";
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" aria-label="Corepliance home" className="inline-flex items-center">
          <Image
            src={logo}
            alt="Corepliance"
            width={200}
            height={36}
            priority
            className="h-7 w-auto md:h-8"
          />
        </a>
        <CtaPill>Get started</CtaPill>
      </div>
    </header>
  );
}
