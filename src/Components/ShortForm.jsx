import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slugify } from "../utils/slug";

const priceRangeMap = {
  "UpTo 1 Cr": { min: 0, max: 10000000 },
  "1-3 Cr": { min: 10000000, max: 30000000 },
  "3-5 Cr": { min: 30000000, max: 50000000 },
  "Above 5 Cr": { min: 50000000, max: Infinity },
};

const ShortForm = ({ projectLocation = [], city = "" }) => {
  const locationRef = useRef();
  const budgetRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedLocation =
      projectLocation.length === 0 ? slugify(city) : slugify(locationRef.current.value);
    const selectedBudget = budgetRef.current.value;

    const params = new URLSearchParams();
    if (selectedLocation) params.append("location", selectedLocation);
    if (selectedBudget) params.append("budget", selectedBudget);

    navigate(`/projects?${params.toString()}`);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-6 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/30 backdrop-blur-sm shadow-xl rounded-lg p-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4"
          >
            {/* Location Select */}
            <div className="relative w-full md:w-1/2 bg-white">
              <select
                ref={locationRef}
                name="cityLocation"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="" selected disabled>
                  Project Location
                </option>
                {Array.isArray(projectLocation) &&
                  projectLocation.map((item, idx) => (
                    <option key={idx} value={item.name}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div className="sm:hidden pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                ▼
              </div>
            </div>

            {/* Budget Select */}
            <div className="relative w-full md:w-1/2 bg-white">
              <select
                ref={budgetRef}
                name="projectPrice"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="" selected disabled>
                  Budget
                </option>
                {Object.keys(priceRangeMap).map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
              <div className=" sm:hidden pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                ▼
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-md text-sm font-semibold uppercase tracking-wider px-5 py-2 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShortForm;
