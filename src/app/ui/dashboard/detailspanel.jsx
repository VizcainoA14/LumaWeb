"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import DataOverview from "./dataoverview";

export function DetailsPanel(props) {
  const t = useTranslations("Dash");

  const [buttonActive, setButtonActive] = useState("over");

  const handleButtonOver = () => {
    setButtonActive("over");
  };

  const handleButtonInactive = () => {
    setButtonActive("deta");
  };

  let data = props?.data?.data171?.rows[0];

  return (
    <div className="w-full h-96 mt-4 flex flex-col px-2 pt-4 pb-6 border-2 border-surface dark:border-surface-dark rounded-md">
      <div className="w-full h-1/3">
        <div className="h-8 flex flex-col md:flex-row md:items-center">
          <h
            className="text-xl text-secondary dark:text-secondary-dark"
            style={{ fontFamily: "clash" }}
          >
            {t("titleDetails")}
          </h>
          <div className="pt-2 md:pl-4 flex gap-2" style={{ fontFamily: "clash" }}>
            <chip
              className={
                buttonActive === "over" ? "buttonActive" : "buttonData"
              }
              onClick={handleButtonOver}
            >
              {t("buttonOverview")}
            </chip>
            <chip
              className={
                buttonActive === "deta" ? "buttonActive" : "buttonData"
              }
              onClick={handleButtonInactive}
            >
              {t("buttonDetails")}
            </chip>
          </div>
        </div>
      </div>
      <div className="w-full h-2/3">
        <div className="w-full h-2/3">
          {buttonActive === "over" ? <DataOverview data={data} /> : <h1>Details</h1>}
        </div>
      </div>
    </div>
  );
}
