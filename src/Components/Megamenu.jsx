import { Link } from "react-router-dom";

export default function Megamenu(props) {
    const { title, list } = props;
  
    return (
      <div className="absolute left-0 right-0 top-full w-full z-[1000] flex flex-col justify-start px-4 py-2 bg-white max-w-[1340px] max-h-[50vh] overflow-y-auto mx-auto shadow-lg 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 scrollbar-hide">
        <div className="text-lg font-bold text-gray-800 mb-2">{title}</div>
        <div className="border-b border-green-600 mb-2"></div>
        <div>
          <ul className="grid grid-cols-4 gap-4 text-gray-700">
            {list.map((cur, index) => {
              let val = "";
              let href = "";
              if(title === "Builder"){
                val = cur.builderName
                href = "/builder/"+cur.builderName.replace(/\s+/g, "").toLowerCase()
                }
                else if(title === "Projects"){
                val = cur.projectType
                href = "/projects/"+cur.projectType.replace(/\s+/g, "").toLowerCase()
                }else if(title === "City"){
                val = cur.name
                href = "/city/"+cur.name.replace(/\s+/g, "").toLowerCase()
                }
              return(
                <Link to = {href}>
                  <li key={index} className="text-sm py-2 border-b border-gray-200">
                  {val}
              </li>
              </Link>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
  