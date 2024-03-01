"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import DataOverview from "./dataoverview";


export function DetailsPanel(props) {
  const t = useTranslations("OneDate");

  const [buttonActive, setButtonActive] = useState("over");

  let data = props?.data;

  return (
    <div className="w-full h-full mt-4 py-2 flex flex-col dark:border-surface-dark/50 rounded-xl">
      <div className="w-full h-fit">
        <div className="h-fit md:h-10 flex flex-col md:flex-row md:items-center">
          <h
            className="text-xl font-semibold text-on-background dark:text-on-background-dark"
            style={{ fontFamily: "clash" }}
          >
            {t("titleDetails")}
          </h>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-max">
          <DataOverview data={data} date={props.date}/>
        </div>
      </div>
    </div>
  );
}
