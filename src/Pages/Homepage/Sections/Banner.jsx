import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const priceRangeMap = {
  "UpTo 1 Cr": { min: 0, max: 10000000 },
  "1-3 Cr": { min: 10000000, max: 30000000 },
  "3-5 Cr": { min: 30000000, max: 50000000 },
  "Above 5 Cr": { min: 50000000, max: Infinity },
};

const img = new Array(4).fill("https://www.starestate.com/assets/images/homebanner/banner-villa.webp");

const Banner = ({ data }) => {
  const [index, setIndex] = useState(0);
  const propertyTypeRef = useRef();
  const locationRef = useRef();
  const budgetRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % img.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    const propertyType = propertyTypeRef.current.value;
    const location = locationRef.current.value;
    const budget = budgetRef.current.value;
    const params = new URLSearchParams();

    if (propertyType) params.append("propertyType", propertyType);
    if (location) params.append("location", location);
    if (budget) params.append("budget", budget);

    navigate(`/projects?${params.toString()}`);
  };

  return (
    <div className="relative w-full h-[80vh] xl:h-[70vh] overflow-hidden flex">
      {/* Background Image */}
      <img
        src={img[index]}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Top-right Badge */}
      <div className="absolute top-4 right-4 z-20">
        <img
          src="https://www.starestate.com/assets/images/gow-logo.png"
          alt="Great Place to Work"
          className="w-20 md:w-24"
        />
      </div>

      {/* Center Content */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
        <div className="max-w-[960px] mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold drop-shadow-sm uppercase">
            You Deserve The Best
          </h1>

          {/* Form Section */}
          <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 shadow-lg">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col lg:flex-row gap-3">
              <select
                ref={propertyTypeRef}
                className="flex-1 py-4 px-5 rounded-md text-base bg-white text-gray-800 focus:outline-none border border-gray-300"
              >
                <option value="">Property Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
              </select>

              <select
                ref={locationRef}
                className="flex-1 py-4 px-5 rounded-md text-base bg-white text-gray-800 focus:outline-none border border-gray-300"
              >
                <option value="">Project Location</option>
                {data.cityLocation.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              <select
                ref={budgetRef}
                className="flex-1 py-4 px-5 rounded-md text-base bg-white text-gray-800 focus:outline-none border border-gray-300"
              >
                <option value="">Budget</option>
                {Object.keys(priceRangeMap).map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full lg:w-auto py-4 px-7 bg-black text-white text-base rounded-md hover:bg-gray-900 transition"
              >
                Submit
              </button>
            </form>

            {/* Navigation Buttons */}
            <div className="mt-6 flex flex-col lg:flex-row gap-3">
              <Link
                to="/projects/new-launches"
                className="flex-1 text-center py-4 bg-white/50 rounded-md text-base font-medium hover:shadow-md hover:scale-105 transition"
              >
                NEW LAUNCHES
              </Link>
              <Link
                to="/projects/commercial"
                className="flex-1 text-center py-4 bg-white/50 rounded-md text-base font-medium hover:shadow-md hover:scale-105 transition"
              >
                COMMERCIAL PROPERTIES
              </Link>
              <Link
                to="/projects/residential"
                className="flex-1 text-center py-4 bg-white/50 rounded-md text-base font-medium hover:shadow-md hover:scale-105 transition"
              >
                RESIDENTIAL PROPERTIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
