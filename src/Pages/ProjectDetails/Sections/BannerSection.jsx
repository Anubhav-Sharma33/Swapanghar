import Carousel from "../../../Components/Carousel";
import ReraBox from "../../../Components/Rerabox";


const BannerSection = ({banners}) => {
  console.log(banners)
  return (
    <div className="w-full h-auto lg:h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-7.125rem)] z-1000">
      <ReraBox parent = {"Banner"} />
      <Carousel banners = {banners}/>
    </div>
  );
};

export default BannerSection;
