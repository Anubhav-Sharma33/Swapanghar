
import { useState, useEffect } from "react";

const ReraBox = (props) => {
  const parent = props.parent;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  
  const shouldShow =
    (parent === "Form" && width > 1024) ||
    (parent === "Banner" && width < 1024);

  if (!shouldShow) return null;
  else {
    return (
      <div
        className={`flex items-center justify-between px-3 py-1 bg-white gap-x-5 ${
          width <= 1024
            ? `${parent == "Banner" && ""}`
            : `${parent == "Banner" && "hidden"}`
        }`}
      >
        <div className="flex flex-col justify-center">
          <p className="break-all whitespace-normal text-[.875rem]">
          RERA No: WBRERA/P/SOU/2023/000015
          </p>
          <a
            href="https://rera.karnataka.gov.in/"
            className="break-all whitespace-normal text-[.825rem]"
          >
            <i className="fa fa-link text-[10px] sm:text-xs md:text-sm"></i>{" "}
            https://rera.karnataka.gov.in
          </a>
        </div>
        <div className="flex justify-center flex-grow-0 flex-shrink-0">
          <img
            src="https://sar.ecis.in/api/starestate/star_estate/projects/2025-02-19_12-39-13_Untitled.png"
            alt="QR Code"
            className="h-[3.18rem] w-auto"
          />
        </div>
      </div>
    );
  }
};

export default ReraBox;
