import Form from "../../../Components/Form";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";

const GetInTouchSection = () => {
  return (
    <SectionWrapper className="pb-[2.5rem] mb-[.25rem] bg-[linear-gradient(to_bottom_right,_#eff0f3,_#ffffff)] shadow-[3px_3px_3px_#e8e6e6,_-3px_-3px_3px_#ffffff]">
      <div className="mb-[20px] flex flex-col items-center text-[#2f2f2f]">
        <h2 className=" text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
          Get in Touch
        </h2>
        <p className="text-center font-normal mb-[1rem] text-[1rem]">
          If you would like to know more details or something specific, feel
          free to contact us.
          <br />
          Our site representative will give you a call back.
        </p>
      </div>
      <div className="w-full max-w-[1000px] bg-white p-[2rem] shadow-[0_1rem_3rem_rgb(0_0_0_/_10%)]">
        <Form parent={"getintouch"} />
      </div>
    </SectionWrapper>
  );
};

export default GetInTouchSection;
