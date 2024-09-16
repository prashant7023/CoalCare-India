import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Choritand Tiliaya', 'Jogeshwar & Khas Jogeshwar', 'Rabodih OCP', 'Rohne', 'Urtan North', 'North of Arkhapal Srirampur'],
    datasets: [
      {
        label: 'Top 6 Polluted Cities AQI Level',
        data: [524, 450, 483, 435, 565, 492],
        backgroundColor: ['yellow', 'green', 'red', 'blue', 'purple', 'orange'],
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
        text: 'Top 6 Polluted Cities AQI Level',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
