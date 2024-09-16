import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Mining Method', 'Transportation', 'Energy Usage', 'Stripping Ratio', 'Land Use', 'Miscellaneous'],
    datasets: [
      {
        label: 'Carbon Footprint Factors',
        data: [40, 20, 15, 10, 10, 5],
        backgroundColor: [
          '#ff9999',
          '#66b3ff',
          '#99ff99',
          '#ffcc99',
          '#c2c2f0',
          '#ffb3e6'
        ],
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
        text: 'Factors Affecting Carbon Footprint',
      },
    },
  };

  return (
  <Pie className="flex justify-center items-center w-full h-full bg-white border-2 border-gray-300 rounded-xl shadow-lg" data={data} options={options} />);
};

export default PieChart;
