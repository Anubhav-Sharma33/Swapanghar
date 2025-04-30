import React from "react";
import Banner from "./Homepage/Sections/Banner";
import SectionOne from "./Homepage/Sections/SectionOne";
import SectionThree from "./Homepage/Sections/SectionThree";
import SectionFour from "./Homepage/Sections/SectionFour";
import ProjectPreviewSection from "./Homepage/Sections/ProjectPreviewSection";
import onScroll from "../hooks/scrollToTop";
import { useLoaderData, useOutletContext } from "react-router-dom";

const Home = () => {
  const loaderData = useOutletContext()
  // console.log(loaderData);
  onScroll();
  return (
    <>
      <Banner data = {loaderData}/>
      {/* <SectionOne />
      <SectionThree />
      <SectionFour /> */}
      <ProjectPreviewSection/>
      <div className="h-[100px]"></div>
    </>
  );
};

export default Home;
