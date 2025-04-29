import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SectionWrapper from "../Components/UI/ProjectDetails/SectionWrapper";
import ProjectPreviewCard from "../Components/ProjectPreviewCard";
import CompanyInfoSection from "./ProjectDetails/Sections/CompanyInfoSection";
import Button from "../Components/UI/ProjectDetails/Button";
import { deslugify } from "../utils/slug";
import { ContentModalContext } from "../Store/Context/ContentModalContext";
import { urlFor } from "../utils/imageUrl";

const images = {
  mobile: "https://www.starestate.com/assets/images/banner-all-projects-m.jpg",
  desktop: "https://www.starestate.com/assets/images/banner-all-projects.jpg",
};

const BuilderListing = () => {
  const data = useLoaderData();
  const { openModal } = useContext(ContentModalContext);
  const content = {
    heading: "Builder Details",
    Content: data.builderDetails.moreData,
  };
  const [images, setImages] = useState(data.builderDetails.builderImages);
  const { builderName } = useParams();
  const builder = deslugify(builderName);
  // console.log(builderName);
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
      <div className="relative w-full ">
      <h1 className="absolute top-[50%] left-[50%] translate-[-50%]  text-[calc(1.325rem+.9vw)] font-semibold text-[#525252]">{builder}</h1>
        <img src={url} className="w-full h-auto object-cover" />
      </div>
      <SectionWrapper>
        <div className="w-full">
          <ol
            className="text-[14px] mb-0 p-[12px_1rem] rounded-none flex flex-wrap items-center gap-x-[7px]"
            style={{
              background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
              boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
            }}
          >
            <li className="flex items-center gap-x-2">
              <a href="/" className="text-primary hover:underline">
                Home
              </a>
              <span className="text-gray-400">/</span>
            </li>
            <li className="flex items-center gap-x-2">
              <a href="#" className="text-primary hover:underline">
                Builder
              </a>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-gray-700">{builder}</li>
          </ol>
        </div>
      </SectionWrapper>
      <SectionWrapper className="pb-[2.5rem]">
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            {builder}
          </h1>
        </div>
        <div className="flex flex-col text-[1rem] font-normal text-[#525252]">
          {data.builderDetails.builderDetails.map((item) => {
            return <p className="text-center mb-[1rem]">{item.detail}</p>;
          })}
        </div>
        {data.builderDetails.moreData.length != 0 && (
          <div className="flex gap-x-[10px] mt-[9px] justify-center font-semibold mb-[2rem]">
            <Button
              type="button"
              className={"bg-[#2f2f2f] text-white"}
              onClick={() => {
                openModal(content);
              }}
            >
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

export default BuilderListing;
