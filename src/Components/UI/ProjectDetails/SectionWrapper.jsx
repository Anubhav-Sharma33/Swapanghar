const SectionWrapper = ({children, id = "", style = {}, className = ""}) => {
    return (
      <div className={`${className} w-full scroll-mt-[calc(81px-2rem)] md:scroll-mt-[calc(86px-2rem)] lg:scroll-mt-[calc(57px-2rem)] pt-[2.5rem]`} style = {style} id = {id}>
        <div className=" w-full flex flex-col items-center justify-center px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto">   
          {children}
        </div>
      </div>
    );
  };
  
  export default SectionWrapper;
  