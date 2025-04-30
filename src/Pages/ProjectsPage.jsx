import React, { useEffect, useState } from "react";
import { useLoaderData,Link } from "react-router-dom";
import onScroll from "../hooks/scrollToTop";
import SectionWrapper from "../Components/UI/ProjectDetails/SectionWrapper";
import ProjectPreviewCard from "../Components/ProjectPreviewCard";

const images = {
  mobile: "https://www.starestate.com/assets/images/banner-all-projects-m.jpg",
  desktop: "https://www.starestate.com/assets/images/banner-all-projects.jpg",
};

const ProjectsPage = () => {
  onScroll();
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

  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="w-full">
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
              <Link to="/" className="text-primary hover:underline">
                Home
              </Link>
              <span className="text-gray-400">/</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Link href="/projects" className="text-primary hover:underline">
                Projects
              </Link>
            </li>
          </ol>
        </div>
      </SectionWrapper>
      <SectionWrapper className="pb-[2.5rem]">
        <div className="flex justify-center mb-[20px] text-[#525252]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            data.map((item) => (
            <ProjectPreviewCard item={item} />
          ))
          }
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProjectsPage;
