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
import { LoadingLanding } from "@/components/landing/loadinglanding";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const t = useTranslations("Landing");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Establecer un temporizador de 2 segundos antes de permitir que se muestre el contenido
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    };

    // Verificar si todos los recursos ya han sido cargados
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <LoadingLanding />
    );
  }

  return (
    <main className="w-[100svw] h-fit flex flex-col bg-black">
      <header className="relative w-full h-[100svh] flex">
        {/* Titles */}
        <div
          id="landingTitlesContainer"
          className="z-10 w-full flex flex-col text-center items-center absolute p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h1
            className="w-full md:w-[60svw] text-3xl md:text-6xl font-bold text-on-background-dark/95"
            style={{ fontFamily: "clash" }}
          >
            {t("title")}
          </h1>
          <h3
            className="mt-2 text-base md:text-xl text-on-background-dark/95"
            style={{ fontFamily: "archivo" }}
          >
            {t("subtitle")}
          </h3>
          <Link href={"/dashboard"}>
            <button
              className="mt-4 font-semibold border-2 border-inverse-surface-dark text-inverse-surface-dark hover:bg-inverse-surface-dark hover:text-inverse-on-surface-dark transition-all"
              style={{ fontFamily: "clash" }}
            >
              {t("headercta")}
            </button>
          </Link>
        </div>
      </header>
    </main>
  );
}