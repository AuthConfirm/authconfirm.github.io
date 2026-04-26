"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function GSAPWrapper({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".animate-in", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <div
      ref={container}
      className="max-w-4xl w-full text-center flex flex-col items-center"
    >
      {children}
    </div>
  );
}
