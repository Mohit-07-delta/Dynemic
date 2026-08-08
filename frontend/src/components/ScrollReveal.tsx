"use client";

import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;      // maps to .reveal-delay-N
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount (e.g. hero), reveal immediately
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={["reveal", delayClass, className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
