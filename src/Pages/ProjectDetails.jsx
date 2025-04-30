import React, { useEffect } from "react";
import FormModalContext from "../Store/Context/FormModalContext";
import Header from "../Components/Shared/ProjectDetails/Header";
import Footer from "../Components/Shared/Footer";
import LowerNavBar from "../Components/Shared/ProjectDetails/LowerNavBAr";
import BannerSection from "./ProjectDetails/Sections/BannerSection";
import FormSection from "./ProjectDetails/Sections/FormSection";
import WalkThroughSection from "./ProjectDetails/Sections/WalkThroughSection";
import AmenitiesSection from "./ProjectDetails/Sections/AmenitiesSection";
import FloorPlanSection from "./ProjectDetails/Sections/FloorPlanSection";
import GallerySection from "./ProjectDetails/Sections/GallerySection";
import LocationSection from "./ProjectDetails/Sections/LocationSection";
import GetInTouchSection from "./ProjectDetails/Sections/GetInTouchSection";
import FaqSection from "./ProjectDetails/Sections/FaqSection";
import AboutSection from "./ProjectDetails/Sections/AboutSection";
import CompanyInfoSection from "./ProjectDetails/Sections/CompanyInfoSection";
import { useLoaderData } from "react-router-dom";
import onScroll from "../hooks/scrollToTop";

const ProjectDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const {faqs,amenities,floorPlan,floorPlansContent,banners,brochureWalkthrough,location,projectGallery,project_details,aboutUs,quickDetails} = data;
  onScroll();


  return (
    <>
    <FormModalContext>
      <Header project_details= {project_details}/>
        <BannerSection banners = {banners} project_details= {project_details} quickDetails={quickDetails} location={location}/>
        <FormSection project_details= {project_details} quickDetails={quickDetails} location = {location}/>
        <AboutSection aboutUs = {aboutUs}/>
        <WalkThroughSection brochureWalkthrough = {brochureWalkthrough} />
        <AmenitiesSection amenities = {amenities}/>  
        <FloorPlanSection floorPlan = {floorPlan} floorPlansContent = {floorPlansContent} /> 
        <GallerySection projectGallery = {projectGallery}/> 
        <LocationSection location = {location}/> 
        <GetInTouchSection />
        <FaqSection faqs = {faqs}/>
        <CompanyInfoSection />
      <Footer />
      <LowerNavBar />
      </FormModalContext>
      </>
  );
};

export default ProjectDetails;
