import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slugify } from "../utils/slug";

const priceRangeMap = {
  "UpTo 1 Cr": { min: 0, max: 10000000 },
  "1-3 Cr": { min: 10000000, max: 30000000 },
  "3-5 Cr": { min: 30000000, max: 50000000 },
  "Above 5 Cr": { min: 50000000, max: Infinity },
};

const ShortForm = ({ projectLocation = [] ,city = "" }) => {
  // console.log(city)
  const locationRef = useRef();
  const budgetRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedLocation =
      projectLocation.length === 0 ? city : slugify(locationRef.current.value);
    const selectedBudget = budgetRef.current.value;

    const params = new URLSearchParams();
    if (selectedLocation) params.append("location", selectedLocation);
    if (selectedBudget) params.append("budget", selectedBudget);

    navigate(`/projects?${params.toString()}`);
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%] w-full scroll-mt-[calc(81px-2rem)] md:scroll-mt-[calc(86px-2rem)] lg:scroll-mt-[calc(57px-2rem)]">
      <div className="w-full flex flex-col items-center justify-center px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">
        <div className="w-full max-w-[850px] mx-auto">
          <div className="w-full p-[10px] bg-white/25 shadow-[0_1rem_3rem_rgba(0,0,0,0.2)] backdrop-blur-[5px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col flex-wrap gap-y-[15px] md:flex-row md:gap-y-0 px-[0.25rem] md:gap-x-[10px] md:justify-center">
                <div className="w-full shrink-0 md:w-[81%]">
                  <div className="flex">
                    {/* Show projectLocation as read-only */}
                    <div className="w-1/2 grow-1 shrink-1 bg-white text-[14px]">
                      <select
                        name="cityLocation"
                        className="w-full p-[8px]"
                        ref={locationRef}
                      >
                        <option value="" selected>
                          Project Location
                        </option>
                        {Array.isArray(projectLocation) && projectLocation.map((item, idx) => (
                          <option key={idx} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="w-1/2 grow-1 shrink-1 bg-white text-[14px]">
                      <select
                        name="projectPrice"
                        ref={budgetRef}
                        className="w-full p-[8px]"
                      >
                        <option value="" selected>
                          Budget
                        </option>
                        {Object.keys(priceRangeMap).map((label) => (
                          <option key={label} value={label}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="w-full bg-black text-white flex min-w-[120px] items-center justify-center text-center text-[13px] font-semibold uppercase px-[20px] py-[9px] gap-[0.75rem] border border-transparent transition-all duration-300 ease-in-out"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortForm;
