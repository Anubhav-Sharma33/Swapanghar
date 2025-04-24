import { useState, useEffect } from "react";
import { urlFor } from "../utils/imageUrl";

const ImagesSubSection = (props) => {
  const curImage = props.curImage;
  const [image, setImage] = useState(curImage.desktopImage);

  useEffect(() => {
    function updateImage() {
      if (window.innerWidth < 640) {
        setImage(curImage.mobileImage);
      } else {
        setImage(curImage.desktopImage);
      }
    }

    function handleResize() {
      updateImage();
    }

    window.addEventListener("resize", handleResize);
    updateImage();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [curImage]);

  return (
    <div className="flex-grow flex-shrink">
      <img src={urlFor(image).url()} alt="responsive" className={`w-full ${window.innerWidth<640 ? "h-[300px]" : "h-[420px]"} object-cover`} />
      <div className="absolute bottom-[10px] left-0 text-white font-semibold bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] px-[20px] py-[10px] text-[14px] leading-normal">Orchard At Godrej Se7en</div>
    </div>
  );
};

export default ImagesSubSection;
