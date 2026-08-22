"use client";

import { useEffect, useState } from "react";

const FONTS = [
  "var(--font-jetbrains), monospace",
  "var(--font-roboto), sans-serif",
  "var(--font-open-sans), sans-serif",
  "var(--font-jakarta), sans-serif",
  "var(--font-poppins), sans-serif",
  "var(--font-lato), sans-serif",
  "var(--font-nunito), sans-serif",
  "var(--font-roboto-slab), serif",
  "var(--font-rubik), sans-serif",
  "var(--font-ubuntu), sans-serif",
  "var(--font-outfit), sans-serif",
  "var(--font-work-sans), sans-serif",
];

interface CyclingTextProps {
  text: string;
  intervalMs?: number;
}

export default function CyclingText({
  text,
  intervalMs = 350,
}: CyclingTextProps) {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % FONTS.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <p
      className="text-6xl font-bold tracking-wide mt-2 transition-all duration-200 select-none"
      style={{ fontFamily: FONTS[fontIndex] }}
    >
      {text}
    </p>
  );
}
