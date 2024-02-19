"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Index() {
  const heroTitle = useRef();
  const t = useTranslations("Landing");

  // Using Gsap
  useGSAP(() => {
    gsap.from(".tLetter", {
      y:300,
      stagger: 0.1,
    }, { scope: heroTitle})
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
          alt="Luma Multiple Color Sun Background"
        />
        <div
          id="heroTitles"
          className="absolute text-[14vw] font-bold text-on-background-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: "Clash" }}
        >
          <div className="titleWrapper h-fit overflow-hidden">
            <div ref={heroTitle} id="heroTitle" className="flex leading-none">
              <p className="tLetter">L</p>
              <p className="tLetter">U</p>
              <p className="tLetter">M</p>
              <p className="tLetter">A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
