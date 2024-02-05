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
  let url171, url195, url284, url304, urlhmiigr, urlhmimag;

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

  // Defining function tu get the data from API
  const getData = () => {
    fetch(`/api/get-data?date=${fixedDate}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  };

  // Getting the data from the API
  useEffect(
    () => {
      getData();
    },
    [selectedDate]
  );

  // Defining the function to get the url of the image
  const getImage = (table, date) => {
    for (let i = 0; i < table.rows.length; i++) {
      let dateObj = table.rows[i].date.split(" ")[0];
      if(dateObj === date) {
        return table.rows[i].url;
      }
    }
    return "";
  }

  // Getting the urls of the images
  if(data) {
    url171 = getImage(data.data171, fixedDate);
    url195 = getImage(data.data195, fixedDate);
    url284 = getImage(data.data284, fixedDate);
    url304 = getImage(data.data304, fixedDate);
    urlhmiigr = getImage(data.datahmiigr, fixedDate);
    urlhmimag = getImage(data.datahmimag, fixedDate);
  }

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
      <div id="sunImagesContainer" className="scrollable w-full flex gap-4 xl:gap-2 justify-between pt-4 border-t-2 border-outline overflow-x-scroll 2xl:overflow-hidden">
        <div id="eitContainer" className="flex gap-4 xl:gap-2">
          <SunImage table="eit171" image={url171} description={t('description171')}/>
          <SunImage table="eit195" image={url195} description={t('description195')}/>
          <SunImage table="eit284" image={url284} description={t('description284')}/>
          <SunImage table="eit304" image={url304} description={t('description304')}/>
        </div>
        <div id="hmiContainer" className="flex gap-4 xl:gap-2">
          <SunImage table="hmiigr" image={urlhmiigr} description={t('descriptionIgr')}/>
          <SunImage table="hmimag" image={urlhmimag} description={t('descriptionMag')}/>
        </div>
      </div>

      {/* Details panel here */}
      <div className="h-fit">
        <DetailsPanel data={data} date={fixedDate}/>
      </div>
    </div>
  );
};

export default Page;
