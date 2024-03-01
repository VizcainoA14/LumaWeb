"use client"

import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { DatePicker } from "@/app/ui/dashboard/datepicker";
import { DetailsPanel } from "@/app/ui/dashboard/detailspanel";
import SunImage from "@/app/ui/dashboard/sunimage";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState(null);
  const t = useTranslations("OneDate");

  // Defining the function to get the url of the image
  const getImage = (table, date) => {
    if (!table || !date) return ""; // Handle cases where either table or date is null

    for (let i = 0; i < table.rows.length; i++) {
      let dateObj = table.rows[i].date.split(" ")[0];
      if (dateObj === date) {
        return table.rows[i].url;
      }
    }
    return "";
  };

  // Date handling functions
  const handleDateChange = (date) => setSelectedDate(date);
  const fixDate = (date) => date && `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDate) {
          const response = await fetch(`/api/get-data?date=${fixDate(selectedDate)}`);
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  // Animation with GSAP
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#titleOneDate", { text: t('title'), duration: 0.6 })
      .to("#oneDatePicker", { x: 0, opacity: 100, duration: 0.5, ease: "expo.out" });

    ["eit171", "eit195", "eit284", "eit304", "eithmiigr", "hmimag"].forEach((csun, index) => {
      gsap.to(`.${csun}`, { y: 0, duration: 0.5 + index * 0.1, ease: "back.inOut(1.7)" });
    });
  });

  // Rendering components
  return (
    <div className="w-full h-fit flex flex-col md:p-2">
      {/* Header */}
      <div id="nav" className="w-full h-fit font-semibold flex flex-col mb-4 md:flex-row md:justify-between md:items-center">
        <div id="titleContainer">
          <h1 id="titleOneDate" className="text-3xl text-on-background dark:text-on-background-dark"></h1>
        </div>
        <div id="dateContainer" className="flex mt-2 md:mt-0">
          <DatePicker onDateChange={handleDateChange} />
        </div>
      </div>

      {/* Sun images */}
      <div id="sunImagesContainer" className="scrollable relative w-full flex gap-4 xl:gap-2 justify-between pt-4 border-t border-outline overflow-x-scroll 2xl:overflow-hidden overflow-y-hidden">
        <div id="eitContainer" className="flex gap-4 xl:gap-2">
          {["171", "195", "284", "304"].map((table) => (
            <SunImage key={table} csun={`eit${table}`} table={`eit${table}`} image={data && data[`data${table}`] ? getImage(data[`data${table}`], fixDate(selectedDate)) : ""} description={t(`description${table}`)} />
          ))}
        </div>
        <div id="hmiContainer" className="flex gap-4 xl:gap-2">
          <SunImage csun="eithmiigr" table="hmiigr" image={data && data.datahmiigr ? getImage(data.datahmiigr, fixDate(selectedDate)) : ""} description={t('descriptionIgr')} />
          <SunImage csun="hmimag" table="hmimag" image={data && data.datahmimag ? getImage(data.datahmimag, fixDate(selectedDate)) : ""} description={t('descriptionMag')} />
        </div>
      </div>

      {/* Details panel */}
      <div className="h-fit">
        <DetailsPanel data={data} date={fixDate(selectedDate)} />
      </div>
    </div>
  );
};

export default Page;
