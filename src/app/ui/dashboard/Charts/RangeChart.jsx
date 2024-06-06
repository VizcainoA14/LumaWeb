
import moment from 'moment';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

export const RangeChart = ({
        rawData,
        selectedTable,
        parameter
    }) => {
    let dataPoints = [];
    let labels = [];

    // Setting the color of the chart
    const determineChartColor = () => {
        switch (selectedTable) {
            case 'data171':
                return "blue";
            case 'data195':
                return "green";
            case 'data284':
                return "yellow";
            case 'data304':
                return "red";
            case 'datahmiigr':
                return "orange";
            case 'datahmimag':
                return "gray";
            default:
                return null;
        }
    }

    let graphColor = determineChartColor();

    if (rawData && rawData[selectedTable]) {
        dataPoints = rawData[selectedTable].rows.map((element) => element[parameter]);
        labels = rawData[selectedTable].rows.map((element) => {
            let date = moment(element.date);
            return date.format('DD MM YYYY'); // Formato: Mes Año
        });
    }

    return (
        <div id='RangeChartContainer' className='w-full h-[50vh]'>
            {/* <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 50,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
                <ReferenceLine y={9800} label="Max" stroke="red" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> */}
        </div>
        
    )
}
