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
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const t = useTranslations("Landing");

  return (
    <div className="w-[100svw] h-fit flex flex-col bg-black">
      <header className="relative w-full h-[100svh] flex">
        {/*Titles*/}
        <div
          id="landingTitlesContainer"
          className="z-10 flex flex-col text-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h1
            className="w-[60svw] text-6xl font-bold text-on-background-dark/95"
            style={{ fontFamily: "clash" }}
          >
            {t("title")}
          </h1>
          <h3
            className="mt-2 text-xl text-on-background-dark/95"
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
        {/* Gradient component*/}
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          className="w-full h-full absolute top-0 left-0 z-0"
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%230f1417&bgColor2=%230f1417&brightness=0.8&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%238dcff1&color2=%23464364&color3=%23c8c2ea&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false"
          />
        </ShaderGradientCanvas>
      </header>
    </div>
  );
}
