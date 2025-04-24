import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import FooterMenu from "./FooterMenu";

const menu1 = {
  title: "PROJECTS",
  social:false,
  submenu: [
    // ✅ Submenu should be assigned to a key
    { placeholder: "Commercial", link: "#" },
    { placeholder: "New Launches", link: "#" },
    { placeholder: "Residential", link: "#" }, // ✅ Added a valid second object
  ],
};
const menu2 = {
    title: "COMPANY",
    social:false,
    submenu: [
      { placeholder: "About Star Estate", link: "#" },
      { placeholder: "FAQs", link: "#" },
    ],
  };
  
  const menu3 = {
    title: "MEDIA",
    social:false,
    submenu: [
      { placeholder: "Advertisements", link: "#" },
      { placeholder: "Awards", link: "#" },
      { placeholder: "Blogs", link: "#" },
      { placeholder: "Events", link: "#" },
      { placeholder: "News", link: "#" },
    ],
  };
  
  const menu4 = {
    title: "EXPLORE",
    social:false,
    submenu: [
      { placeholder: "Buyer Guide", link: "#" },
      { placeholder: "Careers", link: "#" },
      { placeholder: "Contact Us", link: "#" },
      { placeholder: "Disclaimer", link: "#" },
      { placeholder: "Privacy Policy", link: "#" },
      { placeholder: "Sitemap", link: "#" },
    ],
  };

  const menu5 = {
    title: "FOLLOW US",
    social:true,
    submenu: [
      { placeholder: <FaFacebookF />, link: "https://facebook.com" },
      { placeholder: <FaInstagram />, link: "https://instagram.com" },
      { placeholder: <FaLinkedinIn />, link: "https://linkedin.com" },
      { placeholder: <FaXTwitter />, link: "https://twitter.com" },
      { placeholder: <FaYoutube />, link: "https://youtube.com" },
    ],
  };
  


export default function FooterNavigation() {
  return (
    <div className="w-full bg-black text-white">
      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-y-0 w-full max-w-[95%] py-10 px-3 mx-auto">
        <FooterMenu menu={menu1} />
        <FooterMenu menu={menu2} />
        <FooterMenu menu={menu3} />
        <FooterMenu menu={menu4} />
        <FooterMenu menu={menu5} />
      </div>
    </div>
  );
}
