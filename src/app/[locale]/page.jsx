"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { LoadingLanding } from "@/components/landing/loadinglanding";
import { LandingNav } from "@/components/landing/landingnav";
import HeroSection from "@/components/landing/heroSection";
import { FeaturesTabs } from "@/components/landing/featurestabs";
gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" }
];

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
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return <LoadingLanding />;
  }

  return (
    <main className="w-screen flex flex-col bg-shadow">
      <LandingNav />
      <HeroSection />

      {/* Landing content */}
      <div id="landingContentContainer" className="w-full px-4 xl:px-32">
        {/* feautures */}
        <section id="landingFeaturesSection" className="h-[100svh] pt-10 xl:pt-20">
          <div
            id="featuresTitlesContainer"
            className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-center"
          >
            <h2 className="text-on-background-dark font-clash font-semibold text-3xl xl:max-w-xl">
              {t('featuresTitle')}
            </h2>
            <p className="text-on-background-dark/60 font-archivo pt-3 text-lg xl:text-right xl:max-w-2xl">
              {t('featuresSubtitle')}
            </p>
          </div>
          <FeaturesTabs />
        </section>
      </div>
    </main>
  );
}
