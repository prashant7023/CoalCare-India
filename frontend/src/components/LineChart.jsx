import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Choritand Tilaya',
        data: [8000, 8500, 8300, 8600, 8700],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Jogeshwar & Khas Jogeshwar',
        data: [9000, 9200, 9100, 9400, 9300],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Rabodih OCP',
        data: [7000, 7100, 7050, 7200, 7300],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Rohne',
        data: [9500, 9600, 9400, 9700, 9800],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Urtan North',
        data: [6500, 6700, 6600, 6800, 6900],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'North of Arkhapal Srirampur',
        data: [8200, 8300, 8250, 8400, 8500],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
        text: 'Carbon Emissions for 6 Coal Blocks (2019-2023)',
      },
    },
  };

  return <Line className="flex justify-center items-center w-full h-full bg-white border-2 border-gray-300 rounded-xl shadow-lg" data={data} options={options} />;
};

export default LineChart;
