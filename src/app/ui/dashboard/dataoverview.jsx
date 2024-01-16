import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DataOverview(props) {
  let data = props.data
    ? Object.keys(props.data).map(key => ({
        name: key,
        value: props.data[key]
      }))
    : [];

  return (
    <div>
      <Tabs defaultValue="entropy" className="w-[400px] mt-3">
          <TabsList className="text-secondary dark:text-secondary-dark border border-surface dark:border-surface-dark" style={{ fontFamily: "clash" }}>
            <TabsTrigger value="entropy">Entropy</TabsTrigger>
            <TabsTrigger value="median">Median</TabsTrigger>
            <TabsTrigger value="std">Standart deviation</TabsTrigger>
            <TabsTrigger value="fractald">Fractal dimension</TabsTrigger>
            <TabsTrigger value="asymmetry">Asymmetry</TabsTrigger>
            <TabsTrigger value="kurtosis">Kurtosis</TabsTrigger>
            <TabsTrigger value="uniformity">Uniformity</TabsTrigger>
            <TabsTrigger value="relativesmooth">Relative smoothness</TabsTrigger>
            <TabsTrigger value="tamura">Tamura contrast</TabsTrigger>
          </TabsList>
          <TabsContent value="entropy">Entropy</TabsContent>
          <TabsContent value="median">Median</TabsContent>
          <TabsContent value="std">Standart deviation</TabsContent>
          <TabsContent value="fractald">Fractal dimension</TabsContent>
          <TabsContent value="asymmetry">Asymmetry</TabsContent>
          <TabsContent value="kurtosis">Kurtosis</TabsContent>
          <TabsContent value="uniformity">Uniformity</TabsContent>
          <TabsContent value="relativesmooth">Relative smoothness</TabsContent>
          <TabsContent value="tamura">Tamura contrast</TabsContent>
        </Tabs>
    </div>
  );
}
