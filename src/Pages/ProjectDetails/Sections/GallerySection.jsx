import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagesSubSection from "../../../Components/ImagesSubSection";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";

const GallerySection = ({projectGallery}) => {
  const [index, setIndex] = useState(0);
  const total = projectGallery.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    // ✅ Proper cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [total]);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <SectionWrapper className="pb-[2.5rem] bg-[#2f2f2f]" id = "GallarySection">
      <div className="w-full flex justify-center mb-[20px]">
          <h1 className="text-white text-[1.75rem] sm:text-[calc(1.33rem+0.9vw)] xl:text-[2rem] font-bold mb-[1rem]">
            Gallery
          </h1>
        </div>
        <div className="w-full relative">
          <ImagesSubSection curImage={projectGallery[index]} />
          {/* Left Arrow */}
          <div
            className="absolute w-[calc(10%-10px)] flex items-center justify-center h-full top-0 left-0 z-20 cursor-pointer bg-black/75"
            onClick={goPrev}
          >
            <ChevronLeft className="text-white w-10 h-10" />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute w-[calc(10%-10px)] flex items-center justify-center h-full top-0 right-0 z-20 cursor-pointer bg-black/75"
            onClick={goNext}
          >
            <ChevronRight className="text-white w-10 h-10" />
          </div>
        </div>
    </SectionWrapper>
  );
};


export default GallerySection;
