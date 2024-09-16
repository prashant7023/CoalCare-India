import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Choritand Tiliaya', 'Jogeshwar & Khas Jogeshwar', 'Rabodih OCP', 'Rohne', 'Urtan North', 'North of Arkhapal Srirampur'],
    datasets: [
      {
        label: 'Geological Block Area',
        data: [242, 270, 1949, 475, 1245, 585],
        backgroundColor: '#ff9999',
      },
      {
        label: 'Mining Lease Area',
        data: [242, 275.64, 475, 82.38, 825, 458],
        backgroundColor: '#66b3ff',
      },
      {
        label: 'Project Area',
        data: [299.73, 169.10, 475, 39.64, 1253.10, 603],
        backgroundColor: '#99ff99',
      },
      {
        label: 'Forest Area',
        data: [127.35, 115.20, , 6.95, 1127.31, 77],
        backgroundColor: '#ffcc99',
      },
      {
        label: 'Non-Forest Area',
        data: [172.38, 53.90, 475, 125.80, 526],
        backgroundColor: '#c2c2f0',
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
        text: 'Area Comparison of Geological Block, Mining Lease, Project, Forest, and Non-Forest Area in Hectares',
      },
    },

  };

  return (

  <Bar className="flex justify-center items-center w-full h-full bg-white border-2 border-gray-300 rounded-xl shadow-lg" data={data} options={options} />

  );
  
};

export default BarChart;
