import ProjectPreviewCard from "../../../Components/ProjectPreviewCard";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import { useProjects } from "../../../hooks/useQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectPreviewSection = () => {
  const { data, isLoading, error } = useProjects();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for 1200px and above
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Below 1200px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Below 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <SectionWrapper>
      <div className="flex justify-center items-center mb-[20px]">
        <h1 className="text-2xl md:text-3xl font-bold drop-shadow-sm uppercase">
        Featured Projects
        </h1>
      </div>
      <div className="w-full custom-slider-arrows px-5">
        <Slider {...settings}>
          {data.map((item) => (
            <ProjectPreviewCard item={item} />
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default ProjectPreviewSection;
