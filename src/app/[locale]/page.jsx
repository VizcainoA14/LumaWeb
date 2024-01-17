import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Landing");
  return (
    <div className="w-screen h-fit flex">
      <div id="header" className="w-full h-[100svh] flex-col md:flex-row">
        <div
          id="Hero"
          className="w-full md:h-3/5 relative flex md:items-center p-2 md:p-14  flex-col md:flex-row"
        >
          <div
            className="md:w-2/3 md:h-full flex flex-col "
            style={{ fontFamily: "Clash" }}
          >
            <h1 className=" self-center text-1xl md:text-5xl p-1">{t("title")}</h1>
            <button className="bg-on-background text-background mt-4">
              Get started
            </button>
          </div>
          <div
            className="md:w-1/3 md:h-full flex items-start  p-3 md:p-1 text-1xl md:items-start "
            style={{ fontFamily: "Archivo" }}
          >
            <ul className="self-center text-on-background/60">
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
