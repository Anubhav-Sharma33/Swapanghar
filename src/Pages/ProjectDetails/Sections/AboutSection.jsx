import { useContext } from "react";
import { FormModelContext } from "../../../Store/Context/FormModalContext";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import Button from "../../../Components/UI/ProjectDetails/Button";

const content = {
  heading: "Project Details",
  Content:
    "Orchard at Godrej SE7EN in Joka, Kolkata has a delightful lifestyle enduring timeless elegance. The thoughtfully designed interiors give your home an exquisite vibe. That ascertains extreme joyfulness while setting a benchmark of finest living.Your lavish lifestyle gets a refreshing compliment from nature. Coexist with over 100+ fruit-bearing trees and green walkways to raise the thrill of a tranquil lifestyle.At Joka, Kolkata, Orchard in Godrej SE7EN, a RERA-registered residential project draws refreshment. With the addition of renewable features, Godrej Properties curtail dependency on expensive living standards. Also, it brings positivity, and fresh air into life every moment.",
};

const AboutSection = () => {
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
            <p className="text-center mb-[1rem]">
              Orchard at Godrej SE7EN, Kolkata is a blissful residential project
              nestled in the lap of nature. The serenity and bright sunshine
              lingering endlessly reciprocate the song of happiness. With
              precision and thoughtfulness, the project crafts top 2 BHK and 3
              BHK apartments in Kolkata.
            </p>
            <p className="text-center mb-[1rem]">
              Discover the joy and passion without hampering the work day
              pattern. Here, every breath you take is away from pollution and
              toxicity. A home here is an ode to self-care as the tranquillity
              being peace and time to introspect on what’s bothering you.
            </p>
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
