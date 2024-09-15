import React from 'react';

function KeyFeatures() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-blue-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V5a2 2 0 114 0v6a2 2 0 11-4 0zM5 11v10a2 2 0 002 2h10a2 2 0 002-2V11a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Activity-wise Carbon Emission Calculator</h3>
            <p className="text-gray-600">Calculate emissions based on specific mining activities like excavation, transportation, and equipment usage.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-green-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.656 0-3 1.12-3 2.5S10.344 13 12 13s3-1.12 3-2.5S13.656 8 12 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21v-6a6 6 0 0112 0v6m-7-3h2" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Carbon Sinks Estimation</h3>
            <p className="text-gray-600">Estimate the amount of carbon absorbed by existing carbon sinks in the area.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-orange-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.656 0-3 1.12-3 2.5S10.344 13 12 13s3-1.12 3-2.5S13.656 8 12 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21v-6a6 6 0 0112 0v6m-7-3h2" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pathways to Carbon Neutrality</h3>
            <p className="text-gray-600">Simulate strategies like adopting clean technologies, afforestation, and renewable energy to achieve carbon neutrality.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-purple-500">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Carbon Credits Calculation</h3>
            <p className="text-gray-600">Estimate the potential carbon credits earned based on present market rates, helping offset emissions.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
