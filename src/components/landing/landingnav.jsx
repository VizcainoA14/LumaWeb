import { Link } from "@/navigation";
import Image from "next/image";

export const LandingNav = () => {
  return (
    <nav className="
      font-archivo
      fixed top-6 left-1/2 transform -translate-x-1/2 
      flex items-center w-fit h-fit px-4 py-3 space-x-6 
      bg-surface-container-lowest-dark border-2 border-outline-variant-dark
      rounded-lg z-50"
    >
      {/* Luma logo */}
      <div id="brandContainer" className="flex items-center h-full">
        <svg
          className="w-4 h-auto"
          width="190"
          height="236"
          viewBox="0 0 190 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6484 127.177C40.6484 130.096 37.6266 132.013 35.0964 130.557C14.1222 118.488 -1.65548e-05 95.851 -1.65548e-05 69.9152C-1.65548e-05 31.3021 31.3021 0 69.9152 0C104.984 0 134.022 25.819 139.058 59.485C139.405 61.8042 137.553 63.818 135.208 63.818L44.6484 63.818C42.4392 63.818 40.6484 65.6088 40.6484 67.818V127.177Z"
            fill="#dfe3e7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M148.451 107.879C148.451 104.959 151.473 103.042 154.003 104.498C174.977 116.567 189.1 139.205 189.1 165.14C189.1 203.753 157.798 235.056 119.184 235.056C84.1158 235.056 55.0776 209.236 50.0419 175.571C49.695 173.251 51.5468 171.238 53.8918 171.238L144.451 171.238C146.66 171.238 148.451 169.447 148.451 167.238L148.451 107.879Z"
            fill="#dfe3e7"
          />
          <rect x="50" y="73" width="89" height="89" rx="6" fill="#dfe3e7" />
        </svg>
      </div>
      {[["Home", "/"], ["Dashboard", "/dashboard"], ["About", "/about"]].map(([text, url]) =>
        <Link href={url} key={url}>
          <p className="text-sm text-on-surface-variant-dark/60 hover:text-on-surface-variant-dark/100 transition-opacity">
            {text}
          </p>
        </Link>
      )}
    </nav>
  );
};
