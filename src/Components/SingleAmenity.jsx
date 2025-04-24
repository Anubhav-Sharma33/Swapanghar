import { urlFor } from "../utils/imageUrl"

const SingleAmenity = ({image,title}) => {
    return (
      <div className = "px-4">
        <div className="h-full flex flex-col items-center justify-center text-center px-5 py-4 text-[14px] gap-y-[10px] bg-white/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-white">
          <div className="w-[60px] flex-none">
            <img
              src={urlFor(image).url()}
              className="w-full h-auto object-cover filter invert brightness-0"
            />
          </div>
          <p>{title}</p>
        </div>
      </div>
    )
  }
  
  export default SingleAmenity
  