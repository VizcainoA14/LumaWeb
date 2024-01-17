import OverChart from "./Charts/OverviewChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function generateDataArray(data, parameter) {
  if (!data) {
    return [];
  }

  return Object.keys(data)
    .map(key => {
      if (data[key].rows && data[key].rows.length > 0) {
        return {
          name: key,
          "Parameter Value": data[key].rows[0][parameter]
        };
      } else {
        return null;
      }
    })
    .filter(item => item !== null);
}

export default function DataOverview(props) {
  let data = props.data;

  console.log(generateDataArray(data, "entropy"));

  return (
    <div className="w-full">
      <Tabs defaultValue="entropy" className="w-full mt-3">
        <TabsList
          className="text-secondary dark:text-secondary-dark border border-surface dark:border-surface-dark"
          style={{ fontFamily: "clash" }}
        >
          <TabsTrigger value="entropy">Entropy</TabsTrigger>
          <TabsTrigger value="mean_intensity">Mean Intensity</TabsTrigger>
          <TabsTrigger value="standard_deviation">
            Standard Deviation
          </TabsTrigger>
          <TabsTrigger value="fractal_dimension">Fractal Dimension</TabsTrigger>
          <TabsTrigger value="skewness">Skewness</TabsTrigger>
          <TabsTrigger value="kurtosis">Kurtosis</TabsTrigger>
          <TabsTrigger value="uniformity">Uniformity</TabsTrigger>
          <TabsTrigger value="relative_smoothness">
            Relative Smoothness
          </TabsTrigger>
          <TabsTrigger value="taruma_contrast">Tamura Contrast</TabsTrigger>
        </TabsList>
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
