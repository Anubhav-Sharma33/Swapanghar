import { useContext } from "react";
import { FormModelContext } from "../../../Store/Context/FormModalContext";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import Button from "../../../Components/UI/ProjectDetails/Button";

const AboutSection = ({aboutUs}) => {
  const {aboutUsItems, moreData}  = aboutUs;
  const content = {heading : "Project Details", Content: moreData};
  const {openModal} = useContext(FormModelContext);
  const { openModal:OpenContentModal } = useContext(ContentModalContext);
  return (
    <SectionWrapper id="AboutSection">
      <div className="w-full">
          <div className="flex justify-center mb-[20px] text-[#525252]">
            <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
              About The Project
            </h1>
          </div>
          <div className="flex flex-col text-[1rem] font-normal text-[#525252]">
          {aboutUsItems.map((item)=>{
            return(
              <p className="text-center mb-[1rem]">{item.aboutContent}</p>
            )
          })}
          </div>
          <div className="flex justify-center gap-x-[10px] mt-[1.5rem] font-semibold">
            <Button type="button" className={"bg-[#2f2f2f] text-white"} onClick={()=>{
             OpenContentModal(content)}}>READ MORE</Button>

             <Button className={"bg-[#eff0f3] text-[#2f2f2f]"} onClick={(e) => {
                e.preventDefault();
                openModal();
              }}>DOWNLOAD BROCHURE</Button>
              <Button className={"bg-[#2f2f2f] text-white"} onClick={(e) => {
                e.preventDefault();
                openModal();
              }}>SCHEDULE SITE VISIT</Button>
          </div>
        </div>
    </SectionWrapper>
  );
};

export default AboutSection;
