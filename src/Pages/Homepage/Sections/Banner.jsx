//Things To be done:-
//Split code into Components
//Update if better css is possible 
//Update margin-padding , font-size, colour, hover-effect , font


import { useEffect, useState } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const img = [
    "https://www.starestate.com/assets/images/homebanner/banner-villa.webp",
    "https://www.starestate.com/assets/images/homebanner/banner-villa.webp",
    "https://www.starestate.com/assets/images/homebanner/banner-villa.webp",
    "https://www.starestate.com/assets/images/homebanner/banner-villa.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div className="relative w-full h-[80vh] xl:h-[70vh] overflow-hidden flex">
      {/* Background Image */}
      <img
        src={img[index]}
        alt="Background Illustration"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Great Place to Work Badge (top-right) */}
      <div className="absolute top-4 right-4 z-20">
        <img
          src="https://www.starestate.com/assets/images/gow-logo.png"
          alt="Great Place to Work Badge"
          className="w-22 md:w-24"
        />
      </div>

      {/* Content Container positioned 30% from the top */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-center w-full ">
        <div
          id="main-container"
          className="w-full flex justify-center items-center"
        >
          <div
            id="main-flex"
            className="w-full lg:w-[960px] flex justify-center items-center px-4"
          >
            <div
              id="inner-outer-div"
              className="flex flex-col justify-center items-center w-full max-w-[850px]"
            >
              {/* Heading */}
              <div className="w-full text-center lg:text-left px-2">
                <h1 className="text-lg md:text-lg lg:text-xl font-bold text-gray-800 mb-0 uppercase tracking-wider drop-shadow-sm">
                  You Deserve The Best
                </h1>
              </div>

              {/* Search Form */}
              <div
                id="search-form"
                className="flex flex-col justify-center items-center w-full lg:bg-white/40 lg:backdrop-blur-md lg:shadow-frosted p-2"
              >
                <form className="w-full">
                  <div
                    id="main-search-form"
                    className="flex flex-col w-full gap-y-[10px] lg:flex-row justify-center items-center lg:gap-x-[10px]"
                  >
                    {/* Form Inputs */}
                    <div
                      id="search-form"
                      className="flex flex-col w-full justify-center items-center lg:flex-row lg:w-[84%]"
                    >
                      {/* Property Type */}
                      <div
                        id="property-type"
                        className="w-full flex lg:flex-1 justify-center items-center bg-white border-b border-b-[#0000001a] md:border md:border-[#0000001a]"
                      >
                        <select className="w-full text-center py-4 px-3 text-sm text-gray-700 focus:outline-none">
                          <option>Property Type</option>
                          <option value="commercial">Commercial</option>
                          <option value="residential">Residential</option>
                        </select>
                      </div>

                      {/* Project Location */}
                      <div
                        id="property-location"
                        className="w-full flex lg:flex-1 justify-center items-center bg-white border-b border-b-[#0000001a] md:border md:border-[#0000001a]"
                      >
                        <select className="w-full text-center py-4 px-3 text-sm text-gray-700 focus:outline-none">
                          <option>Project Location</option>
                          <option value="city-1">City 1</option>
                          <option value="city-2">City 2</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div
                        id="budget"
                        className="w-full flex lg:flex-1 justify-center items-center bg-white border-b border-b-[#0000001a] md:border md:border-[#0000001a]"
                      >
                        <select className="w-full text-center py-4 px-3 text-sm text-gray-700 focus:outline-none">
                          <option>Budget</option>
                          <option value="50-lacs">Up to 50 Lacs</option>
                          <option value="1-cr">Up to 1 Cr</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div
                      id="search-button"
                      className="flex justify-center items-center w-full lg:w-[16%] bg-black text-white"
                    >
                      <button className="w-full py-4 px-8 text-sm text-white focus:outline-none">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                {/* Placeholder for Navigation Menu */}
                <div className="flex flex-col my-4 lg:mb-0 lg:flex-row w-full lg:space-x-2 ">
                  <a className="bg-white/40 backdrop-blur-md shadow-frosted mb-2 lg:md-0 lg:w-1/3 hover:cursor-pointer">
                    NEW LAUNCHES
                  </a>
                  <a className="bg-white/40 backdrop-blur-md shadow-frosted mb-2 lg:md-0 lg:w-1/3 hover:cursor-pointer">
                    COMMERCIAL PROPERTIES
                  </a>
                  <a className="bg-white/40 backdrop-blur-md shadow-frosted mb-2 lg:md-0 lg:w-1/3 hover:cursor-pointer">
                    RESEDENTIAL PROPERTIES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
