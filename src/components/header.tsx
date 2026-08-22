"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegClock, FaMap } from "react-icons/fa";

interface HeaderProps {
  username: string;
  description: string;
  time: string;
  location: string;
}

export default function Header({
  username,
  description,
  time,
  location,
}: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/40 shadow-md">
        <Image
          src="/images/favicon.jpg"
          alt="profile"
          fill
          sizes="(max-width: 768px) 96px, 112px"
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <h1 className="mt-3 text-xl text-text font-roboto-slab">{username}</h1>
      <p className="mt-3 text-sm text-text/70">{description}</p>
      <div className="mt-3 flex items-center gap-4 text-xs text-text/60 font-jetbrains">
        <span className="flex items-center gap-2">
          <FaRegClock className="w-3 h-3" /> {time}
        </span>

        <span className="flex items-center gap-2">
          <FaMap className="w-3 h-3" /> {location}
        </span>
      </div>
    </motion.div>
  );
}
