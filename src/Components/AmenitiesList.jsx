import Slider from "react-slick";
import SingleAmenity from "./SingleAmenity";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AmenitiesList = ({amenitiesList}) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden px-10 z-20">
      <Slider {...settings}>
        {amenitiesList.map((cur)=>{
            const {image,title} = cur.amenity;
            return(
                <SingleAmenity title = {title} image = {image}/>)
        })}
      </Slider>
    </div>
  );
};

export default AmenitiesList;
