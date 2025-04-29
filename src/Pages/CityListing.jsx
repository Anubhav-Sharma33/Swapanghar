import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CompanyInfoSection from "./ProjectDetails/Sections/CompanyInfoSection";
import SectionWrapper from "../Components/UI/ProjectDetails/SectionWrapper";
import ProjectPreviewCard from "../Components/ProjectPreviewCard";
import Button from "../Components/UI/ProjectDetails/Button";
import { deslugify } from "../utils/slug";
import { urlFor } from "../utils/imageUrl";
import { ContentModalContext } from "../Store/Context/ContentModalContext";

const CityListing = () => {
  const data = useLoaderData();
  const {openModal} = useContext(ContentModalContext);
  const content = {heading : "City Details", Content: data.cityDetails.moreData};
  const [images, setImages] = useState(data.cityDetails.cityImages);
  const { cityName } = useParams();
  const city = deslugify(cityName);
  console.log(data);
  const [url, setUrl] = useState(urlFor(images.desktopImage).url());

  useEffect(() => {
    function changeUrl() {
      const width = window.innerWidth;
      if (width < 540) {
        setUrl(urlFor(images.mobileImage).url());
      } else {
        setUrl(urlFor(images.desktopImage).url());
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
        <div>Bar</div>
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            Projects in {city}
          </h1>
        </div>
        <div className="flex flex-col text-[1rem] font-normal text-[#525252]">
          {data.cityDetails.cityDetails.map((item) => {
            return <p className="text-center mb-[1rem]">{item.detail}</p>;
          })}
        </div>
        {data.cityDetails.moreData.length != 0 && (
          <div className="flex gap-x-[10px] mt-[9px] justify-center font-semibold mb-[2rem]">
            <Button type="button" className={"bg-[#2f2f2f] text-white"} onClick={()=>{
              openModal(content)
            }}>
              READ MORE
            </Button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((item) => (
            <ProjectPreviewCard item={item} />
          ))}
        </div>
      </SectionWrapper>
      <CompanyInfoSection />
    </>
  );
};

export default CityListing;
