export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div
      id="oneDateAnalyticsContainer"
      className="md:w-1/3 flex flex-col border rounded-md p-2 gap-2 border-surface dark:border-surface-dark border-1"
    >
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div
          id="monthAvgContainer"
          className="analyticCard"
        >
          <div
            id="monthAverage"
            className="text-xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.avg?.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="text-sm dark:text-on-background-dark/60"
            style={{ fontFamily: "Archivo" }}
          >
            Month Average
          </div>
        </div>
        <div className="analyticCard" />
      </div>
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div id="monthMaximum" className="analyticCard" >
          <div
            id="monthMax"
            className="text-xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.max?.toFixed(2)}
          </div>
          <div
            id="monthMaxLabel"
            className="text-sm dark:text-on-background-dark/60"
            style={{ fontFamily: "Archivo" }}
          >
            Month Maximum
          </div>
        </div>
        <div className="analyticCard" >
          <div
            id="monthMinimum"
            className="text-xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.min?.toFixed(2)}
          </div>
          <div
            id="monthMinimumLabel"
            className="text-sm dark:text-on-background-dark/60"
            style={{ fontFamily: "Archivo" }}
          >
            Month Minimum
          </div>
        </div>
      </div>
    </div>
  );
}
