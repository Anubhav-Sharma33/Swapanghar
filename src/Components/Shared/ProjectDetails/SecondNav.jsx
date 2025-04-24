const SecondNav = () => {
    return (
      <div className="w-full flex justify-center items-center font-bold [background:linear-gradient(rgb(229,247,163),rgb(160,164,56),rgb(136,144,53))] min-h-[45px] shadow-[0_4px_20px_0_#0000000f] backdrop-blur-[10px] text-white lg:hidden">
          <div className="flex justify-center items-center flex-wrap gap-x-6">
              <a href = "#AboutSection">Overview</a>
              <a href = "#AmenitiesSection">Amenitites</a>
              <a href = "#FloorPlanSection">Plans & Price</a>
              <a href = "#GallarySection">Gallary</a>
              <a href = "#LocationSection">Location</a>
          </div>
      </div>
    )
  }
  
  export default SecondNav