"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaDiscord,
  FaTiktok,
  FaRegEnvelope,
  FaTv,
  FaInstagram,
} from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";

const FaSerializd = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-5 h-5 fill-none stroke-current stroke-2 text-text/60"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="24" r="21.5" />
    <path d="M28.529 7.096a3 3 0 0 0-3.674 2.122L17.349 37.23a3 3 0 1 0 5.796 1.553L30.65 10.77a3 3 0 0 0-2.121-3.675m-2.401 5.099l-6.183 23.075" />
  </svg>
);

const links = [
  {
    name: "Discord",
    handle: "jadebetty",
    href: "https://discord.com/users/758617912566087681",
    icon: FaDiscord,
  },
  {
    name: "TikTok",
    handle: "jadebetty_7261",
    href: "https://tiktok.com/@jadebetty_7261",
    icon: FaTiktok,
  },
  {
    name: "Instagram",
    handle: "jadebetty_694",
    href: "https://instagram.com/jadebetty694",
    icon: FaInstagram,
  },
  {
    name: "Letterboxd",
    handle: "jadebetty",
    href: "https://boxd.it/eNW6r",
    icon: FaLetterboxd,
  },
  {
    name: "Serializd",
    handle: "JadeBetty",
    href: "https://srlzd.com/u/JadeBetty",
    icon: FaSerializd,
  },
  {
    name: "Email",
    handle: "contact@homekirk.dev",
    href: "mailto:contact@homekirk.dev",
    icon: FaRegEnvelope,
  },
];

export default function LinkList() {
  return (
    <div className="flex flex-col divide-y divide-white/20">
      {links.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="group"
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 py-3 px-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <span className="w-6 h-6 flex items-center justify-center text-text/60 shrink-0">
              <link.icon className="w-5 h-5" />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-ubuntu text-sm">@/{link.handle}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
