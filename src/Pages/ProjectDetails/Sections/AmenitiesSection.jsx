import { useContext } from "react";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import AmenitiesList from "../../../Components/AmenitiesList";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import Button from "../../../Components/UI/ProjectDetails/Button";


const AmenitiesSection = ({amenities}) => {
  const { openModal } = useContext(ContentModalContext);
  const content = {heading: "Amenities", Content:amenities.data1}
  // console.log(amenities);
  return (
    <SectionWrapper className="relative bg-fixed bg-center bg-cover pb-[2.5rem] bg-[url('https://sar.ecis.in/api/starestate/star_estate/project_gallery/2025-02-19T12-47-10_g3.jpg')]" id = {"AmenitiesSection"}>
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-10"></div>
      <div
        className=" relative mb-[20px] flex flex-col justify-center items-center  text-white z-20"
      >
        <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
          Amenities
        </h1>
        {amenities.data1.map((item)=>{
          return(<p className="text-center font-normal mb-[1rem] text-[1rem] truncate-2-lines">
          {item.Content}
        </p>)
        })}
        <div className="flex gap-x-[10px] mt-[9px] justify-center font-semibold">
        <Button type="button" className={"bg-[#2f2f2f] text-white"} onClick={() => {
              openModal(content);
            }}>
        READ MORE
        </Button>
        </div>
      </div>
      <AmenitiesList  amenitiesList = {amenities.data}/>
    </SectionWrapper>
  );
};

export default AmenitiesSection;
