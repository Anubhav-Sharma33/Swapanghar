import { useContext } from "react";
import { FormModelContext } from "../Store/Context/FormModalContext";
import useCustomForm from "../hooks/useCustomForm";

const FormModal = () => {
  const { closeModal } = useContext(FormModelContext);
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useCustomForm(closeModal);

  return (
    <div className="h-full m-[1rem] flex items-center justify-center">
      <div className="w-full relative bg-[url('https://www.starestate.com/assets/images/card-bg.webp')] p-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col items-center sm:max-w-[500px]">
        <button
          className="absolute top-[10px] right-[10px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#116d42] text-white hover:cursor-pointer text-[1rem] leading-none"
          onClick={() => closeModal()}
          disabled={isSubmitting}
        >
          ×
        </button>
        <div className="w-full pb-[16px] mb-[20px] border-b border-dashed border-b-[rgba(0,0,0,0.1)] text-[1rem] text-[#116d42] font-bold">
          <h6>Please fill the given form</h6>
        </div>
        <div className="w-full flex-1">
          <div className="w-full flex flex-col text-[14px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mb-[10px]">
                <label className="font-normal inline">Name*</label>
                <input
                  {...register("name")}
                  type="text"
                  className="w-full bg-white p-[8px] border-b-2 border-b-[rgba(0,0,0,0.1)]"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full mb-[10px]">
                <label className="font-normal inline">Email*</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-white p-[8px] border-b-2 border-b-[rgba(0,0,0,0.1)]"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full mb-[10px]">
                <label className="font-normal inline">Mobile*</label>
                <input
                  {...register("mobile")}
                  type="text"
                  className="w-full bg-white p-[8px] border-b-2 border-b-[rgba(0,0,0,0.1)]"
                  disabled={isSubmitting}
                />
                {errors.mobile && (
                  <p className="text-red-500">{errors.mobile.message}</p>
                )}
              </div>
              <div className="w-full flex mb-[10px] items-center">
                <label className="m-2 font-normal flex items-center hover:cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("acceptTerms")}
                    disabled={isSubmitting}
                    className="mr-[8px]"
                  />
                  I accept the Terms & Conditions.
                </label>
                {errors.acceptTerms && (
                  <p className="text-red-500">{errors.acceptTerms.message}</p>
                )}
              </div>
              <div className="flex">
                <button
                  className="px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px] border border-amber-50 font-semibold hover:cursor-pointer"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT"}
                </button>
              </div>
              <div className="flex justify-center mt-[1.5rem] items-center gap-x-[24px]">
                <h6>Request a callback</h6>
                <div>
                  <a className="px-[20px] py-[9px] text-[13px] bg-[#2f2f2f] text-white min-w-[120px] border border-amber-50 font-semibold">
                    <span>+91-7535975359</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
