import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useChartTheme } from "../theme/useChartTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnoutChart({ data }) {
  const chartTheme = useChartTheme();

  return (
    <div className="watchlist-chart">
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 12,
                font: { size: 11 },
                color: chartTheme.legendColor,
              },
            },
            tooltip: {
              backgroundColor: chartTheme.tooltipBg,
              titleColor: chartTheme.tooltipText,
              bodyColor: chartTheme.tooltipText,
            },
          },
        }}
      />
    </div>
  );
}
