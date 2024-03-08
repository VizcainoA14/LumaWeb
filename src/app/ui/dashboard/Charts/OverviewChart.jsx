import { useTranslations } from "next-intl";
import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Subtitle,
  Title
} from "@tremor/react";
import OneAnalytics from "../oneanalytics";

export default function OverChart(props) {
  const t = useTranslations("OverviewChart");
  let statistics = props.statistics;

  const colors = ["blue", "green", "yellow", "red", "orange", "gray"];

  if (!props.data || props.data.length === 0 || !props.data[0] || (Object.keys(props.data[0]).length === 1 && props.data[0].hasOwnProperty('name'))) {
    // Manejar el caso en que los datos no estén disponibles
    return <div className="w-full h-96 p-4 bg-surface animate-pulse"></div>;
  };

  let categories = Object.keys(props.data[0]).filter(key => key !== "name");

  return (
    <Card className="w-full h-fit rounded-2xl border border-surface bg-background dark:bg-background-dark dark:border-surface-dark p-4">
      <Title className="font-semibold text-xl" style={{ fontFamily: "Clash, open sans" }}>
        {t(`${props.parameter}Title`)}
      </Title>
      <Subtitle
        style={{ fontFamily: "Archivo" }}
        className="text-lg text-on-background/80 dark:text-on-background-dark md:max-w-[60vw]"
      >
        {t(`${props.parameter}Description`)}
      </Subtitle>
      <div className="flex flex-col md:flex-col xl:flex-row w-full h-full pt-6 gap-2">
        <BarChart
          className="w-full lg:w-full xl:w-2/3 border border-surface dark:border-surface-dark rounded-xl"
          data={props.data}
          index="name"
          categories={categories}
          colors={colors} // color hexadecimal para 'primary'
          tickGap={7}
          showAnimation={true}
          yAxisWidth={48}
          enableLegendSlider={true}
        />
        <OneAnalytics statistics={statistics}/>
      </div>
    </Card>
  );
}
