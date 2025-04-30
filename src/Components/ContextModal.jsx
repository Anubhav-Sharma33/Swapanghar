import React, { useContext } from "react";
import { ContentModalContext } from "../Store/Context/ContentModalContext";
import { FormModelContext } from "../Store/Context/FormModalContext";
import { useLocation } from "react-router-dom";

const ContentModal = (props) => {
  const { setModalContent, closeModal, modalContent } = useContext(ContentModalContext);
  const {openModal}  = useContext(FormModelContext);
  const location = useLocation();
  // console.log(modalContent);
  const isBaseSlugPage = /^\/[^/]+$/.test(location.pathname);
  return (
    <div className="fixed w-full max-w-[440px] top-0 right-0 bottom-0 bg-white z-20 mt-[81px] md:mt-[87px] lg:mt-[58px] mb-[35px] sm:mb-[38px] md:mb-0 shadow-[0_0_2rem_rgb(0_0_0_/_20%)] text-[#2f2f2f]">
      <div className=" h-full grid grid-rows-[auto_1fr_auto]">
        <div className="flex justify-between items-center pt-9 px-5 pb-5 border-b border-b-[rgb(0_0_0_/_10%)] font-semibold">
          <h6>{modalContent?.heading || "Default Heading"}</h6>
          <button
            className="text-[1.25rem] hover:cursor-pointer"
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <div className="overflow-y-scroll">
        {modalContent.Content.map((items)=>{
          return (
            <p className="pr-[10px] mt-5 mb-5 mr-[10px] ml-5 text-[0.875rem]">{items.Content}</p>
          )
        })}
        </div>
        {isBaseSlugPage && (
          <div className="w-full flex pt-0 pr-5 pb-2 pl-5">
            <a
              className="w-full px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px] border border-amber-50 font-semibold text-center hover:cursor-pointer"
              onClick={() => openModal()}
            >
              I'm interested in this project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentModal;
