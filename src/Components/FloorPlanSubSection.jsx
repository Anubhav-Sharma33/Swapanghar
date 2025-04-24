import { useContext } from "react";
import { FormModelContext } from "../Store/Context/FormModalContext";
import Button from "./UI/ProjectDetails/Button";
import { urlFor } from "../utils/imageUrl";

const FloorPlanSubSection = ({item}) => {
  const { openModal } = useContext(FormModelContext);
  return (
    <div className="w-full sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] px-[0.75rem]">
      <div
        className="transition-all duration-300 ease-in-out isolate flex flex-col p-[1rem] bg-gradient-to-br from-[#eff0f3] to-white hover:scale-[1.03] hover:bg-none hover:bg-white shadow-[3px_3px_6px_#ccc,-3px_-3px_6px_#eee] hover:shadow-[6px_6px_12px_#999,-6px_-6px_12px_#ddd]
"
      >
        <img
          src={urlFor(item.image).url()}
          className="w-[100%] h-auto object-cover"
        />
        <div className="pt-[10px] flex flex-col">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center gap-x-[6px] flex-none">
              <div className="w-[20px]">
                <img
                  src="https://www.starestate.com/assets/images/icons/bed.png"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <small className="text-[0.75rem]">Type</small>
                <h6 className="text-[1rem] font-bold">{item.title}</h6>
              </div>
            </div>
          </div>
          <div className="mt-[2.5rem] flex">
          <Button onClick={() => {
                openModal();
              }} className={"bg-gradient-to-br from-[#eff0f3] to-[#ffffff] text-[#2f2f2f] shadow-[3px_3px_3px_#e8e6e6,-3px_-3px_3px_#fff] border border-[#116d42]"}>
              Price on request
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanSubSection;
