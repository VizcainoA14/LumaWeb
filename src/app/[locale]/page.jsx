"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Index() {
  const t = useTranslations("Landing");

  // Using Gsap
  useGSAP(() => {

  });

  return (
    <div className="w-screen h-fit flex">
      <div
        id="hero"
        className="relative w-[100svw] h-[100svh] flex bg-background-dark select-none overflow-hidden"
      >
        <Image
          src="/images/bgSunHero.png"
          width={1729}
          height={1117}
          className="absolute w-full h-full object-cover z-0 select-none"
        />
        <div
          id="heroTitles"
          className="absolute text-[13.5vw] font-bold text-on-background-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: "Clash" }}
        >
          <div className="titleWrapper h-fit overflow-hidden">
            <h1 ref={heroTitle} id="heroTitle" className="leading-none">
              LUMA
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
