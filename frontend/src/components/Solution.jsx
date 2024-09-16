import React, { useState } from 'react';

const Solution = () => {
  const [sinkType, setSinkType] = useState('carbonSink');
  const [formData, setFormData] = useState({
    name: '',
    vegetation: 'forest',
    area: '',
    sequestrationRate: '',
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform further actions with formData here
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-black text-3xl font-semibold text-center mb-6">
          Carbon Sink
        </h1>

        <div className="flex justify-center mb-6 space-x-4">
          <div>
            <input
              type="radio"
              id="carbonSink"
              name="sinkType"
              value="carbonSink"
              checked={sinkType === 'carbonSink'}
              onChange={() => setSinkType('carbonSink')}
              className="mr-2"
            />
            <label htmlFor="carbonSink" className="text-black">
              Carbon Sink
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="existingSink"
              name="sinkType"
              value="existingSink"
              checked={sinkType === 'existingSink'}
              onChange={() => setSinkType('existingSink')}
              className="mr-2"
            />
            <label htmlFor="existingSink" className="text-black">
              Existing Sink
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name or identifier for the carbon sink"
              className="w-full p-3 bg-gray-100 text-black rounded-lg placeholder-gray-500"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="vegetation" className="block text-gray-700 mb-2">
              Vegetation Type
            </label>
            <select
              id="vegetation"
              name="vegetation"
              className="w-full p-3 bg-gray-100 text-black rounded-lg"
              value={formData.vegetation}
              onChange={handleInputChange}
            >
              <option value="forest">Forest</option>
              <option value="grassland">Grassland</option>
              <option value="wetland">Wetland</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="area" className="block text-gray-700 mb-2">
              Area Covered (hectares)
            </label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Total area covered by the sink"
              className="w-full p-3 bg-gray-100 text-black rounded-lg placeholder-gray-500"
              value={formData.area}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="sequestrationRate"
              className="block text-gray-700 mb-2"
            >
              Carbon Sequestration Rate (tons CO2/hectare/year)
            </label>
            <input
              type="text"
              id="sequestrationRate"
              name="sequestrationRate"
              placeholder="Rate at which the sink sequesters carbon"
              className="w-full p-3 bg-gray-100 text-black rounded-lg placeholder-gray-500"
              value={formData.sequestrationRate}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="additionalDetails"
              className="block text-gray-700 mb-2"
            >
              Additional Details
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              placeholder="Any additional details"
              className="w-full p-3 bg-gray-100 text-black rounded-lg placeholder-gray-500"
              value={formData.additionalDetails}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Solution;
