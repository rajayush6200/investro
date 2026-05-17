import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DoughnoutChart({ data }) {
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
              labels: { boxWidth: 12, font: { size: 11 } },
            },
          },
        }}
      />
    </div>
  );
}
