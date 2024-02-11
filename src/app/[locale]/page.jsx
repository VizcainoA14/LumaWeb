import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function Index() {
  const t = useTranslations("Landing");
  return (
    <div className="w-screen h-fit flex">
      <div
        id="hero"
        className="relative w-[100svw] h-[100svh] bg-background-dark overflow-hidden"
      >
        <Image
          src="/images/bgSvg.svg"
          layout="fill"
          alt="Luma"
        />
        <div
          id="titlesContainer"
          className="absolute min-w-[60vw] flex flex-col items-center text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1
            className="text-6xl text-on-background-dark font-semibold"
            style={{ fontFamily: "Clash" }}
          >
            {t("title")}
          </h1>
          <h2
            className="text-2xl text-on-background-dark max-w-[40vw] mt-5"
            style={{ fontFamily: "Archivo" }}
          >
            Luma has arrived to be the most, powerfull, easy to use app to
            analisys what is happening in the sun.
          </h2>
          <Link href="/dashboard">
          <div
            className="bg-white text-background-dark flex items-center justify-between h-10 rounded-full w-fit mt-5 p-1"
            style={{ fontFamily: "Archivo" }}
          >
            <a className="pl-2 pr-6">Get Started</a>
            <div className="w-9 h-9 grid content-center bg-background-dark rounded-full">
              <ArrowTopRightIcon className="text-white"/>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
