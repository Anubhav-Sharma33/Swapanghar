import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";

const CompanyInfoSection = () => {
  return (
    <SectionWrapper className="pb-[2.5rem] bg-[#f5f5f5]">
      <div className="w-full flex flex-col items-center md:flex-row">
        <div className="w-full flex flex-col justify-center items-center px-[0.75rem] [@media(min-width:425px)]:flex-row [@media(min-width:425px)]:gap-x-[2rem]">
          <div className="flex flex-col items-center justify-center pb-5 [@media(min-width:425px)]:pb-0">
            <h6 className="mb-4 text-4 font-bold text-center text-[#2f2f2f]">
              Marketing Partner
            </h6>
            <img
              src="https://www.starestate.com/assets/images/logo-starestate.png"
              className="w-[130px] h-auto object-cover [@media(min-width:425px)]:w-[150px] lg:w-[200px]"
            />
          </div>
          <div className="w-full border-1 [@media(min-width:425px)]:hidden"></div>
          <div className="font-normal text-4 mt-4 [@media(min-width:425px)]:mt-0">
            <div>
              <p className="font-normal text-[#2f2f2f]">
                <b>RERA No.: WBRERA/A/KOL/2025/000609</b>
                <br />
                <a className="text-[#116d42]">https://rera.wb.gov.in/</a>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden border-1 md:block h-25"></div>
        <div className="w-full flex flex-col items-center justify-center mt-[2rem] md:mt-0 px-[0.75rem] [@media(min-width:425px)]:flex-row [@media(min-width:425px)]:gap-x-[2rem]">
          <div className="flex flex-col items-center pb-5 [@media(min-width:425px)]:pb-0">
            <img
              src="https://sar.ecis.in/api/starestate/star_estate/projects/2025-02-19_12-39-13_Untitled.png"
              className="w-[90px] h-auto object-cover"
            />
          </div>
          <div className="w-full border-1 [@media(min-width:425px)]:hidden"></div>
          <div className="font-normal text-4 mt-4 [@media(min-width:425px)]:mt-0">
            <p className="font-normal text-[#2f2f2f]">
              <b>Project RERA No.: WBRERA/P/SOU/2023/000015</b>
            </p>
            <p>
              <a className="text-[#116d42]">https://rera.wb.gov.in/</a>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CompanyInfoSection;
