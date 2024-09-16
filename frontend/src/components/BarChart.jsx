import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Choritand Tiliaya', 'Jogeshwar & Khas Jogeshwar', 'Rabodih OCP', 'Rohne', 'Urtan North', 'North of Arkhapal Srirampur'],
    datasets: [
      {
        label: 'AVG of PM2.5',
        data: [49, 25.89, 21.17, 32.17],
        backgroundColor: 'green',
      },
      {
        label: 'AVG of AQI',
        data: [69.75, 64.96, 65.23, 82.38],
        backgroundColor: 'orange',
      },
      {
        label: 'AVG of WQI',
        data: [242.65, 71.33, 46.43, 39.64],
        backgroundColor: 'purple',
      },
      {
        label: 'AVG of PH',
        data: [7.8, 7.25, 7.7, 6.95],
        backgroundColor: 'blue',
      },
      {
        label: 'AVG of Temp',
        data: [27.5, 28.15, 27.3, 26],
        backgroundColor: 'red',
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
        text: 'Top 5 Polluted Cities',
      },
    },

  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
