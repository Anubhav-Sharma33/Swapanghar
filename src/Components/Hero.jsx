
const Hero = () => {
    return (
      <div className="w-full flex justify-center item-center pb-[1rem] lg:hidden">
        <div className="flex flex-col items-center">
          <div className="mb-[20px]">
            <span className="flex justify-center text-[2.5rem]">Orchard at Godrej SE7EN</span>
            <span className="flex justify-center items-center gap-x-2 text-lg pt-[0.5rem]"><i className="fa fa-map-marker-alt text-secondary"></i> Joka Kolkata</span>
          </div>
          <ul className="flex justify-center items-center gap-x-2 text-[1rem]">
            <li >Price : Price on Request</li>
            <li>2 & 3 BHK</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Hero