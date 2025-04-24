import Accordion from "../../../Components/Accordian";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";

const FaqSection = ({faqs}) => {
  return (
    <SectionWrapper
      className="pb-[2.5rem]"
      style={{
        background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
        boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
      }}
    >
      <div className="flex mb-[20px] justify-center">
        <h2 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold">
          FAQ
        </h2>
      </div>
      <div className="w-full">
        <Accordion faqs = {faqs} />
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
