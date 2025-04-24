
const LocationAddress = (props) => {
    return (
      <div className="w-full">
          <p>
              <strong className="text-[#116d42]">{props.title}: </strong>
              <span>{props.location}</span>
          </p>
      </div>
    )
  }
  
  export default LocationAddress