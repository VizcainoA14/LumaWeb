
import OverChart from "./Charts/OverviewChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function generateDataArray(data, parameter) {
  if (!data) {
    return [];
  }

  // Crear un objeto para almacenar los valores de cada parámetro
  let paramValues = {};

  // Recorrer cada tabla de datos
  Object.keys(data).forEach(key => {
    if (data[key].rows && data[key].rows.length > 0) {
      // Añadir el valor del parámetro para esta tabla al objeto paramValues
      paramValues[key] = data[key].rows[0][parameter];
    }
  });

  // Devolver un array que contiene un solo objeto, que tiene una propiedad para cada tabla de datos
  return [{ name: parameter, ...paramValues }];
}


export default function DataOverview(props) {
  let data = props.data;

  return (
    <div className="w-full">
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
          <OverChart
            data={generateDataArray(data, "entropy")}
            parameter={"entropy"}
          />
        </TabsContent>
        <TabsContent value="mean_intensity" className="">
          <OverChart
            data={generateDataArray(data, "mean_intensity")}
            parameter={"meanIntensity"}
          />
        </TabsContent>
        <TabsContent value="standard_deviation" className="">
          <OverChart
            data={generateDataArray(data, "standard_deviation")}
            parameter={"standardDeviation"}
          />
        </TabsContent>
        <TabsContent value="fractal_dimension" className="">
          <OverChart
            data={generateDataArray(data, "fractal_dimension")}
            parameter={"fractalDimension"}
          />
        </TabsContent>
        <TabsContent value="skewness" className="">
          <OverChart
            data={generateDataArray(data, "skewness")}
            parameter={"skewness"}
          />
        </TabsContent>
        <TabsContent value="kurtosis" className="">
          <OverChart
            data={generateDataArray(data, "kurtosis")}
            parameter={"kurtosis"}
          />
        </TabsContent>
        <TabsContent value="uniformity" className="">
          <OverChart
            data={generateDataArray(data, "uniformity")}
            parameter={"uniformity"}
          />
        </TabsContent>
        <TabsContent value="relative_smoothness" className="">
          <OverChart
            data={generateDataArray(data, "relative_smoothness")}
            parameter={"relativeSmoothness"}
          />
        </TabsContent>
        <TabsContent value="taruma_contrast" className="">
          <OverChart
            data={generateDataArray(data, "taruma_contrast")}
            parameter={"tarumaContrast"}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
