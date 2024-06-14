export default function OneAnalytics(props) {
  let statistics = props.statistics;
  return (
    <div
      id="oneDateAnalyticsContainer"
      className="h-56 md:h-36 md:w-full md:flex-row xl:w-1/3 flex flex-col xl:flex-col xl:h-96 rounded-md p-2 gap-2"
    >
      {/*Month Average container */}
      <div className="w-full h-1/2 md:h-28 lg:h-full flex flex-row gap-2">
        <div
          id="monthAvgContainer"
          className="analyticCard"
        >
          <div
            id="monthAverage"
            className="w-full h-3/4 flex items-center justify-center text-2xl md:text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.avg?.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="analitycLabel"
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
            className="w-full h-3/4 flex items-center justify-center text-2xl md:text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.stdDev?.toFixed(2)}
          </div>
          <div
            id="monthAverageLabel"
            className="analitycLabel"
            style={{ fontFamily: "Archivo" }}
          >
            Month Standart deviation
          </div>
        </div>
      </div>

      {/*Month Maximum and Minimum container */}
      <div className="w-full h-1/2 md:h-28 lg:h-full flex flex-row gap-2">
        <div id="monthMaximum" className="analyticCard" >
          <div
            id="monthMax"
            className="w-full h-3/4 flex items-center justify-center text-2xl md:text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.max?.toFixed(2)}
          </div>
          <div
            id="monthMaxLabel"
            className="analitycLabel"
            style={{ fontFamily: "Archivo" }}
          >
            Month Maximum
          </div>
        </div>
        <div className="analyticCard" >
          <div
            id="monthMinimum"
            className="w-full h-3/4 flex items-center justify-center text-2xl md:text-3xl dark:text-on-background-dark"
            style={{ fontFamily: "Clash" }}
          >
            {statistics?.min?.toFixed(2)}
          </div>
          <div
            id="monthMinimumLabel"
            className="analitycLabel"
            style={{ fontFamily: "Archivo" }}
          >
            Month Minimum
          </div>
        </div>
      </div>
    </div>
  );
}
