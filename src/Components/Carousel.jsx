import { useEffect, useState } from "react";
import { urlFor } from "../utils/imageUrl";

const Carousel = ({banners}) => {
  const base = "https://sar.ecis.in/api/starestate/star_estate";
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState(urlFor(banners[index].desktop_image_url).url()); // Initial image

  // **Change image every 3 seconds**
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // **Update image when index changes**
  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      let newUrl = urlFor(banners[index].desktop_image_url).url(); // Default to desktop image

      if (width <= 648) {
        newUrl = urlFor(banners[index].mobile_image_url).url();
      } else if (width <= 1024) {
        newUrl = urlFor(banners[index].tablet_image_url).url();
      }

      setUrl(newUrl);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [index]); // Runs whenever `index` updates

  return (
    <div className="w-full h-full">
      <img src={url} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default Carousel;
