"use client";
import { DateRangePicker } from "@/app/ui/dashboard/daterangepicker";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const Page = () => {
  const t = useTranslations("DateRange");
  const [selectedRange, setSelectedRange] = useState(null);
  const [data, setData] = useState(null);

  //Defining date handler
  const handleRangeChange = date => {
    setSelectedRange(date);
  };

  //Defining range fixer
  const fixRange = date => {
    // Verifying if the date is null
    if (date === null) {
      return null;
    }

    return {
      from: selectedRange.from.toISOString().split("T")[0],
      to: selectedRange.to.toISOString().split("T")[0]
    };
  };

  // getting data by range
  const getData = () => {
    fetch(`/api/get-range?startDate=${fixRange(selectedRange)?.from}&endDate=${fixRange(selectedRange)?.to}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  }

  useEffect(
    () => {
      getData();
    },
    [selectedRange]
  );

  return (
    <div className="w-full h-fit flex flex-col md:p-2">
      {/* Header or Navbar here */}
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
          <DateRangePicker onRangeChange={handleRangeChange} />
        </div>
      </div>
    </div>
  );
};

export default Page;
