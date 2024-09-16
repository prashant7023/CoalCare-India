import React, { useState } from 'react';
import '../styles/CarbonFootprint.css';

const CarbonFootprint = () => {
  const [inputs, setInputs] = useState({
    stateName: '',
    energyUsage: 0,
    responsibleArea: 0,
    totalArea: 0,
    explosiveUsed: 0,
    fuelVolume: 0,
    weightValue: 0,
    distanceValue: 0,
  });

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl p-6">
        
        {/* Electricity Consumption */}
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-xl font-semibold text-black mb-4">
            Electricity Consumption
          </h2>
          <div className="mb-4">
            <label className="block text-black">State Name:</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="State Name"
              name="stateName"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">
              Energy per Time (kW·h/day):
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Energy per Time"
              name="energyUsage"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Responsible Area (m²):</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Responsible Area"
              name="responsibleArea"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Total Area (m²):</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Total Area"
              name="totalArea"
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Calculate
          </button>
        </div>

        {/* Explosion Emissions */}
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-xl font-semibold text-black mb-4">
            Explosion Emissions
          </h2>
          <div className="mb-4">
            <label className="block text-black">Explosive Type:</label>
            <select className="w-full p-2 mt-1 bg-gray-100 text-black rounded">
              <option>Select Explosive Type</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black">Amount of Explosive Used (kg):</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Amount of Explosive Used"
              name="explosiveUsed"
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Calculate
          </button>
        </div>

        {/* Fuel Combustion Emissions */}
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-xl font-semibold text-black mb-4">
            Fuel Combustion Emissions
          </h2>
          <div className="mb-4">
            <label className="block text-black">Fuel Type:</label>
            <select className="w-full p-2 mt-1 bg-gray-100 text-black rounded">
              <option>Select Fuel Type</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black">Volume of Fuel Consumed (liters):</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Volume of Fuel Consumed"
              name="fuelVolume"
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Calculate
          </button>
        </div>

        {/* Shipping Emissions */}
        <div className="bg-white p-6 rounded-lg w-full">
          <h2 className="text-xl font-semibold text-black mb-4">
            Shipping Emissions
          </h2>
          <div className="mb-4">
            <label className="block text-black">Weight Unit:</label>
            <select className="w-full p-2 mt-1 bg-gray-100 text-black rounded">
              <option>Select Unit</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black">Weight Value:</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Weight Value"
              name="weightValue"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Distance Unit:</label>
            <select className="w-full p-2 mt-1 bg-gray-100 text-black rounded">
              <option>Select Unit</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black">Distance Value:</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-100 text-black rounded"
              placeholder="Distance Value"
              name="distanceValue"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Transport Method:</label>
            <select className="w-full p-2 mt-1 bg-gray-100 text-black rounded">
              <option>Select Method</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Calculate
          </button>
        </div>
      </div>

      {/* Generate Graph Button */}
      <button className="bg-blue-600 text-white py-2 px-6 rounded mt-10 hover:bg-blue-700">
        Generate Graph
      </button>
    </div>
  );
};

export default CarbonFootprint;
