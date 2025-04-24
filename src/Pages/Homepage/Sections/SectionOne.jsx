import HomeSectionOneDiv from "../SubSections/HomeSectionOneDiv";

export default function SectionOne() {
  return (
    <div className="w-full py-10">
      <div className = "flex justify-center max-w-[1340px] mb-5 mx-auto px-3">
        <h1 className="text-black text-2xl md:text-3xl font-bold">Insights & Tools</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 m-auto max-w-[1340px]">
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
      </div>
    </div>
  );
}
