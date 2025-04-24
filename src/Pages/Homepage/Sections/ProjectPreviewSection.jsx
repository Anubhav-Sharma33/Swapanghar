import ProjectPreviewCard from "../../../Components/ProjectPreviewCard";
import SectionWrapper from "../../../Components/UI/ProjectDetails/SectionWrapper";
import { useProjects } from "../../../hooks/useQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ProjectPreviewSection = () => {
  const { data, isLoading, error } = useProjects();
  console.log(data);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
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
      <div className="flex justify-center items-center mb-[20px] text-[1.75rem] font-bold">
        <h3>Featured Projects</h3>
      </div>
      <div className="w-full custom-slider-arrows">
        <Slider {...settings}>
          {data.map((item) => (
            <ProjectPreviewCard item = {item}
            />
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default ProjectPreviewSection;
