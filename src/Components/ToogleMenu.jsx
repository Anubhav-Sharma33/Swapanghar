import { useState, useEffect } from "react";
import MenuWithSubMenu from "./MenuWithSubmenu";
import {list3,list4 } from "./Shared/OtherPages/Navbar";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Togglemenu({data}) {
  const {cityLocation,projectBy} = data;
  const [openIndex, setOpenIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location.pathname]); 

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="
        absolute 
        top-full 
        right-0 
        z-1000 
        bg-white 
        w-[290px] 
        /* For small screens, cap the height to the viewport minus some padding */
        max-h-[calc(100vh-5rem)] 
        /* For large screens (lg:), fix it at 400px */
        lg:max-h-[400px] 
        shadow-lg 
        border 
        border-gray-200 
        rounded-lg 
        flex 
        flex-col
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Scrollable menu items */}
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-1 p-2">
          <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
              About Us
            </a>
          </li>

          <MenuWithSubMenu title = {"City"} list={cityLocation} index={0} openIndex={openIndex} handleToggle={handleToggle} isLargeScreen={isLargeScreen}  />
          <MenuWithSubMenu title = {"Builder"} list={projectBy} index={1} openIndex={openIndex} handleToggle={handleToggle} isLargeScreen={isLargeScreen} />
          <MenuWithSubMenu  title = {"Projects"} list={list3} index={2} openIndex={openIndex} handleToggle={handleToggle} isLargeScreen={isLargeScreen} />
          <MenuWithSubMenu title = {"Media"} list={list4} index={3} openIndex={openIndex} handleToggle={handleToggle} isLargeScreen={isLargeScreen}/>

          <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Social icons remain at the bottom */}
      <hr className="border-gray-200" />
      <div className="flex justify-center gap-4 p-3">
        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={20} /></a>
        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
        <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
        <a href="#" className="text-gray-800 hover:text-black"><FaXTwitter size={20} /></a>
        <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={20} /></a>
      </div>
    </div>
  );
}

// (Your MenuWithSubMenu component stays the same)
