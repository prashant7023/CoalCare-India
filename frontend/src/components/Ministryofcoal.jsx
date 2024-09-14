import React from "react";

const MinistryOfCoal = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-6">
      {/* Left Section */}
      <div className="md:w-2/3 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold text-yellow-700">Ministry Of Coal</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the website of Ministry of Coal, Government of India.
        </p>
        <p className="mt-4 text-gray-700">
          The Ministry of Coal has the overall responsibility of determining
          policies and strategies in respect of exploration and development of
          coal and lignite reserves, sanctioning of important projects of high
          value and for deciding all related issues. Under the administrative
          control of the Ministry, these key functions are exercised through
          the Public Sector Undertakings, namely, Coal India Ltd. and its
          subsidiaries and Neyveli Lignite Corporation India Limited (NLCIL).
          Other than Coal India Ltd. and Neyveli Lignite Corporation India Ltd.,
          the Ministry of Coal also has a joint venture with Government of
          Telangana called Singareni Collieries Company Limited. Government of
          Telangana holds 51% equity and Government of India holds 49% equity.
        </p>
        <button className="mt-4 text-yellow-700 border border-yellow-700 px-4 py-2 rounded hover:bg-yellow-700 hover:text-white">
          READ MORE &gt;
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 grid gap-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Narendra_Modi_2015.jpg/330px-Narendra_Modi_2015.jpg"
            alt="Narendra Modi"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Shri Narendra Modi</h2>
            <p className="text-sm text-gray-500">Hon'ble Prime Minister</p>
            <button className="mt-2 text-yellow-700 border border-yellow-700 px-4 py-2 rounded hover:bg-yellow-700 hover:text-white">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kishan_Reddy.jpg/330px-Kishan_Reddy.jpg"
            alt="G. Kishan Reddy"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Shri G. Kishan Reddy</h2>
            <p className="text-sm text-gray-500">
              Hon'ble Union Minister of Coal and Mines, Govt. of India
            </p>
            <button className="mt-2 text-yellow-700 border border-yellow-700 px-4 py-2 rounded hover:bg-yellow-700 hover:text-white">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Satish_Chandra_Dubey.jpg/330px-Satish_Chandra_Dubey.jpg"
            alt="Satish Chandra Dubey"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Shri Satish Chandra Dubey</h2>
            <p className="text-sm text-gray-500">
              Hon'ble Minister of State for Coal and Mines, Govt. of India
            </p>
            <button className="mt-2 text-yellow-700 border border-yellow-700 px-4 py-2 rounded hover:bg-yellow-700 hover:text-white">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryOfCoal;
