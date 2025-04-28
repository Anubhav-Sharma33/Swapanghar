
import { useState, useEffect } from "react";
import { urlFor } from "../utils/imageUrl";

const ReraBox = ({parent,project_details}) => {
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
          {project_details.rera_no}
          </p>
          <a
            href="https://rera.karnataka.gov.in/"
            className="break-all whitespace-normal text-[.825rem]"
          >
            <i className="fa fa-link text-[10px] sm:text-xs md:text-sm"></i>{" "}
            {project_details.rera_link}
          </a>
        </div>
        <div className="flex justify-center flex-grow-0 flex-shrink-0">
          <img
            src={urlFor(project_details.rera_qr).url()}
            alt="QR Code"
            className="h-[3.18rem] w-auto"
          />
        </div>
      </div>
    );
  }
};

export default ReraBox;
