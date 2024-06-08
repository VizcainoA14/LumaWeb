import moment from "moment";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const RangeChart = ({ rawData, selectedTable, parameter }) => {
  let dataPoints = [];
  let labels = [];

  // Setting the color of the chart
  const determineChartColor = () => {
    switch (selectedTable) {
      case "data171":
        return "blue";
      case "data195":
        return "green";
      case "data284":
        return "yellow";
      case "data304":
        return "red";
      case "datahmiigr":
        return "orange";
      case "datahmimag":
        return "gray";
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
    <div id="RangeChartContainer" className="w-full h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={300}
                data={fixedData}
                margin={{
                    top: 20,
                    right: 50,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area connectNulls type="monotone" dataKey={parameter} stroke={graphColor} fill={graphColor} />
                </AreaChart>
            </ResponsiveContainer>
    </div>
  );
};
