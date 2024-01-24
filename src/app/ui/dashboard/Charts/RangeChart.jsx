import { AreaChart, Card, Title } from "@tremor/react"

export default function RangeChart({ rawData, selectedTable, selectedRange, parameter }) {
    
    let fixedData

    if (selectedRange && selectedTable && rawData && rawData[selectedTable]?.rows) {
      fixedData = Object.keys(rawData[selectedTable]?.rows).map((key) => ({
          date: rawData[selectedTable]?.rows[key].date,
          value: rawData[selectedTable]?.rows[key][parameter],
      }))
      console.log(fixedData);
    }

    // Aquí puedes usar 'fixedData' como quieras. 

    return(
        <Card>
            <Title>Range Chart</Title>
            <AreaChart
              className="h-72 mt-4"
              data={fixedData}
              index="date"
              yAxisWidth={65}
              categories={["value"]}
              colors={["blue"]}
              
            />
        </Card>
    )
}