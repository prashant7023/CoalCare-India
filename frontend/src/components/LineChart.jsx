import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Sum of Temperature_Avg',
        data: [2500, 2600, 2400, 3000, 3100, 2900, 2800, 2500, 2300, 2200, 2100, 2200],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Sum of Temperature_Max',
        data: [4000, 4200, 4500, 4100, 3900, 3700, 3500, 3000, 2800, 2700, 2600, 2700],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Sum of Temperature_Min',
        data: [2000, 2100, 1900, 1800, 1700, 1500, 1400, 1300, 1100, 1000, 900, 1000],
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 6 Polluted Cities Ozone Level',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
