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
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const t = useTranslations("Landing");

  const handleBgLoad = () => {
    setIsBgLoaded(true);
  };

  // Using Gsap
  useGSAP(() => {
    //Animating the hero title
    gsap.from(".tLetter", {
      y: 300,
      stagger: 0.1
    });
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-[100svw] h-fit flex flex-col">

      {/* Hero section */}
      <div id="heroWrapper" className="w-fit h-fit">
        <div
          id="heroColor"
          className="relative w-[100svw] h-[100svh] flex bg-background-dark select-none"
        >
          {/* Sun image in the background of hero */}
          <Image
            src="/images/bgSunHero.webp"
            width={1280}
            height={720}
            className="absolute w-full h-full object-cover z-0 select-none"
            alt="Luma Multiple ColorSun Background"
            onLoad={handleBgLoad}
          />

          {/* Hero principal titles */}
          <div
            id="heroTitles"
            className="absolute text-[20vw] font-bold text-on-background-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ fontFamily: "Clash" }}
          >
            <div className="titleWrapper h-fit overflow-hidden">
              <div id="heroTitle" className="flex leading-none">
                <p className="tLetter">L</p>
                <p className="tLetter">U</p>
                <p className="tLetter">M</p>
                <p className="tLetter">A</p>
              </div>
            </div>
          </div>

          {/* Hero bottom text */}
          <div id="heroBottomTextWrapper">
            <p
              id="heroBottomText"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 text-2xl font-normal text-center text-on-background-dark"
              style={{ fontFamily: "Clash" }}
            >
              Luma has arrived to be the easiest way to <br /> study sun
              activity
            </p>
          </div>
        </div>

        {/* GrayScale section */}
      </div>

      {/* Main content */}
      <div className="w-screen h-screen bg-background-dark" />
    </div>
  );
}
