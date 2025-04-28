import { urlFor } from "../../../utils/imageUrl";
import Logo from "./Logo";
import Menu from "./Menu";
import SecondNav from "./SecondNav";
import urlBuilder from "@sanity/image-url";

const Navbar = ({projectLogo}) => {
  return (
    <div className="w-full bg-white shadow">
      <div className="w-full lg:w-[91%] lg:px-3 max-w-[1340px] m-auto flex flex-col items-center">
        <div className="w-full flex justify-between px-5 lg:px-0">
          <Logo
            src={
              urlFor(projectLogo).url()
            }
          />
          <Menu />
          <Logo
            src={
              "https://www.starestate.com/assets/images/logo-starestate.webp"
            }
          />
        </div>
        <SecondNav />
      </div>
    </div>
  );
};

export default Navbar;
