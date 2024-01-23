"use client";
import { useTranslations } from "next-intl";

const Page = () => {

  const t = useTranslations("DateRange");

  return (
    <div className="w-full h-fit flex flex-col md:p-2">
      {/* Header here */}
      <div
        id="nav"
        className="w-full h-fit flex flex-col mb-4 md:flex-row md:justify-between md:items-center"
      >
        <div id="titleContainer">
          <h1
            id="titleOneDate"
            className="text-3xl text-on-background dark:text-on-background-dark"
          >
            {t("title")}
          </h1>
        </div>
        <div id="dateRangeContainer" className="flex mt-2 md:mt-0">
          
        </div>
      </div>
    </div>
  );
};

export default Page;
