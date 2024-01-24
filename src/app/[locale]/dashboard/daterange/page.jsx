"use client";
import RangeChart from "@/app/ui/dashboard/Charts/RangeChart";
import { DateRangePicker } from "@/app/ui/dashboard/daterangepicker";
import { TablePicker } from "@/app/ui/dashboard/tablepicker";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const Page = () => {
  const t = useTranslations("DateRange");
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [rawData, setRawData] = useState(null);
  
  //Defining date handler
  const handleRangeChange = date => {
    setSelectedRange(date);
  };

  // Defining table handler
  const handleTableChange = table => {
    setSelectedTable(table);
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
        setRawData(data);
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
            className=" max-w-md text-3xl text-on-background dark:text-on-background-dark"
          >
            {t("title")}
          </h1>
        </div>
        <div id="dateRangeContainer" className="flex mt-2 md:mt-0">
          <TablePicker onTableChange={handleTableChange}/>
          <DateRangePicker onRangeChange={handleRangeChange} />
        </div>
      </div>
      {/* Line chart here */}
      <RangeChart 
        rawData={rawData}
        selectedTable={selectedTable}
        selectedRange={selectedRange}
        parameter={'entropy'}
      />
    </div>
  );
};

export default Page;
