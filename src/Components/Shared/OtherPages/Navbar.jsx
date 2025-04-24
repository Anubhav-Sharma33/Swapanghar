// What needs to be done:-
//1.Hover effect and padding and margin setup and font-size and font
//2.Megamenu Setup
//3.Toggler setup
//4.Split code into Components
import { useState, useEffect, useRef } from "react";
import ToogleMenu from "../../ToogleMenu";
import Wrapper from "../../UI/OtherPages/Wrapper";
import Megamenu from "../../Megamenu";


export const list3 = [
  {projectType:"Residential"},
  {projectType:"Commercial"},
  {projectType:"New Launches"},
  
]
export const list4 = [
  {listType:"Awards"},
  {listType:"News"},
  {listType:"Blogs"},
  {listType:"Events"},
  {listType:"Advertisements"},
];

export default function Navbar({data}) {
  const {states,projectBy} = data;

  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  function handleClick() {
    setIsOpen((cur) => {
      cur = !cur;
      console.log(isOpen);
      return cur;
    });
  }

  return (
    <Wrapper>
      <div className="flex items-center space-x-8">
        <div id="logo" className="text-xl font-bold">
          LOGO
        </div>
        <div
          id="navlinks"
          className="hidden lg:flex space-x-6 text-gray-600 font-medium"
        >
          <div className="group">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors flex items-center py-4"
            >
              <span>City</span>
              <i className="fa fa-caret-down ml-1"></i>
            </a>
            <Megamenu title={"City"} list={states} />
          </div>
          <div className="group">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors flex items-center py-4"
            >
              <span>Builder</span>
              <i className="fa fa-caret-down ml-1"></i>
            </a>
            <Megamenu title={"Builder"} list={projectBy}/>
          </div>
          <div className="group">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors flex items-center py-4"
            >
              <span>Projects</span>
              <i className="fa fa-caret-down ml-1"></i>
            </a>
            <Megamenu title ={"Projects"} list={list3} />
          </div>
        </div>
      </div>

      {/* Right section: Register, Search, Toggler */}
      <div className="flex items-center space-x-1">
        {/* Register as Channel Partner */}
        <a
          href="/channel-partners-registration"
          target="_blank"
          rel="noopener noreferrer"
          className="searchBtn px-3 py-4 text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2"
          title="Register as a Channel Partner"
        >
          <span className="hidden lg:inline">
            Register as a Channel Partner
          </span>
          <i className="fa fa-user ml-1 text-green-600"></i>
        </a>

        {/* Vertical separator */}
        <span className="border-r-2 border-gray-300 h-6" />

        {/* Search Property */}
        <button
          className="searchBtn px-3 py-4 text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer flex items-center space-x-2"
          title="Search Property"
        >
          <span className="hidden lg:inline">Search Property</span>
          <i className="fa fa-search ml-1 text-green-600"></i>
        </button>

        {/* Vertical separator */}
        <span className="border-r-2 border-gray-300 h-6" />

        {/* Hamburger Menu Toggler */}
        <div
          className="menuBtn cursor-pointer px-3 py-4"
          ref={menuRef}
          title="Toggle Menu"
          onClick={handleClick}
        >
          <span id="menuLine1" className="block w-6 h-0.5 bg-black mb-1"></span>
          <span id="menuLine2" className="block w-6 h-0.5 bg-black mb-1"></span>
          <span id="menuLine3" className="block w-6 h-0.5 bg-black mb-1"></span>
          {isOpen && <ToogleMenu data = {data} setShowMenu={setShowMenu}/>}
        </div>
      </div>
    </Wrapper>
  );
}
