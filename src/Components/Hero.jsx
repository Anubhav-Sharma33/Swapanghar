import Button from "./UI/ProjectDetails/Button";

const Hero = ({ project_details, quickDetails, location, parent }) => {
  // Decide className based on parent
  const getVisibilityClasses = () => {
    if (parent === "Banner") {
      return "hidden lg:flex"; // hidden on mobile, flex on desktop
    } else if (parent === "Form") {
      return "flex lg:hidden"; // flex on mobile, hidden on desktop
    }
    return ""; // fallback
  };

  return (
    <div
      className={`w-full justify-center items-center pb-[1rem] ${getVisibilityClasses()} font-bold`}
    >
      <div
        className={`flex flex-col items-center justify-center ${
          parent == "Banner" ? "" : "items-center"
        }`}
      >
        <div
          className={`${
            parent == "Banner" ? "mb-[20px] self-start" : "mb-[20px]"
          }`}
        >
          <h1
            className={`${
              parent == "Banner"
                ? "text-[calc(1.3rem+0.6vw)]"
                : " flex justify-center text-[2.5rem]"
            }`}
          >
            {project_details.projectRef.name}
          </h1>
          <h6
            className={` ${
              parent == "Banner"
                ? "text-[14px] pt-[0.5rem]"
                : "flex justify-center items-center gap-x-2 text-lg pt-[0.5rem]"
            }`}
          >
            <i className="fa fa-map-marker-alt text-secondary mr-[10px]"></i>
            {location.projectAddress}
          </h6>
        </div>
        <ul
          className={`flex  items-center gap-x-2 text-[1rem] ${
            parent == "Banner" ? "self-start" : "justify-center"
          }`}
        >
          <li>Price : Price on Request</li>
          <li>{quickDetails[0]?.data}</li>
        </ul>
        <div
          class={`${
            parent == "Banner"
              ? "bg-white text-black self-start mt-[1rem] flex "
              : "hidden"
          }`}
        >
          <a
            className={`flex items-center gap-x-[10px] text-center px-[20px] py-[9px] text-[14px]  min-w-[120px] hover:cursor-pointer font-semibold`}
            href="https://wa.me/917814457626" target="_blank">
            <span>
              <strong>Get details on</strong>{" "}
            </span>
            <i class="fab fa-whatsapp text-[#25d366] text-[1.5rem]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
