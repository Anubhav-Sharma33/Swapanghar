import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams,Link, useOutletContext } from "react-router-dom";
import SectionWrapper from "../Components/UI/ProjectDetails/SectionWrapper";
import ProjectPreviewCard from "../Components/ProjectPreviewCard";
import CompanyInfoSection from "./ProjectDetails/Sections/CompanyInfoSection";
import Button from "../Components/UI/ProjectDetails/Button";
import { deslugify } from "../utils/slug";
import { ContentModalContext } from "../Store/Context/ContentModalContext";
import onScroll from "../hooks/scrollToTop";
import ShortForm from "../Components/ShortForm";

const images = {
  mobile: "https://www.starestate.com/assets/images/banner-all-projects-m.jpg",
  desktop: "https://www.starestate.com/assets/images/banner-all-projects.jpg",
};

const ProjectListing = () => {
  onScroll()
  const parentData = useOutletContext();
  console.log(parentData);
  const data = useLoaderData();
  const projectData = useParams();
  const projectType = deslugify(projectData.projectType);
  const {openModal} = useContext(ContentModalContext);
  const content = {
    heading: projectType,
    Content: projectType === "New Launches" ? "" : data.propertyTypeDetails.moreData,
  };  
  // console.log(projectType);
  // console.log(data);
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
      <div className="relative w-full">
        <img src={url} className="w-full h-auto object-cover" />
        <ShortForm projectLocation={parentData.cityLocation}/>
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
            <Link to= "/" className="text-primary hover:underline">
                Home
              </Link>
              <span className="text-gray-400">/</span>
            </li>
            <li className="flex items-center gap-x-2">
            <Link to="/projects" className="text-primary hover:underline">
                Projects
              </Link>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-gray-700">{projectType}</li>
          </ol>
        </div>
      </SectionWrapper>
      <SectionWrapper className="pb-[2.5rem]">
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            {projectType} Projects
          </h1>
        </div>
        {projectType != "New Launches" && (<div className="flex flex-col text-[1rem] font-normal text-[#525252]">
          {data.propertyTypeDetails.typeDetails.map((item) => {
            return <p className="text-center mb-[1rem]">{item.detail}</p>;
          })}
        </div>)}
        {(projectType != "New Launches" && data.propertyTypeDetails.moreData && data.propertyTypeDetails.moreData.length !=0 ) && (
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
          {
            data.projects.map((item) => (
            <ProjectPreviewCard item={item} />
          ))
          }
        </div>
      </SectionWrapper>
      <CompanyInfoSection />
    </>
  );
};

export default ProjectListing;
