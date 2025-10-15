import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import CountryProfile from "./components/CountryProfile.jsx";
import CountryGrid from "./components/CountryGrid.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("grid"); // 'grid' or 'profile'

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }

        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);

        // Select first country by default for profile view
        if (data.length > 0) {
          setSelectedCountry(data[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredCountries(countries);
      setView("grid");
      return;
    }

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredCountries(filtered);

    // Add to recent searches if not empty and not already in list
    if (term.trim() && !recentSearches.includes(term.trim())) {
      const newRecentSearches = [term.trim(), ...recentSearches.slice(0, 4)];
      setRecentSearches(newRecentSearches);
    }

    // If only one result, show profile view
    if (filtered.length === 1) {
      setSelectedCountry(filtered[0]);
      setView("profile");
    } else {
      setView("grid");
    }
  };

  const handleRecentSearch = (term) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setView("profile");
  };

  const handleBackToGrid = () => {
    setView("grid");
    setSearchTerm("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500 bg-red-100 p-6 rounded-lg max-w-md">
          <p className="font-semibold">Error: {error}</p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          recentSearches={recentSearches}
          onRecentSearch={handleRecentSearch}
          onBackToGrid={handleBackToGrid}
          currentView={view}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="p-8">
            {view === "profile" && selectedCountry ? (
              <CountryProfile
                country={selectedCountry}
                onBack={handleBackToGrid}
              />
            ) : (
              <CountryGrid
                countries={filteredCountries}
                searchTerm={searchTerm}
                onCountrySelect={handleCountrySelect}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
