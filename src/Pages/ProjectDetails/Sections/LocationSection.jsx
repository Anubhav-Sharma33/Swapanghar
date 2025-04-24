import LocationAddress from "../../../Components/LocationAddress";
import LocationAdvantage from "../../../Components/LocationAdvantage";
import Button from "../../../Components/UI/ProjectDetails/Button";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import { ContentModalContext } from "../../../Store/Context/ContentModalContext";
import { useContext } from "react";
import { urlFor } from "../../../utils/imageUrl";

const LocationSection = ({location}) => {
  const { openModal } = useContext(ContentModalContext);
  const content = {heading: "Location", Content:location.data1[0].LocationContent}
  const locationAddress = [
    {
      title:"Address",
      location :location.projectAddress,
    },
    {
      title:"City",
      location :location.cityLocation.name
    },
    {
      title:"State",
      location :location.state.name
    },
    {
      title:"Country",
      location : "India"
    },
  ]
  return (
    <SectionWrapper className="pb-[2.5rem]" id= "LocationSection">
      <div className="flex flex-col items-center mb-[20px]">
        <h1 className="text-[#2f2f2f] text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
          Location
        </h1>
        <p className="text-center font-normal mb-[1rem] text-[1rem]">
          {location.data1[0].LocationContent} 
          {/* Make map */}
        </p>
        <div className="flex gap-x-[10px] mt-[1rem] justify-center">
        <Button className={"bg-[#2f2f2f] text-white"} type="button" onClick={() => {
              openModal(content);
            }}>
        READ MORE
        </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-[20px] lg:flex-row-reverse lg:items-start">
        <div className="w-full px-[0.75rem] lg:w-1/2">
          <div
            className="p-[1rem]"
            style={{
              background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
              boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
            }}
          >
            <div>
              <a href="#">
                <img
                  src={urlFor(location.locationMap).url()}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-[0.75rem] lg:w-1/2">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              {location.data.map((cur) => {
                let {image,title} = cur.LocationAdvantagesId;
                let distance = cur.proximity+cur.unit;
                return (
                   <LocationAdvantage
                    image={image}
                    title={title}
                    distance={distance}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="flex flex-col mt-[1rem] p-[1rem] text-[14px] border border-[#116d42]"
            style={{
              background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
              boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-[20px]">
              {locationAddress.map((cur) => {
                return (
                  <LocationAddress title={cur.title} location={cur.location} />
                );
              })}
            </div>
            <div className="mt-[2.5rem] flex">
             <Button className={"bg-gradient-to-br from-[#eff0f3] to-[#ffffff] text-[#2f2f2f]  shadow-[3px_3px_3px_#e8e6e6,-3px_-3px_3px_#fff] "}><i className="fa fa-map-marker-alt mr-[5px]"/> VIEW ON MAP</Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LocationSection;
