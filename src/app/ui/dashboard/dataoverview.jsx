import OverChart from "./Charts/OverviewChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

function generateDataArray(data, parameter, date) {
  if (!data) {
    return [];
  }

  // Crear un objeto para almacenar los valores de cada parámetro
  let paramValues = {};

  // Recorrer cada tabla de datos
  Object.keys(data).forEach(key => {
    if (data[key].rows && data[key].rows.length > 0) {
      // Buscar la fila con la fecha especificada
      let row = data[key].rows.find(row => row.date.split(" ")[0] === date);
      if (row) {
        // Añadir el valor del parámetro para esta tabla al objeto paramValues
        paramValues[key] = row[parameter];
      }
    }
  });

  // Devolver un array que contiene un solo objeto, que tiene una propiedad para cada tabla de datos
  return [{ name: parameter, ...paramValues }];
}

//Function to get the data needed for the analytics
const generateDataAnalytics = (data, parameter) => {
  if (!data) {
    return {};
  }

  // Defining the analytics object
  let analytics = [];

  // Iterating over the data
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      data[key].rows.forEach(row => {
        if (row.hasOwnProperty(parameter)) {
          analytics.push(row[parameter]);
        }
      });
    }
  }

  let minimum = Math.min(...analytics);
  let maximum = Math.max(...analytics);
  let average = analytics.reduce((a, b) => a + b, 0) / analytics.length;

  // Calculating standard deviation
  let variance = analytics.reduce((acc, val) => acc + (val - average) ** 2, 0) / analytics.length;
  let standardDeviation = Math.sqrt(variance);

  return {
    min: minimum,
    max: maximum,
    avg: average,
    stdDev: standardDeviation
  };
};

export default function DataOverview(props) {
  const t = useTranslations("OverviewChart");
  let data = props.data;
  let date = props.date;

  return (
    <div className="w-full">
      <Tabs defaultValue="entropy" className="w-full mt-4">
        <div className="scrollable w-full overflow-x-scroll 2xl:overflow-hidden">
          <TabsList
            className="text-secondary dark:text-secondary-dark border-surface dark:border-surface-dark"
            style={{ fontFamily: "clash" }}
          >
            <TabsTrigger value="entropy">
              {t("entropyTitle")}
            </TabsTrigger>
            <TabsTrigger value="mean_intensity">
              {t("meanIntensityTitle")}
            </TabsTrigger>
            <TabsTrigger value="standard_deviation">
              {t("standardDeviationTitle")}
            </TabsTrigger>
            <TabsTrigger value="fractal_dimension">
              {t("fractalDimensionTitle")}
            </TabsTrigger>
            <TabsTrigger value="skewness">
              {t("skewnessTitle")}
            </TabsTrigger>
            <TabsTrigger value="kurtosis">
              {t("kurtosisTitle")}
            </TabsTrigger>
            <TabsTrigger value="uniformity">
              {t("uniformityTitle")}
            </TabsTrigger>
            <TabsTrigger value="relative_smoothness">
              {t("relativeSmoothnessTitle")}
            </TabsTrigger>
            <TabsTrigger value="tamura_contrast">
              {t("tamuraContrastTitle")}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="entropy" className="flex">
          <OverChart
            data={generateDataArray(data, "entropy", date)}
            parameter={"entropy"}
            statistics={generateDataAnalytics(data, "entropy")}
          />
        </TabsContent>
        <TabsContent value="mean_intensity" className="">
          <OverChart
            data={generateDataArray(data, "mean_intensity", date)}
            parameter={"meanIntensity"}
            statistics={generateDataAnalytics(data, "mean_intensity")}
          />
        </TabsContent>
        <TabsContent value="standard_deviation" className="">
          <OverChart
            data={generateDataArray(data, "standard_deviation", date)}
            parameter={"standardDeviation"}
            statistics={generateDataAnalytics(data, "standard_deviation")}
          />

        </TabsContent>
        <TabsContent value="fractal_dimension" className="">
          <OverChart
            data={generateDataArray(data, "fractal_dimension", date)}
            parameter={"fractalDimension"}
            statistics={generateDataAnalytics(data, "fractal_dimension")}
          />
        </TabsContent>
        <TabsContent value="skewness" className="">
          <OverChart
            data={generateDataArray(data, "skewness", date)}
            parameter={"skewness"}
            statistics={generateDataAnalytics(data, "skewness")}
          />
        </TabsContent>
        <TabsContent value="kurtosis" className="">
          <OverChart
            data={generateDataArray(data, "kurtosis", date)}
            parameter={"kurtosis"}
            statistics={generateDataAnalytics(data, "kurtosis")}
          />
        </TabsContent>
        <TabsContent value="uniformity" className="">
          <OverChart
            data={generateDataArray(data, "uniformity", date)}
            parameter={"uniformity"}
            statistics={generateDataAnalytics(data, "uniformity")}
          />
        </TabsContent>
        <TabsContent value="relative_smoothness" className="">
          <OverChart
            data={generateDataArray(data, "relative_smoothness", date)}
            parameter={"relativeSmoothness"}
            statistics={generateDataAnalytics(data, "relative_smoothness")}
          />
        </TabsContent>
        <TabsContent value="tamura_contrast" className="">
          <OverChart
            data={generateDataArray(data, "tamura_contrast", date)}
            parameter={"tamuraContrast"}
            statistics={generateDataAnalytics(data, "tamura_contrast")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
