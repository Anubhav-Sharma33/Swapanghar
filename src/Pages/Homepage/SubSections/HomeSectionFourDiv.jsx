export function HomeSectionFourDiv(props) {
    return (
        <div className="relative">
        <a>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
      
          {/* AWARDS Text */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold">
            AWARDS
          </div>
      
          {/* Image */}
          <img src={props.image} className="w-full h-[380px] object-cover object-center" />
        </a>
      </div>
    );
  }
  