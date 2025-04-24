import React from "react";
import Banner from "./Sections/Banner";
import SectionOne from "./Sections/SectionOne";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import ProjectPreviewCard from "../../Components/ProjectPreviewCard";
import Responsive from "./Sections/ProjectPreviewSection";
import ProjectPreviewSection from "./Sections/ProjectPreviewSection";

const HomePage = () => {
  return (
    <>
      <Banner/>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <ProjectPreviewSection/>
      <div className="h-[100px]"></div>
    </>
  );
};

export default HomePage;
