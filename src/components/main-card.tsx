"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import LinkList from "./linklist";
import AdditionalLinks from "./additional-links";

export default function MainCard() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Phnom_Penh",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: "min(90vw, 600px)" }}
      className="p-6 md:p-10 bg-white/30 backdrop-blur-md rounded-3xl shadow-xl border border-white/20"
    >
      <Header
        username="jadebetty"
        description="15, have a nice life!"
        time={currentTime}
        location="legend cinema"
      />
      <hr className="my-4 border-white/30" />
      <LinkList />
      <hr className="my-4 border-white/30" />
      <AdditionalLinks />
    </motion.div>
  );
}
