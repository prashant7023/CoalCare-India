import React, { useState, useEffect } from 'react';
import '../styles/CarbonFootprint.css';

// Placeholder function for calculating emissions based on input
const calculateEmissions = (data) => {
  return (data.coalProduction * 0.8) + (data.energyUsage * 0.5) + (data.equipment * 1.2);
};

// Placeholder function for AI recommendations
const getAIRecommendations = () => {
  return [
    "Upgrade to more energy-efficient equipment.",
    "Reduce methane emissions from mining activities.",
    "Increase use of renewable energy sources.",
    "Implement better waste management practices."
  ];
};

const CarbonFootprint = () => {
  const [inputs, setInputs] = useState({
    coalProduction: 0,
    energyUsage: 0,
    equipment: 0,
  });
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setRecommendations(getAIRecommendations());
  }, []);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const calculateFootprint = (e) => {
    e.preventDefault();
    const emissions = calculateEmissions(inputs);
    setTotalEmissions(emissions.toFixed(2));
    setShowChart(true);
  };

  return (
    <div className="carbon-footprint-container">
      <h1 className="header">Carbon Footprint Solution for Coal Mines</h1>

      {/* Carbon Footprint Calculator */}
      <div className="calculator">
        <h2>Carbon Footprint Calculator</h2>
        <form onSubmit={calculateFootprint}>
          <div className="input-group">
            <label>Coal Production (in MT): </label>
            <input
              type="number"
              name="coalProduction"
              value={inputs.coalProduction}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Energy Usage (in GJ): </label>
            <input
              type="number"
              name="energyUsage"
              value={inputs.energyUsage}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Mining Equipment (in units): </label>
            <input
              type="number"
              name="equipment"
              value={inputs.equipment}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Calculate Carbon Footprint</button>
        </form>

        {totalEmissions > 0 && (
          <div className="result">
            <h3>Your Estimated Carbon Footprint: {totalEmissions} tons CO2/year</h3>
          </div>
        )}
      </div>

      {/* Emission Reduction Tips */}
      <div className="tips-section">
        <h2>Recommendations for Reducing Carbon Footprint</h2>
        <ul>
          {recommendations.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Simplified Data Visualization */}
      {showChart && (
        <div className="chart-section">
          <h2>Emissions Data Overview</h2>
          <div className="chart">
            <p><strong>Coal Production:</strong> {inputs.coalProduction * 0.8} tons CO2</p>
            <p><strong>Energy Usage:</strong> {inputs.energyUsage * 0.5} tons CO2</p>
            <p><strong>Equipment:</strong> {inputs.equipment * 1.2} tons CO2</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprint;
