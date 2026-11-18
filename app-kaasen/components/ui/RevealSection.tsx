"use client";

import { useEffect, useRef, useState } from "react";

type RevealSectionProps = React.ComponentPropsWithoutRef<"section">;

/** <section> that fades/slides in when it enters the viewport (disabled for reduced motion via CSS). */
export function RevealSection({ children, ...props }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} data-reveal data-revealed={revealed} {...props}>
      {children}
    </section>
  );
}
