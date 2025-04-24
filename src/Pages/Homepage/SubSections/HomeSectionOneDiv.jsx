import HomeSectionOneButton from "./HomeSectionOneButton";
import HomeSectionOneImage from "./HomeSectionOneImage";


export default function HomeSectionOneDiv() {
  return (
    <div className = "w-full">
      <HomeSectionOneImage image = {"https://www.starestate.com/assets/images/img-realty-check.webp"}/>
      {/* Apply background image here */}
      <HomeSectionOneButton/>
    </div>
  );
}