import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../utils/imageUrl";

const ProjectPreviewCard = ({item}) => {
  // console.log(item)
  return (
    <div className="px-[10px] py-[10px]">
      <Link className="w-full" to={`/${item.project_details.slugURL.current}`} target="_blank">
        <div className="relative w-full">
          <div
            className={`absolute top-0 right-0 flex items-center justify-between px-2 py-1  gap-x-2`}
          >
            <div className="flex flex-col justify-center font-bold ">
              <p className="break-all whitespace-normal text-[.875em]">
                <span className="text-green-900">RERA No:</span> {item.project_details.rera_no}
              </p>
              <span
                href={item.project_details.rera_link}
                className="break-all whitespace-normal text-[.825rem] text-green-900"
               >
                <i className="fa fa-link text-[10px] sm:text-xs md:text-sm text-green-900"></i>{" "}
                {item.project_details.rera_link}
              </span>
            </div>
            <div className="flex justify-center flex-grow-0 flex-shrink-0 ">
              <img
                src={urlFor(item.project_details.rera_qr).url()}
                alt="QR Code"
                className="h-[30px] w-auto"
              />
            </div>
          </div>
          <div className="w-full">
            <img
              src={urlFor(item.project_details.project_thumbnail).url()}  
              className="w-full h-auto object-center"
            />
          </div>
        </div>
        <div className="pt-[15px] pb-[5px]">
          <div className="flex justify-between gap-x-[10px] items-center font-bold">
            <h4 className="text-[1.125rem]">{item.project_details.projectRef.name}</h4>
            <h6 className="text-[13px] text-[#116d42]">Price on Request</h6>
          </div>
          <div className="text-[11px] uppercase flex flex-wrap gap-x-[1rem] gap-y-2 mt-[10px] pt-[10px] border-t border-dashed border-[rgba(0,0,0,0.1)]">
            <span className="flex gap-x-[4px] items-center">
              <i className="fa fa-map-marker-alt"></i>{item.location.projectAddress}
            </span>
            <span className="flex gap-x-[4px] items-center">
              <i className="fa-brands fa-font-awesome"></i>{item.project_details.property_type}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreviewCard;
