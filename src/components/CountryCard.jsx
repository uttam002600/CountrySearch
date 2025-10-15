import React from "react";

const CountryCard = ({ country, onSelect }) => {
  const formatPopulation = (population) => {
    return new Intl.NumberFormat().format(population);
  };

  console.log(country);
  return (
    <div
      onClick={() => onSelect(country)}
      className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer 
                hover:shadow-md hover:border-gray-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          {/* FIXED: Use country.name directly */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {country.name}
          </h3>
          <p className="text-sm text-gray-500">{country.nativeName}</p>
        </div>
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          className="w-12 h-8 object-cover rounded shadow-sm"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/48x32?text=Flag";
          }}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span>Capital: {country.capital || "N/A"}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <span>Population: {formatPopulation(country.population)}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Region: {country.region}</span>
        </div>
      </div>

      <button
        className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md 
                       hover:bg-gray-200 transition-colors duration-150 text-sm font-medium"
      >
        View Profile
      </button>
    </div>
  );
};

export default CountryCard;
