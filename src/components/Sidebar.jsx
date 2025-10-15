import React from "react";

const Sidebar = ({
  searchTerm,
  onSearch,
  recentSearches,
  onRecentSearch,
  onBackToGrid,
  currentView,
}) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="fixed inset-y-0 left-0 w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      {/* Logo/Brand */}
      <div className="flex items-center mb-8">
        <div className="text-2xl font-bold text-gray-800">CountryFinder</div>
      </div>

      {/* Navigation */}
      <nav className="mb-8">
        <div className="flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#product" className="hover:text-gray-900">
            Product
          </a>
          <a href="#features" className="hover:text-gray-900">
            Features
          </a>
          <a href="#marketplace" className="hover:text-gray-900">
            Marketplace
          </a>
          <a href="#company" className="hover:text-gray-900">
            Company
          </a>
          <button className="text-blue-600 hover:text-blue-800 ml-auto">
            Log in
          </button>
        </div>
      </nav>

      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search countries..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Recent searches
          </h3>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => onRecentSearch(search)}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 
                         hover:bg-gray-100 rounded-md transition-colors duration-150"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Back to Grid Button */}
      {currentView === "profile" && (
        <button
          onClick={onBackToGrid}
          className="w-full mt-8 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg 
                   hover:bg-gray-200 transition-colors duration-150 text-sm font-medium"
        >
          ← Back to all countries
        </button>
      )}
    </div>
  );
};

export default Sidebar;
