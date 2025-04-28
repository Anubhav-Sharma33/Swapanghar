import Form from "../../../Components/Form"
import Hero from "../../../Components/Hero"
import ReraBox from "../../../Components/Rerabox"

const FormSection = ({project_details,quickDetails,location}) => {
  // console.log(project_details);
    return (
    <div className="w-full p-[20px] bg-[url('https://www.starestate.com/assets/images/card-bg.jpg')] bg-cover bg-center lg:absolute lg:top-[10%] lg:right-[0%] lg:max-w-[330px] z-20">
        <ReraBox parent ={"Form"} project_details = {project_details}/>
        <Hero project_details = {project_details} quickDetails = {quickDetails} location = {location} parent = {"Form"}/>
        <Form parent = {"upperBanner"}/>
    </div>
  )
}

export default FormSection