import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import '@/components/landing/landingStyles.css'

const HeroSection = () => {
  const t = useTranslations("Landing");
  return (
    <header className="relative w-full h-[100svh] flex n">
      {/* Titles */}
      <div
        id="landingTitlesContainer"
        className="z-10 w-full flex flex-col text-center items-center absolute p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="w-full md:w-[70svw] text-3xl md:text-5xl font-clash font-bold text-on-background-dark/95">
          {t("title")}
        </h1>
        <h3 className="mt-6 md:w-[70svw] lg:w-[50svw] font-archivo text-base md:text-xl text-on-background-dark/95">
          {t("subtitle")}
        </h3>
        <div id="headerCtASContainer" className="w-fit flex gap-2 mt-8">
          <Link href={"/dashboard"}>
            <button className=" font-archivo text-on-surface-dark border-2 border-outline-variant-dark bg-surface-container-lowest-dark hover:bg-surface-container-low-dark transition-colors">
              {t("aboutcta")}
            </button>
          </Link>
          <Link href={"/dashboard"}>
            <button className=" font-archivo text-on-surface bg-white hover:bg-surface-dim transition-colors">
              {t("headercta")}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
