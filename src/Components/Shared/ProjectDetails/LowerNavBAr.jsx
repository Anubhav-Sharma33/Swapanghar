import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const LowerNavBar = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-30 bg-[linear-gradient(rgb(229,247,163),rgb(160,164,56),rgb(136,144,53))] shadow-[0_0_10px_rgba(0,0,0,0.15)] flex md:hidden text-white  text-center text-[1rem] font-normal">
        <a className="flex-1 px-[5px] py-[8px] border border-[rgba(0,0,0,0.15)] border-l-0">
            <strong>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />Call
            </strong>
            
        </a>
        <a className="flex-1 px-[5px] py-[8px] border border-[rgba(0,0,0,0.15)] border-l-0">
            <strong>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Enquire
            </strong>
            
        </a>
        <a className="flex-1 px-[5px] py-[8px] border border-[rgba(0,0,0,0.15)] border-l-0">
            <span><strong>Get Details on</strong></span>
            <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
        </a>
    </div>
  )
}

export default LowerNavBar;
