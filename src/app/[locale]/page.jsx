"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const t = useTranslations("Landing");

  return (
    <div className="w-[100svw] h-fit flex flex-col">
      
    </div>
  );
}
