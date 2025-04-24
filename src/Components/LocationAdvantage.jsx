import { urlFor } from "../utils/imageUrl";

const LocationAdvantage = ({image,title,distance}) => {
    return (
      <div>
        <div
          className="w-full h-full flex p-[1rem] gap-x-[10px] text-[14px] font-bold items-center"
          style={{
            background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
            boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
          }}
        >
          <div
            className="h-auto max-h-[30px] basis-[30px] shrink-0"
            style={{ filter: "hue-rotate(45deg)" }}
          >
            <img src={urlFor(image).url()} className="w-full h-auto object-cover" />
          </div>
          <p className="mb-[0.25rem] font-bold">
            {title}
            <span className="inline-block bg-[#007bff] text-white ml-[0.25rem] text-[0.70em] px-[0.65em] py-[0.35em] font-semibold text-center rounded-md lg:mt-[0.25em]">
              {distance}
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default LocationAdvantage;
  