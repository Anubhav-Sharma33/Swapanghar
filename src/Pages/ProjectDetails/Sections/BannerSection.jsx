import BannerComponent from "../../../Components/BannerComponent";
import Carousel from "../../../Components/Carousel";
import ReraBox from "../../../Components/Rerabox";


const BannerSection = ({banners,project_details,quickDetails,location}) => {
  // console.log(banners)
  return (
    <div className="relative w-full h-auto lg:h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-7.125rem)] z-10">
      <ReraBox parent = {"Banner"} project_details={project_details}  />
      <Carousel banners = {banners}/>
      <BannerComponent project_details={project_details} quickDetails={quickDetails} location={location}/>
    </div>
  );
};

export default BannerSection;
