const Hero = ({ project_details, quickDetails, location, parent}) => {
  // Decide className based on parent
  const getVisibilityClasses = () => {
    if (parent === "Banner") {
      return "hidden lg:flex";  // hidden on mobile, flex on desktop
    } else if (parent === "Form") {
      return "flex lg:hidden"; // flex on mobile, hidden on desktop
    }
    return ""; // fallback
  };

  return (
    <div className={`w-full justify-center items-center pb-[1rem] ${getVisibilityClasses()}`}>
      <div className={`flex flex-col ${parent == "Banner" ? "" : "items-center"}`}>
        <div className="mb-[20px]">
          <h1 className={`${parent == "Banner" ? "text-[calc(1.3rem+0.6vw)]" : " flex justify-center text-[2.5rem]" }`}>
            {project_details.projectRef.name}
          </h1>
          <h6 className={` ${parent == "Banner" ? "text-[14px] pt-[0.5rem]" : "flex justify-center items-center gap-x-2 text-lg pt-[0.5rem]"}`}>
            <i className="fa fa-map-marker-alt text-secondary mr-[10px]"></i>
            {location.projectAddress}
          </h6>
        </div>
        <ul className={`flex  items-center gap-x-2 text-[1rem] ${parent == "Banner" ? "flex-start" : "justify-center"}`}>
          <li>Price : Price on Request</li>
          <li>{quickDetails[0]?.data}</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
