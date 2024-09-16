import React from 'react'
import '../styles/Charts.css'; // Importing the CSS file
import BarChart from './BarChart'; // Importing BarChart
import PieChart from './PieChart'; // Importing PieChart
import LineChart from './LineChart'; // Importing LineChart
import { Chart } from 'chart.js'; // Importing Chart.js

function Charts() {
    return (
        <div>
            <h1 className="text-center text-gray-800  text-4xl font-bold mb-5">Coal Mines of India</h1>
            <div className="charts-container">
                <LineChart className="Line" />
                <PieChart className="Pie" />
                <BarChart className="Bar" />
            </div>
        </div>
    );
}


export default Charts