import Navbar from "./NavBar";


const Header = ({project_details}) => {
  const {project_logo} = project_details
  return (
    <header className='sticky top-0 z-30'>
      <Navbar projectLogo = {project_logo}/>
    </header>
  )
}

export default Header;