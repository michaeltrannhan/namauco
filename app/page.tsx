"use client";
// import { ModeToggle } from "@/components/modeToggler";
import { motion, useScroll } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import Image from "next/image";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <div className="container grid h-[2400px]">
      This is the const first
      {/* <ModeToggle /> */}
    </div>
  );
}
