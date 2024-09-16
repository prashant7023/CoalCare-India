import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-between p-10">
      {/* Left Side: Text Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Quantify Your Carbon Footprint. <br />
          Accelerate Towards <span className="text-green-600">Carbon Neutrality</span>.
        </h1>
        <p className="mt-4 text-gray-600">
          Understanding the carbon footprint is crucial for coal mines to explore pathways to sustainability. 
          Start tracking your emissions and discover innovative solutions to reduce your impact on the environment.
        </p>
        <div className="mt-6">
          <button className="mr-4 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-500">
            Calculate Now
          </button>
          <button className="mr-4 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
            Explore Solutions
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block">
        <img
          src="./public/images/carbon-footprint.jpg"
          alt="Sustainability Diagram"
          className="w-96 h-auto rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
