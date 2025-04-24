import MenuLink from "./MenuLink"

const Menu = () => {
  return (
    <nav className="hidden lg:block">
        <div className="flex items-center">
            <ul className="flex items-center gap-x-[2.5rem]">
                <MenuLink name = {"Overview"} section={"#AboutSection"}/>
                <MenuLink name = {"Amenities"} section = {"#AmenitiesSection"}/>
                <MenuLink name = {"Plans & Price"} section ={"#FloorPlanSection"}/>
                <MenuLink name = {"Gallary"} section = {"#GallarySection"}/>
                <MenuLink name = {"Location"} section = {"#LocationSection"}/>
            </ul>
        </div>
    </nav>
  )
}

export default Menu