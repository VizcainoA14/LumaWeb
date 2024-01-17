import { useTranslations } from "next-intl";
import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Subtitle,
  Title
} from "@tremor/react";

export default function OverChart(props) {
  const t = useTranslations("OverviewChart");

  return (
    <Card className="w-full rounded-sm bg-background dark:bg-background-dark p-2">
      <Title style={{fontFamily: 'Clash'}} >{t(`${props.parameter}Title`)}</Title>
      <Subtitle style={{fontFamily: 'Archivo'}} className="md:max-w-[60vw]">
        {t(`${props.parameter}Description`)}
      </Subtitle>
      <BarChart
        className="mt-6"
        data={props.data}
        index="name"
        categories={["Parameter Value"]}
        colors={["blue"]} // color hexadecimal para 'primary'
        yAxisWidth={48}
      />
    </Card>
  );
}
