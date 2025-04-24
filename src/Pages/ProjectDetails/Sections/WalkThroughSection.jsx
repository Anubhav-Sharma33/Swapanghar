import { useContext } from "react";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import { FormModelContext } from "../../../Store/Context/FormModalContext";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import Button from "../../../Components/UI/ProjectDetails/Button";
import { urlFor } from "../../../utils/imageUrl";

const WalkThroughSection = ({ brochureWalkthrough }) => {
  const { openModal } = useContext(FormModelContext);
  const { openModal: OpenContentModal } = useContext(ContentModalContext);
  const imageUrl = urlFor(brochureWalkthrough.sectionImage).url();
  const content = {heading: "Walkthrough", Content:brochureWalkthrough.walkthroughItems[0].walkthrough}
  return (
    <SectionWrapper className="pb-[2.5rem]">
      <div className="w-full flex justify-center flex-wrap text-white">
        <div className="w-full lg:w-[84%] max-w-[100%] flex justify-center">
          <div
            className={`relative`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/75 pointer-events-none z-10"></div>
            <div className="relative flex flex-col justify-center min-h-[475px] py-[2.5rem] z-20">
              <div className="w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[92%] flex-none px-[0.75rem]">
                  <h1 className="text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
                    Walkthrough
                  </h1>
                  <p className="text-center font-normal mb-[1rem] text-[1rem]">
                    {brochureWalkthrough.walkthroughItems[0].walkthrough}
                  </p>
                  <div className="flex gap-x-[10px] mt-[1rem] justify-center">
                    <Button
                      className={"bg-white text-black"}
                      onClick={() => {
                        openModal();
                      }}
                    >
                      VIEW
                    </Button>
                    <Button
                      className={"bg-[#2f2f2f] text-white"}
                      type="button"
                      onClick={() => {
                        OpenContentModal(content);
                      }}
                    >
                      READ MORE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WalkThroughSection;
