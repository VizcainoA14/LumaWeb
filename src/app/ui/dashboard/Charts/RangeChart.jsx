import { AreaChart, Card, Title } from "@tremor/react"
import { useTranslations } from "next-intl";
import moment from 'moment';

export default function RangeChart({ 
    rawData,
    selectedTable,
    selectedRange,
    parameter 
  }) {
    const t = useTranslations("RangeChart");

    // Función to generate fixed data for the chart
    const generateFixedData = () => {
      if (selectedRange && selectedTable && rawData && rawData[selectedTable]?.rows) {
        const numPoints = Object.keys(rawData[selectedTable]?.rows).length;
        let dateFormat = 'YYYY-MM-DD HH:mm:ss'; // Formato por defecto
    
        if (numPoints > 100) {
          dateFormat = 'MM-YYYY'; // Si hay más de 100 puntos, muestra solo la fecha
        } else if (numPoints > 50) {
          dateFormat = 'MM-YYYY'; // Si hay más de 50 puntos, muestra solo el mes y el año
        } else {
          dateFormat = 'DD-MM-YYYY'; // Si hay menos de 50 puntos, muestra solo el año
        }
    
        return Object.keys(rawData[selectedTable]?.rows).map((key) => ({
            date: moment(rawData[selectedTable]?.rows[key].date).format(dateFormat),
            value: rawData[selectedTable]?.rows[key][parameter],
        }))
      }
      return null;
    }

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

    let fixedData = generateFixedData();
    let chartColor = determineChartColor();

    return(
        <Card>
            <Title>{t(`${parameter}Title`)}</Title>
            <AreaChart
              className="h-72 mt-4"
              data={fixedData}
              index="date"
              yAxisWidth={65}
              categories={["value"]}
              colors={[chartColor]}
              showAnimation={true}
              showLegend={false}
              showGridLines={true}
              connectNulls={true}
            />
        </Card>
    )
}