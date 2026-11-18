import Image from "next/image";

type LogoProps = { className?: string; priority?: boolean };

/** logo-kaasen.png is 180×48 — height is set via className, width follows. */
export function Logo({ className = "h-10 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-kaasen.png"
      alt="Medizintechnik Kaasen"
      width={180}
      height={48}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
