import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const RangeChartFlare = ({ 
    rawData,
    selectedTable,
    selectedRange,
    parameter 
  }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date'
                },
                
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                },
                grid: {
                    display: true,
                    color: '#8a9297',
                },
                ticks: {
                    color: '#8a9297',
                }
                
            }
        }
    }
    

  let dataPoints = [];
  let labels = [];
  if (rawData && rawData[selectedTable]) {
    console.log(rawData[selectedTable].rows.map((element) => element.date));
    dataPoints = rawData[selectedTable].rows.map((element) => element[parameter]);
    labels = rawData[selectedTable].rows.map((element) => {
        let date = moment(element.date);
        return date.format('DD MM YYYY'); // Formato: Mes Año
    });
  }

  const data = {
    labels,
    datasets: [{
        label: parameter,
        data: dataPoints,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
  }
  

  return (
    <div className=''>
        <Line options={options} data={data}/>
    </div>
    
  )
}
