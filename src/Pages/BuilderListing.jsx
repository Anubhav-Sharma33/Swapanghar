import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SectionWrapper from "../Components/UI/ProjectDetails/SectionWrapper";
import ProjectPreviewCard from "../Components/ProjectPreviewCard";
import CompanyInfoSection from "./ProjectDetails/Sections/CompanyInfoSection";
import Button from "../Components/UI/ProjectDetails/Button";

const images = {
  mobile: "https://www.starestate.com/assets/images/banner-all-projects-m.jpg",
  desktop: "https://www.starestate.com/assets/images/banner-all-projects.jpg",
};

const BuilderListing = () => {
  const data = useLoaderData();
  const { builderName } = useParams();
  console.log(builderName);
  console.log(data);
  const [url, setUrl] = useState(images.desktop);

  useEffect(() => {
    function changeUrl() {
      const width = window.innerWidth;
      if (width < 540) {
        setUrl(images.mobile);
      } else {
        setUrl(images.desktop);
      }
    }
    changeUrl();
    window.addEventListener("resize", changeUrl);
    return () => {
      window.removeEventListener("resize", changeUrl);
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <img src={url} className="w-full h-auto object-cover" />
      </div>
      <SectionWrapper className="pb-[2.5rem]">
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            {builderName}
          </h1>
        </div>
        <div className="flex flex-col text-[1rem] font-normal text-[#525252]">
          <p className="text-center mb-[1rem]">
            Noida, the city with sky-scrapping residential buildings and eminent
            offices, lures premium retail brands. The city is changing its
            retail shopping destination to match the demand of premium shoppers
            near home. Ace Group renders commercial and residential properties
            in Sector 153, Noida, extending cityscape views and greenery. The
            presence of commercial activities and mavens with offices here
            prefer to reside next to the same.
          </p>
        </div>
        <div className="flex gap-x-[10px] mt-[9px] justify-center font-semibold mb-[2rem]">
          <Button
            type="button"
            className={"bg-[#2f2f2f] text-white"}
          >
            READ MORE
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <ProjectPreviewCard item={item} />
          ))}
        </div>
      </SectionWrapper>
      <CompanyInfoSection />
    </>
  );
};

export default BuilderListing;
