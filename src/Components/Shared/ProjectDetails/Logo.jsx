const Logo = (props) => {
    return (
      <div className = {`py-1 flex`}>
        <a
          className="h-auto"
          href="https://www.starestate.com/builder/prestige-group"
        >
          <img
            className="h-10 w-auto lg:h-12.5"
            src={props.src}
          />
        </a>
      </div>
    );
  };
  
  export default Logo;
  