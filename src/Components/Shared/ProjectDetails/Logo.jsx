import { Link } from "react-router-dom";

const Logo = (props) => {
    return (
      <div className = {`py-1 flex`}>
        <Link
          className="h-auto"
          to="/"
        >
          <img
            className="h-10 w-auto lg:h-12.5"
            src={props.src}
          />
        </Link>
      </div>
    );
  };
  
  export default Logo;
  