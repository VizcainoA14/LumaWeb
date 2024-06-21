import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
  ResponsiveContainer
} from "recharts";

export const RangeChart = ({ rawData, selectedTable, parameter }) => {

  // Setting the color of the chart
  const determineChartColor = () => {
    switch (selectedTable) {
      case "data171":
        return "#3b82f6";
      case "data195":
        return "#22c55e";
      case "data284":
        return "#eab308";
      case "data304":
        return "#ef4444";
      case "datahmiigr":
        return "#f97316";
      case "datahmimag":
        return "#6b7280";
      default:
        return null;
    }
  };

  let graphColor = determineChartColor();

  const dataFixer = (data, table, parameter) => {
    let fixedData = [];
    if (data && data[table]) {
      fixedData = data[table].rows.map(element => {
        let date = moment(element.date);
        return {
          date: date.format("DD-MM-YYYY"),
          [parameter]: element[parameter]
        };
      });
    }
    return fixedData;
  };

  let fixedData = dataFixer(rawData, selectedTable, parameter);

  return (
    <div id="RangeChartContainer" className="w-full h-[70vh] md:h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={300} data={fixedData}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={graphColor} stopOpacity={0.8} />
              <stop offset="100%" stopColor={graphColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            
            type="number"
            domain={["auto", "dataMax"]}
            tickFormatter={value => value.toFixed(2)}
          />
          <Tooltip />
          <ReferenceLine y={fixedData.reduce((acc, val) => acc + val[parameter], 0) / fixedData.length} stroke="#ba1a1a" label={{ value: "Average", position: "insideTopRight" }} />
          <Legend />
          <Area
            connectNulls
            type="monotone"
            dataKey={parameter}
            stroke={graphColor}
            fill="url(#colorGradient)"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
