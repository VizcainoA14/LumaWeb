export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div
      id="oneDateAnalyticsContainer"
      className="w-1/3 flex flex-col border rounded-md p-2 gap-2 border-surface border-1"
    >
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div
          id="monthAvgContainer"
          className="w-1/2 h-full flex flex-col justify-center items-center bg-background border rounded-md"
        >
          <div
            id="monthAverage"
            className="text-xl"
            style={{ fontFamily: "Clash" }}
          >
            {statistics.avg.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="text-sm"
            style={{ fontFamily: "Archivo" }}
          >
            Month Average
          </div>
        </div>
        <div className="w-1/2 h-full bg-background border rounded-md" />
      </div>
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div className="w-1/2 h-full bg-background border rounded-md" />
        <div className="w-1/2 h-full bg-background border rounded-md" />
      </div>
    </div>
  );
}
