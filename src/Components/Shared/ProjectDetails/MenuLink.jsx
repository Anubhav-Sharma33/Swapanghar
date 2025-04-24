const MenuLink = (props) => {
    return (
      <li className='flex items-center'><a href = {props.section} className='py-4 hover:cursor-pointer'>{props.name}</a></li>
    )
  }
  
  export default MenuLink