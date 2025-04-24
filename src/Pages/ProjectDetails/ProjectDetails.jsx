import React, { useEffect } from "react";
import FormModalContext from "../../Store/Context/FormModalContext";
import Header from "../../Components/Shared/ProjectDetails/Header";
import Footer from "../../Components/Shared/Footer";
import LowerNavBar from "../../Components/Shared/ProjectDetails/LowerNavBAr";
import BannerSection from "./Sections/BannerSection";
import FormSection from "./Sections/FormSection";
import WalkThroughSection from "./Sections/WalkThroughSection";
import AmenitiesSection from "./Sections/AmenitiesSection";
import FloorPlanSection from "./Sections/FloorPlanSection";
import GallerySection from "./Sections/GallerySection";
import LocationSection from "./Sections/LocationSection";
import GetInTouchSection from "./Sections/GetINTouchSection";
import FaqSection from "./Sections/FaqSection";
import AboutSection from "./Sections/AboutSection";
import CompanyInfoSection from "./Sections/CompanyInfoSection";
import ContextModalProvider from "../../Store/Context/ContentModalContext";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const data = useLoaderData();
  const {faqs,amenities,floorPlan,floorPlansContent,banners,brochureWalkthrough,location,projectGallery,project_details} = data;

  useEffect(() => {
    window.scrollTo(0, 0); // or use { top: 0, behavior: "smooth" } if needed
  }, []);


  return (
    <FormModalContext>
      <Header project_details= {project_details}/>
      <ContextModalProvider>
        <BannerSection banners = {banners}/>
        <FormSection />
        <AboutSection />
        <WalkThroughSection brochureWalkthrough = {brochureWalkthrough} />
        <AmenitiesSection amenities = {amenities}/>  
        <FloorPlanSection floorPlan = {floorPlan} floorPlansContent = {floorPlansContent} /> 
        <GallerySection projectGallery = {projectGallery}/> 
        <LocationSection location = {location}/> 
        <GetInTouchSection />
        <FaqSection faqs = {faqs}/>
        <CompanyInfoSection />
      </ContextModalProvider>
      <Footer />
      <LowerNavBar />
    </FormModalContext>
  );
};

export default ProjectDetails;
