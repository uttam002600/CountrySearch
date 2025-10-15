import React from "react";

const CountryProfile = ({ country, onBack }) => {
  const formatPopulation = (population) => {
    return new Intl.NumberFormat().format(population);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="lg:hidden mb-6 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to all countries
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-100 relative">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="w-full h-full object-contain p-4"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x200?text=No+Flag+Available";
            }}
          />
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              {/* FIXED: Use country.name directly */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {country.name}
              </h1>
              <p className="text-lg text-gray-600">{country.nativeName}</p>
            </div>
            <div className="text-right">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {country.region}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-gray-600"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Capital</p>
                  <p className="text-lg text-gray-900">
                    {country.capital || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-gray-600"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Population
                  </p>
                  <p className="text-lg text-gray-900">
                    {formatPopulation(country.population)}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-gray-600"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Region</p>
                  <p className="text-lg text-gray-900">{country.region}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Country Code
                  </p>
                  <p className="text-lg text-gray-900">{country.alpha2Code}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              {country.languages && country.languages.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {language.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Currencies */}
              {country.currencies && country.currencies.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Currencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.currencies.map((currency, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {currency.name} ({currency.symbol || "N/A"})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timezones */}
              {country.timezones && country.timezones.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Timezones
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.timezones.map((timezone, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {timezone}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Calling Codes */}
              {country.callingCodes && country.callingCodes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Calling Codes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.callingCodes.map((code, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        +{code}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryProfile;
