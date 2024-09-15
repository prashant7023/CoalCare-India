import React from 'react';

const GreenFuture = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Towards a Greener Future
        </h2>

        {/* Content: Afforestation, Clean Technologies, Renewable Energy, Carbon Footprint */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Afforestation Section */}
          <div className="flex flex-col items-start p-6 bg-white shadow-lg rounded-lg">
            {/* <img
              src="https://www.euractiv.com/wp-content/uploads/sites/2/2019/11/Afforestation.jpg"
              alt="Afforestation"
              className="w-full h-48 object-cover mb-6 rounded-lg"
            /> */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Afforestation: Reclaiming the Earth
            </h3>
            <p className="text-gray-600 mb-6">
              Planting trees and restoring forests is key to offsetting carbon emissions.
              Our afforestation initiatives help increase biodiversity and capture
              harmful carbon dioxide from the atmosphere.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
              Start Simulation
            </button>
          </div>

          {/* Clean Technologies Section */}
          <div className="flex flex-col items-start p-6 bg-white shadow-lg rounded-lg">
            {/* <img
              src="https://www.greenoptimistic.com/wp-content/uploads/2018/06/Clean-Energy.jpg"
              alt="Clean Technology"
              className="w-full h-48 object-cover mb-6 rounded-lg"
            /> */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Clean Technologies: Powering the Future
            </h3>
            <p className="text-gray-600 mb-6">
              Innovation in clean technology is helping industries reduce their environmental impact.
              Learn about how cutting-edge solutions can lower emissions and create
              a sustainable energy future.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
              Learn More
            </button>
          </div>

          {/* Renewable Energy Section */}
          <div className="flex flex-col items-start p-6 bg-white shadow-lg rounded-lg">
            {/* <img
              src="https://media.istockphoto.com/id/1160985235/photo/solar-energy.jpg?s=612x612&w=0&k=20&c=zRWVABJ0OZ-9QCO0RHfRCChUJbn8Ev3j3I5WjUhCo7I="
              alt="Renewable Energy"
              className="w-full h-48 object-cover mb-6 rounded-lg"
            /> */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Renewable Energy: Harnessing Natural Power
            </h3>
            <p className="text-gray-600 mb-6">
              Renewable energy sources like solar, wind, and hydroelectric power are essential for reducing
              our dependence on fossil fuels. Explore how transitioning to renewables
              can lead to a cleaner, greener future.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
              Discover More
            </button>
          </div>

          {/* Carbon Footprint Tracking Section */}
          <div className="flex flex-col items-start p-6 bg-white shadow-lg rounded-lg">
            {/* <img
              src="https://energytracker.asia/wp-content/uploads/2021/07/shutterstock_1426097243-scaled.jpg"
              alt="Carbon Footprint Tracking"
              className="w-full h-48 object-cover mb-6 rounded-lg"
            /> */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Carbon Footprint: Measure and Offset
            </h3>
            <p className="text-gray-600 mb-6">
              Tracking your carbon footprint is the first step in reducing your impact.
              Use our tools to measure emissions and find ways to minimize them through
              afforestation and clean energy solutions.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenFuture;
