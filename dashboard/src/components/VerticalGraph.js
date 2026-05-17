import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useChartTheme } from "../theme/useChartTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function VerticalGraph({ data }) {
  const chartTheme = useChartTheme();

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: chartTheme.legendColor,
            boxWidth: 12,
            font: { size: 11 },
          },
        },
        title: {
          display: true,
          text: "Holdings by price",
          color: chartTheme.titleColor,
          font: { size: 13, weight: "400" },
        },
        tooltip: {
          backgroundColor: chartTheme.tooltipBg,
          titleColor: chartTheme.tooltipText,
          bodyColor: chartTheme.tooltipText,
        },
      },
      scales: {
        x: {
          ticks: { color: chartTheme.tickColor },
          grid: { color: chartTheme.gridColor },
        },
        y: {
          ticks: { color: chartTheme.tickColor },
          grid: { color: chartTheme.gridColor },
        },
      },
    }),
    [chartTheme],
  );

  return (
    <div className="holdings-chart">
      <Bar options={options} data={data} />
    </div>
  );
}

