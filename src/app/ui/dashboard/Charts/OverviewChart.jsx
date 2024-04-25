import {useTranslations} from "next-intl";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import OneAnalytics from "../oneanalytics";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
};

export default function OverChart(props) {
    const t = useTranslations("OverviewChart");
    let statistics = props.statistics;

    const colors = ["#3b82f6", "#22c55e", "#eab308", "#ef4444", "#f97316", "#6b7280"];

    if (
        !props.data ||
        props.data.length === 0 ||
        !props.data[0] ||
        (Object.keys(props.data[0]).length === 1 &&
            props.data[0].hasOwnProperty("name"))
    ) {
        // Manejar el caso en que los datos no estén disponibles
        return <div className="w-full h-96 p-4 bg-surface animate-pulse"/>;
    }
    let categories = Object.keys(props.data[0]).filter(key => key !== "name");
    let labels = ['EIT171', 'EIT195', 'EIT284', 'EIT304', 'HMIIGR', 'HMIMAG']
    console.log(Object.values(props.data[0]).slice(1))
    let data = {
        labels: labels,
        datasets : [{
            label: 'Entropy',
            data: Object.values(props.data[0]).slice(1),
            backgroundColor: colors,
        }]
    }

    return (
        <div
            className="w-full h-fit rounded-2xl border border-surface bg-background dark:bg-background-dark dark:border-surface-dark p-4 mt-2">
            <div id="chartTitlesContainer" className="w-fit min-h-[9vh] overflow-hidden">
                <h2
                    className="font-semibold text-xl text-on-background dark:text-on-background-dark"
                    style={{fontFamily: "Clash, open sans"}}
                >
                    {t(`${props.parameter}Title`)}
                </h2>
                <p
                    style={{fontFamily: "Archivo"}}
                    className="text-base text-on-background/80 dark:text-on-background-dark overflow-hidden"
                >
                    {t(`${props.parameter}Description`)}
                </p>
            </div>
            <div className="flex flex-col md:flex-col xl:flex-row w-full h-full pt-6 gap-2">
                <div id={'barChartContainer'} className={'xl:w-2/3 '}>
                    <Bar options={options} data={data} />
                </div>
                <OneAnalytics statistics={statistics}/>
            </div>
        </div>

    );
}
