import React from "react";
import CountryCard from "./CountryCard";

const CountryGrid = ({ countries, searchTerm, onCountrySelect }) => {
  if (countries.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">🌍</div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">
          No country found!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          {searchTerm
            ? `No countries found matching "${searchTerm}". Try searching with different terms.`
            : "No countries available at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchTerm ? `Search Results for "${searchTerm}"` : "All Countries"}
        </h2>
        <p className="text-gray-600 mt-2">
          {countries.length} {countries.length === 1 ? "country" : "countries"}{" "}
          found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            country={country}
            onSelect={onCountrySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
