import React from "react";
import Banner from "./Homepage/Sections/Banner";
import SectionOne from "./Homepage/Sections/SectionOne";
import SectionThree from "./Homepage/Sections/SectionThree";
import SectionFour from "./Homepage/Sections/SectionFour";
import ProjectPreviewSection from "./Homepage/Sections/ProjectPreviewSection";
import onScroll from "../hooks/scrollToTop";

const Home = () => {
  onScroll()
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

export default Home;
