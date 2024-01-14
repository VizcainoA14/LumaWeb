"use client";
import pick from "lodash/pick";
import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { DatePicker } from "@/app/ui/dashboard/datepicker";
import { AccordionImages } from "@/app/ui/dashboard/accordionimages";
import { DetailsPanel } from "@/app/ui/dashboard/detailspanel";
import SunImage from "@/app/ui/dashboard/sunimage";
import { useState, useEffect} from "react";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [images, setImages] = useState(null);
  const t = useTranslations("Dash");

  // Defining a date handler
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  //Defining a date fixer
  const fixDate = date => {
    // Verifying if the date is null
    if (date === null) {
      return null;
    }

    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };

  // Fixing the date to be used in the API
  let fixedDate = selectedDate ? fixDate(selectedDate) : null;

  const getImages = () => {
    fetch(`/api/get-pictures?date=${fixedDate}`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  };

  useEffect(
    () => {
      getImages();
    },
    [selectedDate]
  );

  return (
    <div className="w-full h-screen flex flex-col md:p-2">
      <div
        id="nav"
        className="w-full h-fit flex flex-col mb-4 md:flex-row md:justify-between md:items-center"
      >
        <div id="titleContainer">
          <h1
            id="titleOneDate"
            className="text-3xl text-on-background dark:text-on-background-dark"
          >{t('title')}</h1>
        </div>
        <div id="dateContainer" className="flex mt-2 md:mt-0">
          <DatePicker onDateChange={handleDateChange} />
        </div>
      </div>
      <div className="w-full flex gap-2 justify-between pt-4 border-t-2 border-outline overflow-x-scroll md:overflow-hidden">
        <div id="eitContainer" className="flex gap-4">
          <SunImage table="eit171" images={images} />
          <SunImage table="eit195" images={images} />
          <SunImage table="eit284" images={images} />
          <SunImage table="eit304" images={images} />
        </div>
        <div id="hmiContainer" className="flex gap-4">
          <SunImage table="hmiigr" images={images} />
          <SunImage table="hmimag" images={images} />

        </div>
      </div>
    </div>
  );
};

export default Page;
