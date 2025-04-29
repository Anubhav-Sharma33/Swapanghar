import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import SectionWrapper from '../Components/UI/ProjectDetails/SectionWrapper';
import ProjectPreviewCard from '../Components/ProjectPreviewCard';
import CompanyInfoSection from './ProjectDetails/Sections/CompanyInfoSection';
import Button from "../Components/UI/ProjectDetails/Button";
import { deslugify } from '../utils/slug';

const images = {
  mobile: "https://www.starestate.com/assets/images/banner-all-projects-m.jpg",
  desktop: "https://www.starestate.com/assets/images/banner-all-projects.jpg",
};

const ProjectListing = () => {
  const data = useLoaderData();
  const projectData = useParams();
  const projectType = deslugify(projectData.projectType);
  // console.log(projectType);
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
      <div>bar</div>
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            {projectType}
          </h1>
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
}

export default ProjectListing;