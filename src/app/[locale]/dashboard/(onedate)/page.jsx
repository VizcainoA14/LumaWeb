"use client";
import { useTranslations } from "next-intl";
import { DatePicker } from "@/app/ui/dashboard/datepicker";
import { DetailsPanel } from "@/app/ui/dashboard/detailspanel";
import SunImage from "@/app/ui/dashboard/sunimage";
import { useState, useEffect} from "react";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState(null);
  const t = useTranslations("OneDate");

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

  const getData = () => {
    fetch(`/api/get-data?date=${fixedDate}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  };

  useEffect(
    () => {
      getData();
    },
    [selectedDate]
  );

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
          >{t('title')}</h1>
        </div>
        <div id="dateContainer" className="flex mt-2 md:mt-0">
          <DatePicker onDateChange={handleDateChange} />
        </div>
      </div>

      {/* Sun images here */}
      <div id="sunImagesContainer" className="scrollable w-full flex gap-4 xl:gap-2 justify-between pt-4 border-t-2 border-outline overflow-x-scroll xl:overflow-hidden">
        <div id="eitContainer" className="flex gap-4 xl:gap-2">
          <SunImage table="eit171" image={data?.data171?.rows[0]?.url} description={t('description171')}/>
          <SunImage table="eit195" image={data?.data195?.rows[0]?.url} description={t('description195')}/>
          <SunImage table="eit284" image={data?.data284?.rows[0]?.url} description={t('description284')}/>
          <SunImage table="eit304" image={data?.data304?.rows[0]?.url} description={t('description304')}/>
        </div>
        <div id="hmiContainer" className="flex gap-4 xl:gap-2">
          <SunImage table="hmiigr" image={data?.datahmiigr?.rows[0]?.url} description={t('descriptionIgr')}/>
          <SunImage table="hmimag" image={data?.datahmimag?.rows[0]?.url} description={t('descriptionMag')}/>
        </div>
      </div>

      {/* Details panel here */}
      <div className="h-fit">
        <DetailsPanel data={data}/>
      </div>
    </div>
  );
};

export default Page;
