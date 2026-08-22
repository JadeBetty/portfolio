"use client";

import Link from "next/link";

const extraLinks = [
  { name: "github", href: "https://github.com/jadebetty" },
  { name: "artwork", href: "https://pixiv.perennialte.ch/artworks/136022477" },
];

export default function AdditionalLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-x-2 text-[12px] font-jetbrains text-text/70">
      {extraLinks.map((link, i) => (
        <span key={link.name}>
          <Link
            href={link.href}
            target="_blank"
            className="underline underline-offset-2 hover:text-text transition-colors"
          >
            {link.name}
          </Link>
          {i < extraLinks.length - 1 && <span className="text-text/30">,</span>}
        </span>
      ))}
    </div>
  );
}
