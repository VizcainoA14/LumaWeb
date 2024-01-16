import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Landing");
  return (
    <div className="w-screen h-fit flex">
      <div id="header" className="w-full h-[100svh] md:flex-row">
        <div
          id="Hero"
          className="w-full h-3/5 relative flex items-center p-14 "
        >
          <div
            className="w-2/3 h-full flex flex-col"
            style={{ fontFamily: "Clash" }}
          >
            <h1 className="self-center text-5xl">{t("title")}</h1>
            <button className="bg-on-background text-background mt-4">
              Get started
            </button>
          </div>
          <div
            className="w-1/3 h-full flex flex-col justify-center"
            style={{ fontFamily: "Archivo" }}
          >
            <ul className="self-center">
              <li>Easy to use</li>
              <li>Powerfull</li>
              <li>Open to Everybody</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-2/5 bg-secondary grid grid-cols-3 gap-4">
          <div className="bg-gray-300 p-4 bg-primary-dark">Columna 1</div>
          <div className="bg-gray-300 p-4 bg-primary-container">Columna 2</div>
          <div className="bg-gray-300 p-4">Columna 3</div>
        </div>
      </div>
    </div>
  );
}
