"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import DataOverview from "./dataoverview";


export function DetailsPanel(props) {
  const t = useTranslations("OneDate");

  const [buttonActive, setButtonActive] = useState("over");

  const handleButtonOver = () => {
    setButtonActive("over");
  };

  const handleButtonInactive = () => {
    setButtonActive("deta");
  };

  let data = props?.data;

  return (
    <div className="w-full h-full mt-4 flex flex-col px-2 pt-4 pb-6 border-2 border-surface dark:border-surface-dark rounded-md">
      <div className="w-full h-fit">
        <div className="h-fit md:h-10 flex flex-col md:flex-row md:items-center">
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
      <div className="w-full">
        <div className="w-full h-max">
          {buttonActive === "over" ? <DataOverview data={data} date={props.date}/> : <h1>Details</h1>}
        </div>
      </div>
    </div>
  );
}
