import HomeSectionThreeDiv from "../SubSections/HomeSectionThreeDiv";


export default function SectionThree() {
  return (
    <div className="py-10 w-full">
      <div className="flex justify-center max-w-[1340px] mb-5 mx-auto px-3">
        <h1 className="text-black text-3xl font-bold text-center">
          Find your dream property in the city you're searching in
        </h1>
      </div>
      <div className="grid m-auto gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-4 max-w-[1340px] px-3">
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
      </div>
    </div>
  );
}
