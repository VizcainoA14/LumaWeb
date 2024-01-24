"use client";
import RangeChart from "@/app/ui/dashboard/Charts/RangeChart";
import { DateRangePicker } from "@/app/ui/dashboard/daterangepicker";
import { TablePicker } from "@/app/ui/dashboard/tablepicker";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      .finally(() => {});
      // .catch(err => console.log(err))
  }

  useEffect(
    () => {
      getData();
    },
    [selectedRange, selectedTable]
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
        <div id="dateRangeContainer" className="flex mt-2 md:mt-0 gap-2">
          <TablePicker onTableChange={handleTableChange}/>
          <DateRangePicker onRangeChange={handleRangeChange} />
        </div>
      </div>

      {/* Line chart selector and Line chart here */}
      <Tabs defaultValue="entropy" className="w-full mt-4">
        <div className="scrollable w-full overflow-x-scroll xl:overflow-hidden">
          <TabsList
            className="text-secondary dark:text-secondary-dark border border-surface dark:border-surface-dark"
            style={{ fontFamily: "clash" }}
          >
            <TabsTrigger value="entropy">Entropy</TabsTrigger>
            <TabsTrigger value="mean_intensity">Mean Intensity</TabsTrigger>
            <TabsTrigger value="standard_deviation">
              Standard Deviation
            </TabsTrigger>
            <TabsTrigger value="fractal_dimension">
              Fractal Dimension
            </TabsTrigger>
            <TabsTrigger value="skewness">Skewness</TabsTrigger>
            <TabsTrigger value="kurtosis">Kurtosis</TabsTrigger>
            <TabsTrigger value="uniformity">Uniformity</TabsTrigger>
            <TabsTrigger value="relative_smoothness">
              Relative Smoothness
            </TabsTrigger>
            <TabsTrigger value="taruma_contrast">Tamura Contrast</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="entropy" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"entropy"}
          />
        </TabsContent>
        <TabsContent value="mean_intensity" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"mean_intensity"}
          />
        </TabsContent>
        <TabsContent value="standard_deviation" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"standard_deviation"}
          />
        </TabsContent>
        <TabsContent value="fractal_dimension" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"fractal_dimension"}
          />
        </TabsContent>
        <TabsContent value="skewness" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"skewness"}
          />
        </TabsContent>
        <TabsContent value="kurtosis" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"kurtosis"}
          />
        </TabsContent>
        <TabsContent value="uniformity" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"uniformity"}
          />
        </TabsContent>
        <TabsContent value="relative_smoothness" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"relative_smoothness"}
          />
        </TabsContent>
        <TabsContent value="taruma_contrast" className="">
          <RangeChart
            rawData={rawData}
            selectedTable={selectedTable}
            selectedRange={selectedRange}
            parameter={"taruma_contrast"}
          />
        </TabsContent>
      </Tabs>
      
    </div>
  );
};

export default Page;
