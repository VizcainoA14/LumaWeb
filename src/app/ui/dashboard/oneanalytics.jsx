export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div
      id="oneDateAnalyticsContainer"
      className="md:w-1/3 flex flex-col rounded-md p-2 gap-2"
    >
      {/*Month Average container */}
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div
          id="monthAvgContainer"
          className="analyticCard"
        >
          <div
            id="monthAverage"
            className="w-full h-3/4 flex items-center justify-center text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.avg?.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="w-full h-1/4 bg-surface flex items-center justify-center text-md dark:bg-surface-dark dark:text-on-surface-dark"
            style={{ fontFamily: "Archivo" }}
          >
            Month Average
          </div>
        </div>
        <div
          id="monthStdContainer"
          className="analyticCard"
        >
          <div
            id="monthStd"
            className="w-full h-3/4 flex items-center justify-center text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.stdDev?.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="w-full h-1/4 bg-surface flex items-center justify-center text-md dark:bg-surface-dark dark:text-on-surface-dark"
            style={{ fontFamily: "Archivo" }}
          >
            Month Standart deviation
          </div>
        </div>
      </div>

      {/*Month Maximum and Minimum container */}
      <div className="w-full h-1/2 flex flex-row gap-2">
        <div id="monthMaximum" className="analyticCard" >
          <div
            id="monthMax"
            className="w-full h-3/4 flex items-center justify-center text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.max?.toFixed(2)}
          </div>
          <div
            id="monthMaxLabel"
            className="w-full h-1/4 bg-surface flex items-center justify-center text-md dark:bg-surface-dark dark:text-on-surface-dark"
            style={{ fontFamily: "Archivo" }}
          >
            Month Maximum
          </div>
        </div>
        <div className="analyticCard" >
          <div
            id="monthMinimum"
            className="w-full h-3/4 flex items-center justify-center text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.min?.toFixed(2)}
          </div>
          <div
            id="monthMinimumLabel"
            className="w-full h-1/4 bg-surface flex items-center justify-center text-md dark:bg-surface-dark dark:text-on-surface-dark"
            style={{ fontFamily: "Archivo" }}
          >
            Month Minimum
          </div>
        </div>
      </div>
    </div>
  );
}
