import { useContext } from "react";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import FloorPlanSubSection from "../../../Components/FloorPlanSubSection";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import Button from "../../../Components/UI/ProjectDetails/Button";

const FloorPlanSection = ({floorPlan,floorPlansContent}) => {
  const { openModal } = useContext(ContentModalContext);
  // console.log(floorPlansContent);
  const content = {heading: "Floor Plans", Content:floorPlansContent[0].data1}
  return (
    <SectionWrapper className="pb-[2.5rem]" id={"FloorPlanSection"}>
      <div className="w-full scroll-mt-[81px] md:scroll-mt-[86px] lg:scroll-mt-[57px]">
        <div className="flex flex-col items-center mb-[20px] text-[#2f2f2f]">
          <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            Floor Plans
          </h1>
          {floorPlansContent[0].data1.map((item)=>{
            return(
              <p className="text-center font-normal mb-[1rem] text-[1rem] truncate-2-lines">
            {item.Content}
          </p>
            )
          })}
          <div className="flex gap-x-[10px] mt-[1rem] justify-center">
            <Button
              type="button"
              className={"bg-[#2f2f2f] text-white"}
              onClick={() => {
                openModal(content);
              }}
            >
              READ MORE
            </Button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-y-[20px] sm:flex-row sm:gap-y-[20px] justify-center flex-wrap">
            {floorPlan.map((item, index) => {
              return (
                <FloorPlanSubSection item = {item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FloorPlanSection;
