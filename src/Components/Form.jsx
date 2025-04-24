import useCustomForm from "../hooks/useCustomForm";

const Form = (props) => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useCustomForm();

  const parent = props.parent;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`w-full h-full flex flex-col items-center mt-[0px]`}>
        <div
          className={`w-full flex flex-col sm:flex-row lg:flex-col ${
            parent == "getintouch" ? "lg:flex-row" : ""
          }`}
        >
          <div className="flex-1 my-[7px] px-[3.5px]">
            <input
              type="text"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Enter your name*"
              disabled={isSubmitting}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex-1 my-[7px] px-[3.5px] ">
            <input
              type="text"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Your phone number*"
              disabled={isSubmitting}
              {...register("mobile")}
            />
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>
          <div className="flex-1 my-[7px] px-[3.5px] ">
            <input
              type="email"
              id="name"
              className="w-full border bg-[#f5f5f5] border-gray-300 rounded-md p-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
              placeholder="Your email address*"
              disabled={isSubmitting}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div
          className={`flex gap-x-2 ${
            parent == "upperBanner" ? "self-start" : ""
          } mt-[7px] mb-[10px]`}
        >
          <label className="font-normal flex items-center hover:cursor-pointer">
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
      </div>
      <div className="flex justify-center items-center">
        <button
          className="px-[15px] py-[5px] text-[1rem] bg-[#2f2f2f] text-white hover:cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </div>
    </form>
  );
};

export default Form;
